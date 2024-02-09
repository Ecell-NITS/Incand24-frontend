import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./TeamCard.module.scss";

const TeamCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      if (cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - cardRect.left - 150,
          y: e.clientY - cardRect.top - 150,
        });
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div ref={cardRef} className={styles.main}>
          <div className={styles.in}>
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
          </div>
          <motion.div
            className={styles.bro}
            variants={variants}
            animate="default"
          ></motion.div>
        </div>
      </div>
    </div>

    // <div className={styles.container}>
    // <div className={styles.bro} ref={cardRef}>
    //     <div class={styles.content}>
    //         <motion.div
    //             variants={variants}
    //             animate="default"
    //             class={styles.hehe}></motion.div>
    //     </div>
    // </div></div>
  );
};

export default TeamCard;
