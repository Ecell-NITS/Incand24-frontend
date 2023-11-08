"use client";

import React from "react";
import { useQuery } from "react-query";
import { fetchProfile } from "@/app/components/ReactQuery/Fetchers/Profile";

const Dashboard = () => {
  const { data, error, isError, isLoading, isFetching } = useQuery(
    "profile",
    fetchProfile
  );
  if (isLoading || isFetching) return <div>Loading...</div>;
  if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <main>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>{item.title}</li>
            </ul>
          </div>
        );
      })}
    </main>
  );
};

export default Dashboard;
