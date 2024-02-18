import React, { useRef } from "react";
import styles from "./Toggle.module.scss";

const Toggle = ({ text, setIsCore, setIsTech, setIsModuleHead }) => {
  const btnRef = useRef(null);

  const leftClick = () => {
    btnRef.current.style.left = "0";
    setIsCore(true);
    setIsTech(false);
    setIsModuleHead(false);
  };

  const middleClick = () => {
    btnRef.current.style.left = "33.333%";
    setIsCore(false);
    setIsTech(true);
    setIsModuleHead(false);
  };

  const rightClick = () => {
    btnRef.current.style.left = "66.666%";
    setIsCore(false);
    setIsTech(false);
    setIsModuleHead(true);
  };

  return (
    <div className={styles.formBox}>
      <div className={styles.buttonBox}>
        <div ref={btnRef} id="btn" className={styles.bton}></div>
        <button className={styles.toggleBtn} onClick={leftClick}>
          <h1>{text.Core}</h1>
        </button>
        <button className={styles.toggleBtn} onClick={middleClick}>
          <h1>{text.Tech}</h1>
        </button>
        <button
          className={`${styles.toggleBtn} ${styles.moduleHead}`}
          onClick={rightClick}
        >
          <h1>{text.ModuleHead}</h1>
        </button>
      </div>
    </div>
  );
};

export default Toggle;
