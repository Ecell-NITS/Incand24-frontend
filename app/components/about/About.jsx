// About Section Code: Suraj Verma

import React from "react";
import styles from "./About.module.scss";

export const metadata = {
  title: " About",
  description: "About",
};

const About = () => {
  return (
    <div className={styles.body}>
      <div className={styles.branch}></div>
      <div className={styles.about_us}>
        <div className={styles.heading}>About Us</div>
        <div className={styles.content}>
          Incandescence, the cultural fest of NIT Silchar, is one of the most hyped and
          happening fest in the entire North East. The land of NITS witnesses some of the
          most famous artists of the nation, while the air of the place is filled with
          excitement, exhilaration and enthusiasm. This year, Incandescence promises to
          &apos;Break Free&apos; and take you quite a journey so stay tuned for
          what&apos;s coming!
        </div>
      </div>
      <div className={styles.outterMandala}>
        <div className={styles.innerMandala}></div>
      </div>
      <div className={styles.about_nits}>
        <div className={styles.heading}>About NIT Silchar</div>
        <div className={styles.content}>
          One of the most premiere institutions in the country, NITS is not just a place
          which shelters some of the best engineers of the future, but also one which is
          known for embracing each culture with equal respect and love, where every
          student is motivated to grow and develop holistically via various technical,
          cultural and academic activities that is sure to give an admirable shape to each
          students body and soul.
        </div>
      </div>
    </div>
  );
};

export default About;
