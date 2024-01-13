"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import styles from "./Loader.module.scss";
import animationData from "../../../public/loader.lottie";

const LoaderAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isFinishedLoading = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };
    isFinishedLoading();
    document.addEventListener("readystatechange", isFinishedLoading);
    return () => {
      document.removeEventListener("readystatechange", isFinishedLoading);
    };
  }, []);

  const loaderStyle = loading
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 9999,
      }
    : {};

  return (
    <div style={loaderStyle}>
      <div className={`${styles.container} ${loading ? styles.active : ""}`}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default LoaderAnimation;
