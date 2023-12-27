"use client";

// eslint-disable-next-line camelcase
import { Allura, Passion_One } from "next/font/google";
import { React, useEffect } from "react";
import Image from "next/image";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion, useAnimation } from "framer-motion";
import styles from "./hero.module.scss";

const passion = Passion_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--passion-font",
});

const poppins = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});
const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const fadeInThreshold = 200;
      const fadeOutThreshold = 400;

      if (scrollY < fadeInThreshold) {
        controls.start({ opacity: 0 });
      } else if (scrollY >= fadeInThreshold && scrollY < fadeOutThreshold) {
        const opacityValue =
          (scrollY - fadeInThreshold) / (fadeOutThreshold - fadeInThreshold);
        controls.start({ opacity: opacityValue });
      } else {
        controls.start({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          id={styles.leftTree}
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
          }}
          transition={{ duration: 3.2 }}
        >
          <Image alt="left_Tree" src="/images/left_tree.png" layout="fill" />
        </motion.div>
        <motion.div
          id={styles.rightTree}
          initial={{
            x: 0,
          }}
          animate={{
            x: "100%",
          }}
          transition={{ duration: 3.2 }}
        >
          <Image alt="left_Tree" src="/images/right_tree.png" layout="fill" />
        </motion.div>
        <motion.div
          id={styles.foreground}
          initial={{
            z: 0,
            scale: 1.3,
            y: 20,
          }}
          animate={{
            z: -3,
            y: 200,
            scale: 1.63,
          }}
          transition={{ duration: 1.8, delay: 3 }}
        >
          <Image
            alt="hero-bg"
            src="/images/Foreground.svg"
            height={739}
            width={1920}
            style={{ height: "100%" }}
          />
        </motion.div>
        <motion.div
          id={styles.hills}
          animate={{
            scale: 2.5,
            z: -5,
            y: -300,
          }}
          transition={{ duration: 1.8, delay: 3 }}
        >
          <Image
            alt="hero-bg"
            src="/images/Hills.png"
            height={609}
            width={1920}
            style={{ height: "100%" }}
          />
        </motion.div>
        <motion.div
          initial={{
            z: 0,
            scale: 1.9,
            y: 20,
          }}
          animate={{
            z: -5,
            scale: 2.2,
            top: 100,
          }}
          transition={{ duration: 1.8, delay: 3 }}
          id={styles.background}
        >
          <Image
            alt="hero-bg"
            src="/images/Background.png"
            height={609}
            width={1920}
            style={{ height: "100%" }}
          />
        </motion.div>
        <motion.div
          id={styles.blackHill}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/images/blackHills.svg" // Replace with the path to your image
            alt="black_hill"
            height={609}
            width={1920}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          id={styles.darkbg}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/images/dark_bg.svg" // Replace with the path to your image
            alt="dark_bg"
            height={609}
            width={1920}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>

        {/* coming Soon text */}
        <div className={styles.textWrapper}>
          <h1 className={`${styles.heading} ${passion.className}`}>INCANDESCENCE‘24 </h1>
          <h4 className={`${styles.comingSoon} ${poppins.className}`}>COMING SOON...</h4>
        </div>
      </div>

      <div className={styles.scrollElement}></div>
    </div>
  );
};

export default Hero;
