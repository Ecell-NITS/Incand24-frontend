import React from "react";
import styles from "./SponsorsHero.module.scss";

const SponsorsHero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.absolute} ${styles.inset0} ${styles.justifycenter}`}>
        <div
          className={`${styles.bgshape1} ${styles.bg1} ${styles.opacity50} ${styles.bgblur}`}
        ></div>
        <div
          className={`${styles.bgshape2} ${styles.bg2} ${styles.opacity50} ${styles.bgblur}`}
        ></div>
        <div
          className={`${styles.bgshape3} ${styles.bg3} ${styles.opacity50} ${styles.bgblur}`}
        ></div>
      </div>
      <div className={styles.text}>
        Sponsors
        <span>Sponsors</span>
        <span>Sponsors</span>
        <span>Incand&apos;24</span>
      </div>
    </div>
  );
};

export default SponsorsHero;
