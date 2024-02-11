"use client";

import { useEffect, useState } from "react";
import { Allura } from "next/font/google";
import { motion } from "framer-motion";
import styles from "./GradientBg.module.scss";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const GradientBg = ({
  title = "Events & Concerts",
  centerBlobBg = "radial-gradient(rgba(255, 230, 0, 1) 5%,rgba(165, 0, 223, 1) 100%,transparent 50%)",
  innerBlobBg = "radial-gradient(rgba(255, 208, 87, 1),rgba(255, 216, 75, 0.733) 70%,transparent 50%)",
  innerBlob2Bg = "radial-gradient(rgba(255, 208, 87, 1) ,rgba(248, 219, 117, 0.948) 70%,transparent 50%)",
  backwardBlobBg = "radial-gradient(rgba(24, 75, 255, 0) 0%,rgb(23.37, 74.33, 255) 50%,transparent 70%)",
  rightBlobBg = "radial-gradient(rgba(87, 255, 90, 0.697),rgba(87, 255, 90, 0.578) 90%,transparent 50%)",
}) => {
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
    <div className={`${styles.hero} ${allura.className}`}>
      <span className={styles.title}>{title}</span>

      <motion.div id={styles.cursor} variants={varients} animate="default"></motion.div>
      <div className={styles.container}>
        <div
          className={`${styles.blob1} ${styles.blobs} `}
          style={{
            backgroundImage: backwardBlobBg,
          }}
        ></div>
        <div
          className={`${styles.blob2} ${styles.blobs}`}
          style={{
            backgroundImage: centerBlobBg,
          }}
        >
          <div
            style={{
              baxkgroundImage: innerBlobBg,
            }}
            className={styles.innerBlob}
          ></div>
          <div
            style={{
              backgroundImage: innerBlob2Bg,
            }}
            className={styles.innerBlob2}
          ></div>
        </div>
        {/* <div className={`${styles.blob3} ${styles.blobs}`}></div> */}
        <div
          className={`${styles.blob4} ${styles.blobs}`}
          style={{
            backgroundImage: rightBlobBg,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientBg;

// Note : anybody using this component should set parent element's overflow-x o hidden.
