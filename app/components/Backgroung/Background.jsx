import React from "react";
import styles from "./Background.module.scss";

const Background = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div class={styles.stars1}></div>
        <div class={styles.stars2}></div>
        <div class={styles.stars3}></div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Background;
