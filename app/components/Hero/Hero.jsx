"use client";

// eslint-disable-next-line camelcase
import { Passion_One } from "next/font/google";
import { React, useEffect, useState } from "react";
import Image from "next/image";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import Foreground from "../../../public/images/hero_assets/trees.svg";
import BirdLottie from "../BirdLottie/BirdLottie";

const passion = Passion_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--passion-font",
});

// const poppins = Allura({
//   weight: ["400"],
//   display: "swap",
//   subsets: ["latin"],
//   variable: "--allura-font",
// });
const Hero = ({ loading }) => {
  const [scroll, setScroll] = useState(0);
  const [night, setNight] = useState(false);
  const [birds, setBirds] = useState(false);

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setBirds(true);
      }, 6000);
    }

    // scroll prevention
    if (scroll < window.innerHeight * 1.1) {
      document.getElementsByClassName(styles.wrapper)[0].style.position = `fixed`;
      document.getElementsByClassName(styles.wrapper)[0].style.top = `0`;
    } else {
      document.getElementsByClassName(styles.wrapper)[0].style.position = `absolute`;
      document.getElementsByClassName(styles.wrapper)[0].style.bottom = `0`;
      document.getElementsByClassName(styles.wrapper)[0].style.top = `100vh`;
    }

    // night mode logic

    const handleScroll = () => {
      setScroll(window.scrollY);
      document.getElementById(`${styles.sun}`).style.position = "fixed";
    };
    window.addEventListener("scroll", handleScroll);

    if (window.innerWidth < 900) {
      setNight(scroll > 150);
    } else {
      setNight(scroll > 110);
    }

    if (night && !loading) {
      document.getElementById(`${styles.moon}`).style.transform = `translateY(-${
        scroll / 15
      }vw)`;
      document.getElementById(`${styles.sun}`).style.display = "none";
      document.getElementById(`${styles.moon}`).style.display = "flex";
      if (document.getElementById(`${styles.foreground}`)) {
        document.getElementById(`${styles.foreground}`).style.animation = "none";
      }
      if (document.getElementById(`${styles.background}`)) {
        document.getElementById(`${styles.background}`).style.animation = "none";
      }
      if (document.getElementById(`${styles.hills}`)) {
        document.getElementById(`${styles.hills}`).style.animation = "none";
      }
      if (document.getElementById(`${styles.heading}`)) {
        document.getElementById(`${styles.heading}`).style.animation = "none";
        document.getElementById(`${styles.heading}`).style.display = "block";
        document.getElementById(`${styles.heading}`).style.transform = "translateY(0)";
      }
      if (document.getElementById(`${styles.comingSoon}`)) {
        document.getElementById(`${styles.comingSoon}`).style.animation = "none";
        document.getElementById(`${styles.comingSoon}`).style.display = "block";
        document.getElementById(`${styles.comingSoon}`).style.transform = "translateY(0)";
      }

      document.getElementsByClassName(styles.dark)[0].style.transform = "translateY(0)";
      document.getElementsByClassName(styles.dark)[0].style.opacity = "1";
      document.getElementsByClassName(styles.light)[0].style.opacity = "0";
    } else if (!loading) {
      document.getElementById(`${styles.sun}`).style.transform = `translateY(${
        scroll / 10
      }vw)`;
      document.getElementById(`${styles.sun}`).style.display = "flex";
      document.getElementById(`${styles.moon}`).style.display = "none";
      if (document.getElementById(`${styles.foreground}`)) {
        document.getElementById(`${styles.foreground}`).style.transform = `scale(1.25) `;
      }
      if (document.getElementById(`${styles.hills}`)) {
        document.getElementById(`${styles.hills}`).style.transform = `scale(1.5)`;
      }
      if (document.getElementById(`${styles.background}`)) {
        document.getElementById(`${styles.background}`).style.transform = `scale(0.8)`;
      }
      document.getElementsByClassName(styles.light)[0].style.transform = "translateY(0)";
      document.getElementsByClassName(styles.dark)[0].style.opacity = "0";
      document.getElementsByClassName(styles.light)[0].style.opacity = "1";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [night, scroll, loading]);

  return (
    <div className={styles.outerWrapper}>
      <div id="hero" className={`${styles.wrapper} ${night ? styles.night : ""}`}>
        <div id={styles.sun}></div>
        <div id={styles.moon}></div>
        <motion.div
          id={`${!loading ? styles.leftTree : ""}`}
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
          }}
          transition={{ duration: 7 }}
        >
          <Image alt="left_Tree" src="/images/hero_assets/Cloud.svg" priority fill />
        </motion.div>

        <motion.div
          id={`${!loading ? styles.rightTree : ""}`}
          initial={{
            x: 0,
          }}
          animate={{
            x: "100%",
          }}
          transition={{ duration: 7 }}
        >
          <Image alt="left_Tree" src="/images/hero_assets/Cloud.svg" fill priority />
        </motion.div>

        <motion.div
          className={`${night ? styles.nightForeground : ""}`}
          id={`${!loading ? styles.foreground : ""}`}
        >
          <Image alt="foreground" src={Foreground} priority fill />
        </motion.div>

        <motion.div
          id={`${!loading ? styles.hills : ""}`}
          className={` ${night ? styles.nightHills : ""}`}
        >
          <Image
            alt="left_Tree"
            class={styles.stretchimage}
            src="/images/hero_assets/sun_setcol.svg"
            fill
            priority
          />
        </motion.div>
        <motion.div
          id={`${!loading ? styles.hill_movetree : ""}`}
          className={styles.movingtree}
        >
          <Image alt="left_Tree" src="/images/hero_assets/MovingTree.svg" fill priority />
        </motion.div>

        <motion.div
          id={`${!loading ? styles.background : ""}`}
          className={` ${night ? styles.nightBackground : ""} `}
        >
          <Image
            alt="hero-bg"
            src="/images/hero_assets/Mountain_river.svg"
            fill
            priority
            style={{ height: "100%" }}
          />
        </motion.div>
        <motion.div id={`${!loading ? styles.background_stars : ""}`}>
          <Image alt="hero-bg" src="/images/hero_assets/Stars.svg" fill priority />
        </motion.div>

        {/* coming Soon text */}
        <div className={`${!loading ? styles.textWrapper : ""} `}>
          <h1
            id={`${!loading ? styles.heading : ""}`}
            className={` ${passion.className} ${night ? styles.nightLogo : ""}`}
          >
            <div className={styles.flame}>
              <Image fill sizes="auto" alt="flame" src="/images/firegif.gif" />
            </div>

            <Image
              className={styles.light}
              src="/images/DayLogo_noFire.png"
              alt="logo"
              fill
              sizes="!00%"
            />

            <Image
              className={styles.dark}
              src="/images/NightLogo_noFire-removebg-preview.png"
              alt="logo"
              fill
              sizes="auto"
            />
          </h1>
          {/* <h4
            id={`${!loading ? styles.comingSoon : ""}`}
            className={` ${poppins.className} ${night ? styles.nightText : ""}`}
          >
            coming soon<span className={styles.dot1}>.</span>
            <span className={styles.dot2}>.</span>
            <span className={styles.dot3}>.</span>
          </h4> */}
        </div>
      </div>
      {birds && !night && !loading && <BirdLottie />}
      <div className={styles.scroller}></div>
    </div>
  );
};

export default Hero;
