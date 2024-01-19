import { useState, useEffect } from "react";
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
      <Player autoplay loop src={birds} style={{ height: "100vh", width: "100vw" }}>
        {/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
      </Player>
    </div>
  );
};

export default BirdLottie;
