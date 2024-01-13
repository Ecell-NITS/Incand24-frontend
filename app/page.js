"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Sponsor from "./components/Sponsor/Sponsor";
import styles from "./Home.module.scss";
import About from "./components/about/About";
import Social from "./components/SocialHandles/Social";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import LoaderAnimation from "./components/Loader/Loader";
import animationData from "../public/loader.lottie";

// import LottieAnimation from "./components/Loader/Loader";

const Home = () => {
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
        {/* <p>loading...</p> */}
      </div>
      <main className={styles.home}>
        <Navbar />
        <Hero />
        <About />
        <Sponsor />
        <Footer />
        <Social />
      </main>
    </div>
  );
};

export default Home;
