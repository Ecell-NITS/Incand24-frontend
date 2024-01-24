import React, { useEffect, useState } from "react";
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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      {
        id: 1,
        image: "/images/Card/img6.png",
        text: "Organize and Conduct Events",
      },
      {
        id: 2,
        image: "/images/Card/img4.png",
        text: "Networking and Mentorship",
      },
      {
        id: 3,
        image: "/images/Card/img5.png",
        text: "Skill Development",
      },
      {
        id: 4,
        image: "/images/Card/img2.png",
        text: "Recognition and Rewards",
      },

      {
        id: 5,
        image: "/images/Card/img3.png",
        text: "Professional Growth",
      },

      {
        id: 6,
        image: "/images/Card/img1.png",
        text: "Exclusive Access",
      },
    ]);
  }, []);

  return (
    <div id="about" className={styles.container}>
      <div className={styles.headingParent}>
        <div className={`${allura.className} ${styles.heading}`}>
          Why Campus Ambassador?
        </div>
        <div className={`${roboto.className} ${styles.details}`}>
          {` Becoming a NIT Silchar Campus Ambassador is your exclusive ticket to becoming
          the face and voice of our vibrant academic community. It&aposs not just a role, it&aposs
          an opportunity to share the dynamic spirit of our campus with the world!`}
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
