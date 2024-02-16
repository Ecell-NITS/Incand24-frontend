"use client";

/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import events from "@/_db/events";
import concerts from "@/_db/concerts";
import styles from "./EventBody.module.scss";
import NewTimeline from "../NewTimeline/NewTimeline";

const EventBody = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [data, setData] = useState(events);
  const handleClick = (newTab) => {
    setActiveTab(newTab);
    if (newTab === "events") {
      setData(events);
    } else {
      setData(concerts);
    }
  };

  // console.log(activeTab, "activeTab")
  // console.log(data)
  return (
    <div className={styles.EventBody}>
      <div className={styles.Tab}>
        <div
          onClick={() => handleClick("events")}
          role="button"
          tabIndex={0}
          className={`${styles.TabItem} ${
            activeTab === "events" ? styles.TabItemActive : ""
          }`}
          name="events"
          id="events"
        >
          Events
        </div>
        <div
          onClick={() => handleClick("concerts")}
          role="button"
          tabIndex={0}
          className={`${styles.TabItem} ${
            activeTab === "concerts" ? styles.TabItemActive : ""
          }`}
          name="concerts"
          id="concerts"
        >
          Concerts
        </div>
      </div>
      <NewTimeline data={data} route={activeTab} />
    </div>
  );
};

export default EventBody;
