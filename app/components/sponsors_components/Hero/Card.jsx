import React from "react";
// import { Poppins as poppins } from 'next/font/google';
import Image from "next/image";
import styles from "./Card.module.scss";

// const Poppins = poppins({
//     weight: ["400"],
//     subsets: ["latin"],
// });

const Card = ({ link, title }) => {
  return (
    <div id={styles.card}>
      <div id={styles.innerPortion}>
        <div id={styles.img}>
          <Image src={link} alt="logo" width={100} height={100} />{" "}
          {/* to be replaced with <Image /> */}
        </div>
        <p id={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
