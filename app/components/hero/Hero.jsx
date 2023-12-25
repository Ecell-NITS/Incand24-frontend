"use client";

// eslint-disable-next-line camelcase
import { Allura, Passion_One } from "next/font/google";
import React from "react";
import Image from "next/image";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from "framer-motion";
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
  return (
    <div className={styles.wrapper}>
      <motion.div
        id={styles.leftTree}
        initial={{
          x: 0,
        }}
        animate={{
          x: "-100%",
        }}
        transition={{ duration: 3 }}
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
        transition={{ duration: 3 }}
      >
        <Image alt="left_Tree" src="/images/right_tree.png" layout="fill" />
      </motion.div>
      <motion.div
        id={styles.foreground}
        initial={{
          z: 2,
        }}
        animate={{
          z: -2,
          y: 100,
          scale: 1.25,
        }}
        transition={{ duration: 1.8, delay: 2 }}
      >
        <Image alt="hero-bg" src="/images/Foreground.png" fill />
      </motion.div>
      <motion.div
        animate={{
          scale: 2.5,
          z: -9,
          y: -500,
          animationDelay: 1.8,
        }}
        transition={{ duration: 1.8, delay: 2 }}
        id={styles.hills}
      >
        <Image alt="hero-bg" src="/images/Hills.png" fill />
      </motion.div>
      <motion.div
        initial={{
          z: 0,
          scale: 1.9,
          y: 20,
        }}
        animate={{
          z: -4,
          scale: 1.6,
          top: -10,
        }}
        transition={{ duration: 1.8, delay: 2 }}
        id={styles.background}
      >
        <Image alt="hero-bg" src="/images/Background.png" fill />
      </motion.div>

      {/* coming Soon text */}
      <div className={styles.textWrapper}>
        <h1 className={`${styles.heading} ${passion.className}`}>INCANDESCENCE‘24 </h1>
        <h4 className={`${styles.comingSoon} ${poppins.className}`}>COMING SOON...</h4>
      </div>
    </div>
  );
};

export default Hero;
