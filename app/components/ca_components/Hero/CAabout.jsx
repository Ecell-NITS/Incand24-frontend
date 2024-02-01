import React from "react";
import { Allura, Roboto } from "next/font/google";
import styles from "./CAabout.module.scss";
import CAcard from "./CAcard";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const roboto = Roboto({
  weight: ["300"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const CAabout = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1706506713/img1_empmhj.svg",
      text: "Organize and Conduct Events",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1706506712/img2_n3kd9v.svg",
      text: "Networking and Mentorship",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1706506712/img3_oo7xvw.svg",
      text: "Skill Development",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1706506712/img4_lq4jln.svg",
      text: "Recognition and Rewards",
    },

    {
      id: 5,
      image:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1706506712/img5_xiarhc.svg",
      text: "Professional Growth",
    },

    {
      id: 6,
      image:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1706506713/img6_vdhzho.svg",
      text: "Exclusive Access",
    },
  ];

  return (
    <div id="about" className={styles.container}>
      <div className={styles.headingParent}>
        <div className={`${allura.className} ${styles.heading}`}>
          <h1>Why Campus Ambassador?</h1>
        </div>
        <div className={`${roboto.className} ${styles.details}`}>
          <p>{` Becoming a NIT Silchar Campus Ambassador is your exclusive ticket to becoming
          the face and voice of our vibrant academic community. It's not just a role, it's
          an opportunity to share the dynamic spirit of our campus with the world!`}</p>
        </div>
      </div>
      <div className={styles.parentCard}>
        {cards.map((card) => (
          <div key={card.id}>
            <CAcard image={card.image} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CAabout;
