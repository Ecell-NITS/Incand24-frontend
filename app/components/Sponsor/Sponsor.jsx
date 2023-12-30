import React from "react";
import { Allura } from "next/font/google";
import Image from "next/image";
import styles from "./Sponsor.module.scss";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

const Sponsor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.slide1}>
          <Image
            src="/sponsors/Amul.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/cry.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Noticebar.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />

          <Image
            src="/sponsors/Amul.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/cry.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Noticebar.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
        </div>
      </div>
      <div className={`${styles.text} ${allura.className}`}>
        <h2>Previous Sponsors</h2>
      </div>
      <div className={styles.slider}>
        <div className={styles.slide2}>
          <Image
            src="/sponsors/Amul.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/cry.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Noticebar.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />

          <Image
            src="/sponsors/Amul.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/cry.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Noticebar.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
          <Image
            src="/sponsors/Gplus.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            alt=""
            layout="responsive"
          />
          <Image
            src="/sponsors/nai.png"
            style={{ padding: "0 1.5rem" }}
            height={50}
            width={150}
            layout="responsive"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
