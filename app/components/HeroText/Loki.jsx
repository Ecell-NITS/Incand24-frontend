/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

"use client";

import React, { useState, useEffect } from "react";

import styles from "./Loki.module.scss";

const Loki = () => {
  const fonts = [
    "Gilroy-light",
    "Give You Glory",
    "Geo",
    "Gloria Hallelujah",
    "Grey Qo",
    "HeadlandOne",
  ];

  const [count, setCount] = useState(0);
  const rollIntro = () => {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter) => {
      const randomFontIndex = Math.floor(Math.random() * fonts.length);
      const randomFont = fonts[randomFontIndex];
      letter.style.fontFamily = randomFont;
    });
  };

  useEffect(() => {
    const introAnimation = setInterval(() => {
      rollIntro();
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount > 8) {
          clearInterval(introAnimation);
          // const letters = document.querySelectorAll(".letter");
          // letters.forEach((letter)=>{
          //   letter.removeAttribute('style');
          // })
        }
        return newCount;
      });
    }, 550);

    return () => clearInterval(introAnimation);
  }, []);

  return (
    <div className={styles.heroText}>
      <h2 className={styles.loki}>
        <p className={`${styles.letter} letter`}>C</p>
        <p className={`${styles.letter} letter`}>O</p>
        <p className={`${styles.letter} letter`}>M</p>
        <p className={`${styles.letter} letter`}>I</p>
        <p className={`${styles.letter} letter`}>N</p>
        <p className={`${styles.letter} letter`}>G</p>
        &nbsp;
        <p className={`${styles.letter} letter`}>S</p>
        <p className={`${styles.letter} letter`}>O</p>
        <p className={`${styles.letter} letter`}>O</p>
        <p className={`${styles.letter} letter`}>N</p>
      </h2>
    </div>
  );
};

export default Loki;
