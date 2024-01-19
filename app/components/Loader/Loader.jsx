"use client";

import React from "react";
import styles from "./Loader.module.scss";

const LottieAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.load}>Diving into the dreams</div>
        {/* <div className={styles.dot_wrapper}> */}
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LottieAnimation;
