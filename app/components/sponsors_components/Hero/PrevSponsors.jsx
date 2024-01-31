import React, { useEffect } from "react";

import Lottie from "lottie-react";
import AOS from "aos";
import styles from "./PrevSponsors.module.scss";
import Card from "./Card";
import Greenleafs from "../../../../public/LeafAnimation";
import "aos/dist/aos.css";

const PrevSponsors = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className={styles.body}>
      <p className={styles.text} data-aos="zoom-in">
        Previous Sponsors
      </p>
      <div className={styles.content}>
        <div id={styles.col1} className={styles.col} data-aos="fade-right">
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <div id={styles.leafs2}>
            <Lottie loop animationData={Greenleafs} />
          </div>
        </div>
        <div id={styles.col2} className={styles.col}>
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
        </div>
        <div id={styles.col3} className={styles.col} data-aos="fade-up">
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
        </div>
        <div id={styles.col4} className={styles.col}>
          <div id={styles.leafs1}>
            <Lottie loop animationData={Greenleafs} />
          </div>
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
          <Card
            link="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            title="Zomato"
          />
        </div>
      </div>
    </div>
  );
};

export default PrevSponsors;
