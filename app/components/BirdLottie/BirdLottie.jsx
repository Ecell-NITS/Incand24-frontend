// import { React, useState, useEffect } from "react";
// import Lottie from "lottie-react";
// import animationData from "./bird";
// import styles from "./BirdLottie.module.scss";

// const LottieAnimation = () => {
//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     // scroll prevention
//     if (typeof document !== "undefined") {
//       if (scroll < window.innerHeight * 1.1) {
//         document.getElementsByClassName(styles.birds)[0].style.position = `fixed`;
//         document.getElementsByClassName(styles.birds)[0].style.top = `0`;
//       } else {
//         document.getElementsByClassName(styles.birds)[0].style.position = `absolute`;
//         document.getElementsByClassName(styles.birds)[0].style.bottom = `0`;
//         document.getElementsByClassName(styles.birds)[0].style.top = `100vh`;
//       }

//       const handleScroll = () => {
//         setScroll(window.scrollY);
//       };
//       window.addEventListener("scroll", handleScroll);
//     }
//   }, [scroll]);
//   return (
//     <div className={styles.birds} style={{ marginTop: "10rem", zIndex: "90" }}>
//       <Lottie animationData={animationData} loop autoplay />
//     </div>
//   );
// };

// export default LottieAnimation;

import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./BirdLottie.module.scss";
import birds from "./Birds";

const BirdLottie = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    // scroll prevention
    if (typeof document !== "undefined") {
      if (scroll < window.innerHeight * 1.1) {
        document.getElementsByClassName(styles.birds)[0].style.position = `fixed`;
        document.getElementsByClassName(styles.birds)[0].style.top = `0`;
      } else {
        document.getElementsByClassName(styles.birds)[0].style.position = `absolute`;
        document.getElementsByClassName(styles.birds)[0].style.bottom = `0`;
        document.getElementsByClassName(styles.birds)[0].style.top = `100vh`;
      }

      const handleScroll = () => {
        setScroll(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
    }
  }, [scroll]);
  return (
    <div className={styles.birds}>
      <Player
        autoplay
        loop
        // keepLastFrame
        src={birds}
        style={{ height: "100vh", width: "100vw" ,}}
      ></Player>
    </div>
  );
};

export default BirdLottie;
