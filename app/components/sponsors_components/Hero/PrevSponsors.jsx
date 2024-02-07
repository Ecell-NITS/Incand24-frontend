import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { Allura } from "next/font/google";
import AOS from "aos";
import styles from "./PrevSponsors.module.scss";
import Card from "./Card";
import Greenleafs from "../../../../public/LeafAnimation";
import "aos/dist/aos.css";

const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
});

const PrevSponsors = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const data1 = [
    {
      link: `/sponsors/Amul.png`,
      title: `Amul`,
    },
    {
      link: `/sponsors/Bauli.png`,
      title: `Bauli`,
    },
    {
      link: `/sponsors/cloviaaa.jpg`,
      title: `Cloviaaa`,
    },
    {
      link: `/sponsors/jiff.png`,
      title: `Jiff`,
    },
    {
      link: `/sponsors/boookd.avif`,
      title: `Bookd`,
    },
    {
      link: `/sponsors/coca-cola.png`,
      title: `CocaCola`,
    },
  ];

  const data2 = [
    {
      link: `/sponsors/cry.png`,
      title: `Cry`,
    },
    {
      link: `/sponsors/Gplus.png`,
      title: `Gplus`,
    },
    {
      link: `/sponsors/nai.png`,
      title: `Nai`,
    },
    {
      link: `/sponsors/citystyle.avif`,
      title: `CityStyle`,
    },
    {
      link: `/sponsors/college.png`,
      title: `College`,
    },
    {
      link: `/sponsors/dare.png`,
      title: `Dare 2 Complete`,
    },
  ];

  const data3 = [
    {
      link: `/sponsors/quickheal.png`,
      title: `Quickheal`,
    },
    {
      link: `/sponsors/unstop.jpg`,
      title: `Unstop`,
    },
    {
      link: `/sponsors/cubelelo.png`,
      title: `Nai`,
    },
    {
      link: `/sponsors/interviewbuddy.avif`,
      title: `Cubelelo`,
    },
    {
      link: `/sponsors/grabonn.png`,
      title: `Grabonn`,
    },
    {
      link: `/sponsors/campusblog.png`,
      title: `Campusblog`,
    },
  ];

  const data4 = [
    {
      link: `/sponsors/elm.png`,
      title: `Elm`,
    },
    {
      link: `/sponsors/thesavagehumans.avif`,
      title: `The Savage Humans`,
    },
    {
      link: `/sponsors/janta.png`,
      title: `Janta`,
    },
    {
      link: `/sponsors/learnwt.avif`,
      title: `Learnwt`,
    },
    {
      link: `/sponsors/london.png`,
      title: `London Shakes`,
    },
  ];

  return (
    <div className={styles.body}>
      <p className={`${styles.text} ${allura.className}`} data-aos="zoom-in">
        Previous Sponsors
      </p>
      <div className={styles.content}>
        <div className={styles.sub1}>
          <div id={styles.leafs2}>
            <Lottie loop animationData={Greenleafs} />
          </div>
          <div id={styles.col1} className={styles.col} data-aos="fade-right">
            {
              // important : we can not use 'for each' beacsue it does not return any value
              data1.map(
                (
                  ele // if we use {} then we have to use return keyword
                ) => (
                  <Card key={ele.title} link={ele.link} title={ele.title} />
                )
              )
            }
          </div>
          <div id={styles.col2} className={styles.col}>
            {data2.map((ele) => {
              // without arrow function
              return <Card key={ele.title} link={ele.link} title={ele.title} />;
            })}
          </div>
        </div>

        <div className={styles.sub2}>
          <div id={styles.col3} className={styles.col} data-aos="fade-up">
            {data3.map((ele) => (
              <Card key={ele.title} link={ele.link} title={ele.title} />
            ))}
          </div>
          <div id={styles.col4} className={styles.col}>
            {data4.map((ele) => (
              <Card key={ele.title} link={ele.link} title={ele.title} />
            ))}
          </div>
          <div id={styles.leafs1}>
            <Lottie loop animationData={Greenleafs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevSponsors;
