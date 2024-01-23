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

  return (
    <main>
      {loading ? (
        <LottieAnimation />
      ) : (
        <main className={styles.home}>
          <Navbar />
          <Hero />
          <About />
          <Sponsor />
          <Footer />
          <Social />
        </main>
      )}
    </main>
  );
};

export default Home;
