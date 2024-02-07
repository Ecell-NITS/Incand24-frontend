"use client";

import React, { useContext, useMemo } from "react";
import { useQuery } from "react-query";
import { UserContext } from "@/app/components/Context/CreateContext";
import { fetchContactUsRes } from "@/app/components/ReactQuery/Fetchers/ContactRes";

const ContactUsResponsesPage = () => {
  const { isLoggedIn, role } = useContext(UserContext);
  const isEnabledT = useMemo(() => {
    return Boolean(isLoggedIn && role === "admin");
  }, [isLoggedIn, role]);

  const queryKey = useMemo(() => ["contactRes"], []);
  const { data, error, isError, isLoading } = useQuery(queryKey, fetchContactUsRes, {
    isEnabled: isEnabledT,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <main>
      <h1> {isEnabledT ? "All Contact Us Responses" : "You are not authorized"}</h1>
      <hr />
      {data?.length === 0 && <p style={{ color: "red" }}>No responses yet</p>}
      {data && (
        <div>
          {data?.map((item) => {
            return (
              <div key={item.email}>
                <ul>
                  <li>name: {item?.name}</li>
                  {item?.contact && (
                    <li>
                      contact: <a href={`tel:${item?.contact}`}>{item?.contact}</a>
                    </li>
                  )}
                  {item?.contact === "" && <li>contact: Not provided</li>}
                  <li>
                    email: <a href={`mailto:${item?.email}`}>{item?.email}</a>
                  </li>
                  <li>Message: {item?.message}</li>
                  <li>Sent at: {item?.SentAt}</li>
                  <hr />
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default ContactUsResponsesPage;
