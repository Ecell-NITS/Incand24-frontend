"use client";

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
  console.log(data);

  return (
    <main>
      {isLoggedIn ? <h1>Dashboard</h1> : <h1>Not Logged In</h1>}
      {data?.map((item) => {
        return (
          <>
            <div key={item.id}>
              <ul>
                <li>name: {item?.name}</li>
                <li>email: {item?.email}</li>
                <li>role: {item?.role}</li>
                <li>verified: {item?.isVerified}</li>
                <li>2fa enabled: {item?.is2faEnabled}</li>
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
          </>
        );
      })}
    </main>
  );
};

export default Dashboard;
