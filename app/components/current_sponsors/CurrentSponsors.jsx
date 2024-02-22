import React from "react";
import { Allura } from "next/font/google";
import Image from "next/image";
import styles from "./styles.module.scss";
import sponsors from "@/_db/sponsors";

const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
});

const CurrentSponsors = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.text} ${allura.className}`}>Current Sponsors</h1>

      <div className={styles.sponsors}>
        {sponsors.map((sponsor) => {
          return (
            <div key={sponsor.id} className={styles.Cardwrapper}>
              <Image
                style={{ position: "absolute", zIndex: "0", objectFit: "cover" }}
                src="/Card.png"
                alt="bg"
                fill
                layout=""
              />
              <Image src={sponsor.link} alt="sponsors" height={150} width={150} />
              <div className={styles.name}>{sponsor.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentSponsors;
