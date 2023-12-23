"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Treeloader.module.scss";

const Treeloader = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationCompleted(true);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`${styles.treeloader} ${animationCompleted ? styles.animate : ""}`}>
      <div className={styles.treeloaderContainer}>
        <Image
          className={`${styles.leftTree} ${animationCompleted ? styles.animate : ""}`}
          src="/hero_elements/left_tree.png"
          alt="left-tree"
          layout="fill"
          quality={100}
          loading="eager"
          duration={3}
        />
        <Image
          className={`${styles.rightTree} ${animationCompleted ? styles.animate : ""}`}
          src="/hero_elements/right_tree.png"
          alt="right-tree"
          layout="fill"
          quality={100}
          loading="eager"
          duration={3}
        />
      </div>
    </div>
  );
};

export default Treeloader;
