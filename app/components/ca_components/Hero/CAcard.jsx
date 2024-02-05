import React from "react";
import Image from "next/image";
import { Poppins as poppins } from "next/font/google";
import styles from "./CAcard.module.scss";

const Poppins = poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const CAcard = ({ image, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt="pngwing" height={250} width={250} />
      </div>

      <div className={`${Poppins.className} ${styles.text}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CAcard;
