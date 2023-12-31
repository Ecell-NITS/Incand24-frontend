"use client";

// eslint-disable-next-line camelcase
import { Allura, Passion_One } from "next/font/google";
import { React, useEffect, useState } from "react";
import Image from "next/image";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import Foreground from "../../../public/images/Foreground.svg";

const passion = Passion_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--passion-font",
});

const poppins = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});
const Hero = () => {
  const [scroll, setScroll] = useState(0);
  const [night, setNight] = useState(false);

  useEffect(() => {
    // scroll prevention
    if (scroll < window.innerHeight * 1.1) {
      document.getElementsByClassName(styles.wrapper)[0].style.position = `fixed`;
      document.getElementsByClassName(styles.wrapper)[0].style.top = `0`;
    } else {
      document.getElementsByClassName(styles.wrapper)[0].style.position = `absolute`;
      document.getElementsByClassName(styles.wrapper)[0].style.bottom = `0`;
      document.getElementsByClassName(styles.wrapper)[0].style.top = `100vh`;
    }

    // night mode logic

    const handleScroll = () => {
      setScroll(window.scrollY);
      document.getElementById(`${styles.sun}`).style.position = "fixed";
    };
    window.addEventListener("scroll", handleScroll);

    if (window.innerWidth < 900) {
      setNight(scroll > 150);
    } else {
      setNight(scroll > 110);
    }

    if (night) {
      document.getElementById(`${styles.moon}`).style.transform = `translateY(-${
        scroll / 15
      }vw)`;
      document.getElementById(`${styles.sun}`).style.display = "none";
      document.getElementById(`${styles.moon}`).style.display = "flex";
      document.getElementById(`${styles.foreground}`).style.animation = "none";
      document.getElementById(`${styles.background}`).style.animation = "none";
      document.getElementById(`${styles.hills}`).style.animation = "none";
      document.getElementById(`${styles.heading}`).style.animation = "none";
      document.getElementById(`${styles.heading}`).style.display = "block";
      document.getElementById(`${styles.heading}`).style.transform = "translateY(0)";
      document.getElementById(`${styles.comingSoon}`).style.animation = "none";
      document.getElementById(`${styles.comingSoon}`).style.display = "block";
      document.getElementById(`${styles.comingSoon}`).style.transform = "translateY(0)";
    } else {
      document.getElementById(`${styles.sun}`).style.transform = `translateY(${
        scroll / 10
      }vw)`;
      document.getElementById(`${styles.sun}`).style.display = "flex";
      document.getElementById(`${styles.moon}`).style.display = "none";
      document.getElementById(`${styles.foreground}`).style.transform = `scale(1.25) `;
      document.getElementById(`${styles.hills}`).style.transform = `scale(1.5)`;
      document.getElementById(`${styles.background}`).style.transform = `scale(0.8)`;
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [night, scroll]);

  return (
    <div className={styles.outerWrapper}>
      <div className={`${styles.wrapper} ${night ? styles.night : ""}`}>
        <div id={styles.sun}></div>
        <div id={styles.moon}></div>
        <motion.div
          id={styles.leftTree}
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
          }}
          transition={{ duration: 3.2 }}
        >
          <Image alt="left_Tree" src="/images/left_tree.png" priority fill />
        </motion.div>
        <motion.div
          id={styles.rightTree}
          initial={{
            x: 0,
          }}
          animate={{
            x: "100%",
          }}
          transition={{ duration: 3.2 }}
        >
          <Image alt="left_Tree" src="/images/right_tree.png" fill priority />
        </motion.div>
        <motion.div
          className={`${night ? styles.nightForeground : ""}`}
          id={styles.foreground}
        >
          <Image alt="foreground" src={Foreground} priority fill />
        </motion.div>
        <motion.div id={styles.hills} className={` ${night ? styles.nightHills : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1703"
            height="236"
            viewBox="0 0 1703 236"
            fill="none"
          >
            <path
              d="M39.3121 73.7189C61.3471 72.8743 82.1729 62.3167 103.306 56.0973L178.95 33.7727C189.085 30.7782 199.354 27.7836 209.892 27.5149C224.038 27.1694 237.8 31.8147 251.255 36.3833L407.554 89.6129C429.896 97.2912 452.757 104.969 476.25 104.413C500.934 103.894 524.524 94.3926 547.5 85.006L654.604 41.2974C665.871 36.6904 677.387 32.0451 689.48 31.3348C702.455 30.567 715.219 34.3677 727.715 38.1493L912.997 94.2391C934.629 100.785 956.971 107.407 979.332 104.682C995.935 102.666 1011.52 95.602 1026.84 88.6148L1200.6 9.37496C1209.66 5.2287 1218.97 1.04405 1228.86 0.391398C1238.74 -0.261255 1248.63 2.75247 1258.28 5.49746C1389.38 42.6987 1532.97 32.8129 1655.82 93.2985C1672.13 101.341 1688.58 111.189 1698.35 127.006C1708.12 142.823 1708.93 166.069 1695.68 178.834C1686.49 187.722 1673.15 189.68 1660.69 191.216C1603.11 198.337 1547.04 205.382 1491.2 219.165C1429.9 234.329 1357.5 229.895 1294.66 232.39C1161.69 237.683 1028.55 236.28 895.722 228.187C877.116 227.06 858.524 225.781 839.943 224.347C642.838 209.509 446.211 179.909 248.626 184.036C165.495 185.783 80.8101 193.346 0.462891 171.06"
              fill="url(#paint0_linear_189_375)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_189_375"
                x1="853.053"
                y1="235.538"
                x2="853.053"
                y2="0.314617"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.37" stopColor="#F4FFF1" />
                <stop offset="0.51" stopColor="#EBFFEE" />
                <stop offset="0.74" stopColor="#D4FFE5" />
                <stop offset="0.89" stopColor="#C2FFDE" />

                {/* <stop offset="1" stopColor="#92EAE5" /> */}
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1736"
            height="243"
            viewBox="0 0 1736 243"
            fill="none"
          >
            <path
              d="M0.660156 107.479C24.3459 87.6879 51.4098 70.8726 81.3913 65.9393C111.373 61.006 142.026 68.3195 171.911 74.4622C238.65 88.2063 307.02 95.8077 375.064 92.3141C438.405 89.0508 492.149 67.0718 552.726 50.4675C559.828 48.548 567.083 46.6284 574.396 47.1851C586.316 48.2217 596.585 55.9191 606.681 62.5416C659.12 97.4202 721.52 111.337 782.404 124.62C805.841 129.746 829.795 134.89 853.577 131.972C872.675 129.631 890.814 122.202 908.53 114.466C952.807 95.1455 996.063 73.5668 1038.13 49.8149C1064.16 35.111 1105.6 6.75897 1134.52 1.46097C1147.81 -0.976884 1161.09 4.49388 1173.68 9.52315C1352.19 80.7967 1552.77 81.1998 1726.47 164.49C1745.17 173.454 1764.59 184.492 1774 203.553C1748.41 214.111 1720.51 216.76 1693 218.334C1500.14 229.237 1306.85 190.826 1114.22 203.687C1002.41 211.155 892.023 235.821 780.101 240.985C562.726 251.005 345.946 187.237 129.089 205.953"
              fill="url(#paint0_linear_189_377)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_189_377"
                x1="887.301"
                y1="242.06"
                x2="887.301"
                y2="0.865899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFFF3" />
                <stop offset="0.37" stopColor="#F4FFF1" />
                <stop offset="0.51" stopColor="#EBFFEE" />
                <stop offset="0.74" stopColor="#D4FFE5" />
                <stop offset="0.89" stopColor="#C2FFDE" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1495"
            height="407"
            viewBox="0 0 1495 407"
            fill="none"
          >
            <path
              d="M1133.3 224.424C1117.94 224.578 1102.59 224.981 1087.23 225.633C1061.28 226.728 1035.2 228.513 1009.42 225.25C990.724 222.888 972.451 217.898 954.235 212.926C922.085 204.154 884.982 185.246 875.539 186.916C866.095 188.586 805.211 217.399 789.741 217.399C774.27 217.399 702.33 188.605 673.903 181.196C599.084 161.424 523.458 143.668 452.862 110.613C422.381 96.3314 392.074 80.3798 359.194 74.1412C339.673 70.4748 319.02 70.1485 301.4 60.7042C290.133 54.6384 280.92 45.2325 271.035 36.94C252.398 21.2753 230.881 9.40127 207.693 1.98463C204.184 0.544552 200.349 0.0866883 196.599 0.660124C192.261 1.69669 188.921 5.20952 185.87 8.56876C106.156 95.6404 26.9794 187.396 -33.1371 290.592C-36.2849 295.966 -39.4136 302.743 -36.4385 308.213C-34.116 312.456 -29.0679 313.972 -24.5189 315.066C73.8902 338.331 177.194 326.065 276.486 344.8C328.003 354.532 377.755 372.461 428.869 384.286C509.485 402.944 592.654 406.169 675.247 406.687C901.507 408.091 1127.46 389.773 1350.54 351.941C1372.82 348.102 1395.9 340.424 1418.31 338.907C1437.51 337.602 1454.44 342.746 1473 332.477C1488.53 323.915 1499.56 303.683 1492.31 286.964C1489.03 279.42 1482.71 273.834 1475.88 269.438C1457.03 257.172 1434.67 252.411 1412.77 248.323C1320.59 231.412 1227.01 223.409 1133.3 224.424Z"
              fill="url(#paint0_linear_189_378)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_189_378"
                x1="703.405"
                y1="444.157"
                x2="764.144"
                y2="99.6154"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.37" stopColor="#F4FFF1" />
                <stop offset="0.51" stopColor="#EBFFEE" />
                <stop offset="0.74" stopColor="#D4FFE5" />
                <stop offset="0.89" stopColor="#C2FFDE" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          id={styles.background}
          className={` ${night ? styles.nightBackground : ""} `}
        >
          <Image
            alt="hero-bg"
            src="/images/Background.svg"
            fill
            priority
            style={{ height: "100%" }}
          />
        </motion.div>

        {/* coming Soon text */}
        <div className={`${styles.textWrapper} `}>
          <h1
            id={styles.heading}
            className={` ${passion.className} ${night ? styles.nightText : ""}`}
          >
            INCANDESCENCE‘24{" "}
          </h1>
          <h4
            id={styles.comingSoon}
            className={` ${poppins.className} ${night ? styles.nightText : ""}`}
          >
            COMING SOON...
          </h4>
        </div>
      </div>
      <div className={styles.scroller}></div>
    </div>
  );
};

export default Hero;
