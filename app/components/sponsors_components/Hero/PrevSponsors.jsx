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

  const data = [
    {
      link: `https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png`,
      title: `Zomato`,
    },
    {
      link: `https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png`,
      title: `Zomato`,
    },
    {
      link: `https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png`,
      title: `Zomato`,
    },
    {
      link: `https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png`,
      title: `Zomato`,
    },
  ];

  return (
    <div className={styles.body}>
      <p className={styles.text} data-aos="zoom-in">
        Previous Sponsors
      </p>
      <div className={styles.content}>
        <div id={styles.col1} className={styles.col} data-aos="fade-right">
          {
            // important : we can not use 'for each' beacsue it does not return any value
            data.map(
              (
                ele // if we use {} then we have to use return keyword
              ) => (
                <Card key={ele.title} link={ele.link} title={ele.title} />
              )
            )
          }
          <div id={styles.leafs2}>
            <Lottie loop animationData={Greenleafs} />
          </div>
        </div>
        <div id={styles.col2} className={styles.col}>
          {data.map((ele) => {
            // without arrow function
            return <Card key={ele.title} link={ele.link} title={ele.title} />;
          })}
        </div>
        <div id={styles.col3} className={styles.col} data-aos="fade-up">
          {data.map((ele) => (
            <Card key={ele.title} link={ele.link} title={ele.title} />
          ))}
        </div>
        <div id={styles.col4} className={styles.col}>
          <div id={styles.leafs1}>
            <Lottie loop animationData={Greenleafs} />
          </div>
          {data.map((ele) => (
            <Card key={ele.title} link={ele.link} title={ele.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrevSponsors;
