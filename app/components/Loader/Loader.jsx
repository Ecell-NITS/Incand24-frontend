"use client";

import React from "react";
import Lottie from "lottie-react";
import styles from "./Loader.module.scss";
import animationData from "../../../public/loader.lottie";

const LottieAnimation = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default LottieAnimation;
