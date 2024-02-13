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
    // console.log(tag)
  };
  const handleConcert = (e) => {
    handleClick(e);
    setData(concerts);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (document.querySelectorAll(`.${styles.TabItemActive}`)) {
        setTag(document.querySelectorAll(`.${styles.TabItemActive}`)[0]);
      }
      if (document.querySelectorAll(`.${styles.TabItemActive}`)) {
        setPrevTag(document.querySelectorAll(`.${styles.TabItemActive}`)[0]);
      }
    }
  }, []);

  useEffect(() => {
    prevTag?.classList.remove(`${styles.TabItemActive}`);
    tag?.classList.add(`${styles.TabItemActive}`);
    // console.log(tag?.id)
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
          name="events"
          id="events"
        >
          Events
        </div>
        <div
          onClick={handleConcert}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className={`${styles.TabItem}`}
          name="concerts"
          id="concerts"
        >
          Concerts
        </div>
      </div>
      <NewTimeline data={data} route={tag?.id} />
    </div>
  );
};

export default EventBody;
