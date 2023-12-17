"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Loki.module.scss";

const Loki = () => {
  const [count, setCount] = useState(0);

  const rollIntro = useCallback(() => {
    const fonts = [
      "Gilroy-light",
      "Give You Glory",
      "Geo",
      "Gloria Hallelujah",
      "Grey Qo",
      "HeadlandOne",
    ];
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter) => {
      const currentLetter = letter;
      const randomFontIndex = Math.floor(Math.random() * fonts.length);
      const randomFont = fonts[randomFontIndex];
      currentLetter.style.fontFamily = randomFont;
    });
  }, []);

  useEffect(() => {
    const introAnimation = setInterval(() => {
      rollIntro();
      setCount((prevCount) => {
        setCount(prevCount + 1);
        if (count > 8) {
          clearInterval(introAnimation);
          // const letters = document.querySelectorAll(".letter");
          // letters.forEach((letter)=>{
          //   letter.removeAttribute('style');
          // })
        }
        return setCount(count);
      });
    }, 550);

    return () => clearInterval(introAnimation);
  }, [count, rollIntro]);

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
