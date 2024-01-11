// About Section Code: Suraj Verma

import React from "react";
import { Allura as allura, Poppins as poppins } from "next/font/google";
import styles from "./About.module.scss";

export const metadata = {
  title: "About",
  description: "About",
};

const Allura = allura({
  weight: ["400"],
  subsets: ["latin"],
});

const Poppins = poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className={styles.body} id="about">
      <div className={styles.branch}></div>
      <div className={styles.about_us}>
        <div className={`${styles.heading} ${Allura.className}`}>About Us</div>
        <div className={`${styles.content} ${Poppins.className}`}>
          Indulge in the electrifying extravaganza of Incandescence, the cultural
          spectacle that transforms NIT Silchar into a pulsating hub of creativity. Across
          three unforgettable days, the vibrant energy of this fest radiates as renowned
          national artists grace the NITS stage, infusing the atmosphere with an unmatched
          blend of excitement, exhilaration, and boundless enthusiasm. Join the
          celebration that transcends boundaries and ignites the spirit of cultural
          brilliance!
        </div>
      </div>
      <div className={styles.outterMandala}>
        <div className={styles.innerMandala}></div>
      </div>
      <div className={styles.about_nits}>
        <div className={`${styles.heading} ${Allura.className}`}>About NIT Silchar</div>
        <div className={`${styles.content} ${Poppins.className}`}>
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
