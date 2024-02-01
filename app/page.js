"use client";

import { useState, useEffect } from "react";
import Sponsor from "./components/Sponsor/Sponsor";
import styles from "./Home.module.scss";
import About from "./components/about/About";
import Social from "./components/SocialHandles/Social";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import LottieAnimation from "./components/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Incandescence 2024";
    const isFinishedLoading = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
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

  const heightFixedStyle = heightFixed
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

  useEffect(() => {
    if (!loading)
      setTimeout(() => {
        setHeightFixed(false);
      }, 6700);
  });

  const navlink = [
    {
      name: "Home",
      link: "hero",
    },
    {
      name: "About Us",
      link: "about",
    },
    {
      name: "Sponsors",
      link: "sponsor",
    },
  ];

  return (
    <div style={loaderStyle}>
      <div className={`${styles.container} ${loading ? styles.active : ""}`}>
        <div className={styles.wrapper}>
          <div className={`${styles.load} ${Allura.className}`}>
            <h1>Diving into the dreams</h1>
          </div>
          {/* <div className={styles.dot_wrapper}> */}
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          {/* </div> */}
        </div>
      </div>
      <main style={heightFixedStyle} className={styles.home}>
        <Navbar navlink={navlink} />
        <Hero loading={loading} />
        <About />
        <Sponsor />
        <Footer homePage />
        <Social />
      </main>
    </div>
  );
};

export default Home;
