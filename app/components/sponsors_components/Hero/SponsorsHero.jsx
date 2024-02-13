import React from "react";
import { motion } from "framer-motion";
import { Allura } from "next/font/google";
import Image from "next/image";
import logo from "../../../../public/images/glowingLogo.svg";
import styles from "./SponsorsHero.module.scss";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const SponsorsHero = () => {
  return (
    <div className={`${styles.hero} ${allura.className}`}>
      <div className={styles.title}>
        Sponsors
        <span>Sponsors</span>
        <span>Sponsors</span>
        <span>
          <Image id={styles.logo} src={logo} width={100} height={100} alt="Incand'24" />
        </span>
      </div>

      <motion.div id={styles.cursor} animate="default"></motion.div>
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

export default SponsorsHero;
