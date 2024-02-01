"use client";

import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const [role, setRole] = useState("client");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken");
    setFetching(false);
    if (fetching === true && token) {
      setIsLoggedIn(true);
    }
  }, [fetching]);

  useEffect(() => {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (isLoggedIn === true) {
      const fetchData = async () => {
        try {
          const [profileRes] = await Promise.all([
            axios.get(`${process.env.NEXT_PUBLIC_API_MAIN}/dashboard`, tokenConfig),
          ]);
          setProfile(profileRes.data);
          setRole(profileRes.data.role);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [isLoggedIn]);

  const contextValue = useMemo(
    () => ({
      profile,
      isLoggedIn,
      role,
    }),
    [profile, isLoggedIn, role]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { ContextProvider, UserContext };
