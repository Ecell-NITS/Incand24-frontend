import React from "react";
import Image from "next/image";
import styles from "./Hero_btn.module.scss";

const HeroBtn = () => {
  return (
    <div className={styles.button_ctn}>
      <div className={styles.semi_circle}></div>
      <Image
        className={styles.arrow1}
        alt="arrow"
        src="/images/arrow1.svg"
        width={32}
        height={32}
      />
      <Image
        className={styles.arrow2}
        alt="arrow"
        src="/images/arrow2.svg"
        width={32}
        height={32}
      />
    </div>
  );
};

export default HeroBtn;
