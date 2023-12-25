import React from "react";
import Image from "next/image";
import styles from "./Sponsor.module.css";
const Sponsor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.slide1}>
          <Image src="/sponsors/Amul.png" height={50} width={250} />
          <Image src="/sponsors/cry.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
          <Image src="/sponsors/Noticebar.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
        </div>
        <div className={styles.slide1}>
          <Image src="/sponsors/Amul.png" height={50} width={250} />
          <Image src="/sponsors/cry.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
          <Image src="/sponsors/Noticebar.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
        </div>
      </div>
      <div className={styles.text}>
        <h2>Previous Sponsors</h2>
      </div>
      <div className={styles.slider}>
        <div className={styles.slide2}>
          <Image src="/sponsors/Amul.png" height={50} width={250} />
          <Image src="/sponsors/cry.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
          <Image src="/sponsors/Noticebar.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
        </div>
        <div className={styles.slide2}>
          <Image src="/sponsors/Amul.png" height={50} width={250} />
          <Image src="/sponsors/cry.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
          <Image src="/sponsors/Noticebar.png" height={50} width={250} />
          <Image src="/sponsors/Gplus.png" height={50} width={250} />
          <Image src="/sponsors/nai.png" height={50} width={250} />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
