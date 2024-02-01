"use client";

/* eslint-disable no-underscore-dangle */

import React, { useMemo, useContext } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { fetchProfile } from "@/app/components/ReactQuery/Fetchers/Profile";
import { UserContext } from "@/app/components/Context/CreateContext";

const Dashboard = () => {
  const { isLoggedIn } = useContext(UserContext);
  const queryKey = useMemo(() => ["dashboard"], []);
  const { data, error, isError, isLoading } = useQuery(queryKey, fetchProfile, {
    isEnabled: isLoggedIn,
  });
  const router = useRouter();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error has occurred: {error.message}</div>;
  const { name, email, role, isVerified, is2faEnabled } = data;

  return (
    <main>
      {isLoggedIn ? <h1>Dashboard</h1> : <h1>Not Logged In</h1>}

      <div>
        <ul>
          <li>name: {name}</li>
          <li>email: {email}</li>
          <li>role: {role}</li>
          <li>verified: {isVerified ? "true" : "false"}</li>
          <li>2fa enabled: {is2faEnabled ? "true" : "false"}</li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => {
            router.push("/caregs");
          }}
        >
          CA registrations
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
