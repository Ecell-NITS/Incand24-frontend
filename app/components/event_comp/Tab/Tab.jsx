"use client";

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from "react";
import styles from "./Tab.module.scss";

const Tab = () => {
  const [tag, setTag] = useState();
  const [prevTag, setPrevTag] = useState();

  const handleClick = (e) => {
    setPrevTag(tag);
    setTag(e.target);
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
    <div className={styles.Tab}>
      <div onClick={handleClick} className={`${styles.TabItem} ${styles.TabItemActive}`}>
        Events
      </div>
      <div onClick={handleClick} className={`${styles.TabItem}`}>
        Concerts
      </div>
    </div>
  );
};

export default Tab;
