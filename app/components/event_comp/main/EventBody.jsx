"use client";

import { useState, useEffect } from "react";
import events from "@/_db/events";
import concerts from "@/_db/concerts";
import styles from "./EventBody.module.scss";
import NewTimeline from "../NewTimeline/NewTimeline";

const EventBody = () => {
  // Tab component code
  const [tag, setTag] = useState();
  const [prevTag, setPrevTag] = useState();
  const [data, setData] = useState(events);

  const handleClick = (e) => {
    setPrevTag(tag);
    setTag(e.target);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPrevTag(tag);
      setTag(e.target);
    }
  };

  const handleEvent = (e) => {
    handleClick(e);
    setData(events);
  };
  const handleConcert = (e) => {
    handleClick(e);
    setData(concerts);
  };

  useEffect(() => {
    setTag(document.querySelectorAll(`.${styles.TabItemActive}`)[0]);
    setPrevTag(document.querySelectorAll(`.${styles.TabItemActive}`)[0]);
  }, []);

  useEffect(() => {
    prevTag?.classList.remove(`${styles.TabItemActive}`);
    tag?.classList.add(`${styles.TabItemActive}`);
  }, [tag, prevTag]);

  return (
    <div className={styles.EventBody}>
      <div className={styles.Tab}>
        <div
          onClick={handleEvent}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className={`${styles.TabItem} ${styles.TabItemActive}`}
        >
          Events
        </div>
        <div
          onClick={handleConcert}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className={`${styles.TabItem}`}
        >
          Concerts
        </div>
      </div>
      <NewTimeline data={data} />
    </div>
  );
};

export default EventBody;
