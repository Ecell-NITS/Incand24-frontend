import React from "react";
import { Allura } from "next/font/google";
import Image from "next/image";
import styles from "./styles.module.scss";

const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
});

const CurrentSponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      link: "https://www.google.com",
      image: "/sponsors/Gplus.png",
    },
    {
      id: 2,
      name: "Sponsor 2",
      link: "https://www.google.com",
      image: "/sponsors/Gplus.png",
    },
    {
      id: 3,
      name: "Sponsor 2",
      link: "https://www.google.com",
      image: "/sponsors/Gplus.png",
    },
    {
      id: 4,
      name: "Sponsor 2",
      link: "https://www.google.com",
      image: "/sponsors/Gplus.png",
    },
    {
      id: 5,
      name: "Sponsor 2",
      link: "https://www.google.com",
      image: "/sponsors/Gplus.png",
    },
    {
      id: 6,
      name: "Sponsor 2",
      link: "https://www.google.com",
      image: "/sponsors/Gplus.png",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={`${styles.text} ${allura.className}`}>Current Sponsors</h1>

      <div className={styles.sponsors}>
        {sponsors.map((sponsor) => {
          return (
            <div key={sponsor.id} className={styles.Cardwrapper}>
              <Image src={sponsor.image} alt="sponsors" height={150} width={150} />
              <div className={styles.name}>{sponsor.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentSponsors;
