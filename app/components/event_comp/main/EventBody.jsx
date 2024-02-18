"use client";

/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import events from "@/_db/events";
import concerts from "@/_db/concerts";
import capre from "@/_db/capre";
import styles from "./EventBody.module.scss";
import NewTimeline from "../NewTimeline/NewTimeline";

const EventBody = () => {
  const [activeTab, setActiveTab] = useState("capre");
  const [data, setData] = useState(capre);
  const handleClick = (newTab) => {
    setActiveTab(newTab);
    if (newTab === "events") {
      setData(events);
    } else if (newTab === "concerts") {
      setData(concerts);
    } else {
      setData(capre);
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
          onClick={() => handleClick("capre")}
          role="button"
          tabIndex={0}
          className={`${styles.TabItem} ${
            activeTab === "capre" ? styles.TabItemActive : ""
          }`}
          name="capre"
          id="capre"
        >
          Capre Diem
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
