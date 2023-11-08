"use client";

import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, profileRes] = await Promise.all([
          axios.get(`${process.env.API}/dashboard`),
          axios.get(`${process.env.API}/events`),
        ]);
        setEvents(eventsRes.data);
        setProfile(profileRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setValue(3);
  }, []);
  const contextValue = useMemo(
    () => ({ profile, events, value }),
    [profile, events, value]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { ContextProvider, UserContext };
