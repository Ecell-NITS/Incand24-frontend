"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TeamHero.module.scss";

const TeamHero = ({ title = "Team" }) => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const mouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const varients = {
    default: {
      x: cursor.x - 100,
      y: cursor.y - 50,
    },
  };
  return (
    <div className={`${styles.hero}`}>
      <span className={styles.title}>{title}</span>

      <motion.div id={styles.cursor} variants={varients} animate="default"></motion.div>
      <div className={styles.container}>
        <div className={`${styles.blob1} ${styles.blobs} `}></div>
        <div className={`${styles.blob2} ${styles.blobs}`}>
          <div className={styles.innerBlob}></div>
          <div className={styles.innerBlob2}></div>
        </div>
        {/* <div className={`${styles.blob3} ${styles.blobs}`}></div> */}
        <div className={`${styles.blob4} ${styles.blobs}`}></div>
      </div>
    </div>
  );
};

export default TeamHero;
