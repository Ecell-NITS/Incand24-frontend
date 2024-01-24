import React from "react";
import Image from "next/image";
import styles from "./CAcard.module.scss";

const CAcard = ({ image, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} height={250} width={250} layout="contain" alt="" />
      </div>

      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CAcard;
