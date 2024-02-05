"use client";

import React from "react";
import { Allura } from "next/font/google";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import treeBg from "../../../../public/images/tree.png";
import leaf from "../leafAnimation"
import styles from "./Hero.module.scss";
import GradientBg from "../../Shared/GradientBg/GradientBg";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const Hero = () => {
  return (
    <div className={styles.container}>

      <GradientBg title="" position="absolute"/>
      
      <Image src={treeBg} alt="tree" layout="responsive" height={1500} width={1500} className={styles.tree}/> 

      <div className={styles.contents}>
        <div>
        <h1 className={allura.className}>Glimpse</h1>
        <div className={styles.glimpse}></div>
        </div>
      </div>

      <div className={styles.bottomText}>
        <h1 className={allura.className}>Gallery</h1>
        <Player
          autoplay
          loop
          src={leaf}
          id={styles.lottie}
          style={{ height: "auto", width: "40vw" }}
        ></Player>
      </div>
      
    </div>
  );
};

export default Hero;
