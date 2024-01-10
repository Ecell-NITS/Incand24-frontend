// import React from 'react';

"use client"

import Lottie from 'lottie-react';
import styles from './Loader.module.scss'
import animationData from '../../../public/loader.lottie.json';

const LottieAnimation = () => {
  return (
    <div className={styles.container}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
      />
    </div>
  );
};

export default LottieAnimation;
