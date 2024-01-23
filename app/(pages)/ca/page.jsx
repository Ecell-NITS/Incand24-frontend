"use client";

import { useState, useEffect } from "react";
// import Navbar from "@/app/components/Navbar/Navbar";
import styles from "./CA.module.scss";
import CAhero from "@/app/components/ca_components/Hero/CAhero";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import CAabout from "@/app/components/ca_components/Hero/CAabout";

const CA = () => {
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
        <div className={styles.wrapper}>
          <div className={`${styles.load}`}>
            <h1>Diving into the dreams</h1>
          </div>
          {/* <div className={styles.dot_wrapper}> */}
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          {/* </div> */}
        </div>
      </div>
      <main className={styles.home}>
        <Navbar/>
        <CAhero />
        <CAabout/>
        <Footer />
      </main>
    </div>
  );
};

export default CA;
