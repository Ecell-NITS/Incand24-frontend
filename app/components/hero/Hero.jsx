"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
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
        transition={{ duration: 1.8 }}
      >
        <Image src="/images/Foreground.png" layout="fill" />
      </motion.div>
      <motion.div
        animate={{
          scale: 2.5,
          z: -9,
          y: -500,
        }}
        transition={{ duration: 1.8 }}
        id={styles.hills}
      >
        <Image src="/images/Hills.png" layout="fill" />
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
        transition={{ duration: 1.8 }}
        id={styles.background}
      >
        <Image src="/images/Background.png" layout="fill" />
      </motion.div>

      {/* coming Soon text */}
      <motion.div
        initial={{
          y: 500,
        }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 1.5 }}
        className={styles.textWrapper}
      >
        <h1 id={styles.heading}>INCANDESCENCE‘24 </h1>
        <h4 id={styles.comingSoon}>COMING SOON...</h4>
      </motion.div>
    </div>
  );
};

export default Hero;
