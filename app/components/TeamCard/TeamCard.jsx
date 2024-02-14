"use client"
import React from 'react';
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./TeamCard.module.scss";
import { Icon } from '@iconify/react';

const poppins = Poppins({
  weight: ["800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

const TeamCard = ({name, rank, fb, linkedln, git}) => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     if (cardRef.current) {
  //       const cardRect = cardRef.current.getBoundingClientRect();
  //       setMousePosition({
  //         x: e.clientX - cardRect.left - 150,
  //         y: e.clientY - cardRect.top - 150,
  //       });
  //     }
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x,
  //     y: mousePosition.y,
  //   },
  // };

  return (
    // <div className={styles.container}>
    //   <div className={styles.card}>
    //     <div ref={cardRef} className={styles.main}>
    //       <div className={styles.in}>
    // <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
    //       </div>
    //       <motion.div
    //         className={styles.bro}
    //         variants={variants}
    //         animate="default"
    //       ></motion.div>
    //     </div>
    //   </div>
    // </div>

    // <div className={styles.container}>
    // <div className={styles.bro} ref={cardRef}>
    //     <div class={styles.content}>
    //         <motion.div
    //             variants={variants}
    //             animate="default"
    //             class={styles.hehe}></motion.div>
    //     </div>
    // </div></div>


    <div className={styles.container}>
      {/* <Image
            src="/Variant2.png"
            style={{ padding: "0 1.5rem" }}
            height={124}
            width={260}
            alt=""
          /> */}
      <div className={styles.grad}>
        <div className={styles.gradientBg}></div>
        <div className={styles.card}>
          <div className={styles.in}>
            <div className={styles.image}>
            {/* <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" /> */}

              {/* <img src={image} /> */}
              {/* <Image src={image} height={150} width={150} alt="image"/> */}

            </div>
            <div className={`${poppins.className} ${styles.items}`}>
              <div className={styles.icons}>
                <a href={fb}><Icon icon="ic:baseline-facebook" width="2rem" height="2rem"  style={{color: 'white'}} /></a>
                <a href={linkedln}><Icon icon="mdi:linkedin" width="2rem" height="2rem"  style={{color: 'white'}} /></a>
                <a href={git}><Icon icon="mdi:github" width="2rem" height="2rem"  style={{color: 'white'}} /></a>
              </div>
              <h3>{name}</h3>
              <h5>{rank}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
