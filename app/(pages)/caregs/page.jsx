import React, { useContext, useMemo } from "react";
import { useQuery } from "react-query";
import { UserContext } from "@/app/components/Context/CreateContext";
import { fetchCARegistrations } from "@/app/components/ReactQuery/Fetchers/CaRegistrations";

const Caregs = () => {
  const { isLoggedIn, role } = useContext(UserContext);
  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "admin");
  }, [isLoggedIn, role]);

  const queryKey = useMemo(() => ["caregs"], []);
  const { data, error, isError, isLoading } = useQuery(queryKey, fetchCARegistrations, {
    isEnabled,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <main>
      {isEnabled ? "All Campus Ambassdor registrations" : "You are not authorized"}
      {data?.allregs && (
        <div>
          {data?.allregs?.map((item) => {
            return (
              <div key={item.id}>
                <ul>
                  <li>name: {item?.name}</li>
                  <li>institute name: {item?.college}</li>
                  <li>contact: {item?.phone}</li>
                  <li>email: {item?.email}</li>
                  <li>email: {item?.registeredAt}</li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Caregs;
