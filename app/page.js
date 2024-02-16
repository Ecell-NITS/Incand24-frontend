"use client";

import { useState, useEffect } from "react";
import { Allura as allura } from "next/font/google";
// import Sponsor from "./components/Sponsor/Sponsor";
import styles from "./Home.module.scss";
import About from "./components/about/About";
import Social from "./components/SocialHandles/Social";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import ContactForm from "./components/ContactForm/ContactForm";
// import LoaderAnimation from "./components/Loader/Loader";
// import animationData from "../public/loader.lottie";

// import LottieAnimation from "./components/Loader/Loader";
const Allura = allura({
  weight: ["400"],
  subsets: ["latin"],
});
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [heightFixed, setHeightFixed] = useState(true);
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
      href: "/",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Sponsors",
      href: "/sponsors",
    },
    {
      name: "Team",
      href: "/team",
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
        {/* <Sponsor /> */}
        <ContactForm />
        <Footer homePage />
        <Social />
      </main>
    </div>
  );
};

export default Home;
