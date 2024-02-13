import React, { useEffect, useRef } from 'react'; 
import styles from "./Toggle.module.scss";

const Toggle = ({ text, setIsCore }) => {
    const btnRef = useRef(null); 
    const textRefCore = useRef(null);
    const textRefTech = useRef(null);

    const leftClick = () => {
        btnRef.current.style.left = "0"; 
        setIsCore(true);
    };

    const rightClick = () => {
        btnRef.current.style.left = "50%"; 
        setIsCore(false);
    };


    return (
        <div className={styles.formBox}>
            <div className={styles.buttonBox}>
                <div ref={btnRef} id="btn" className={styles.bton}></div>
                <button className={styles.toggleBtn} onClick={leftClick}><h1 ref={textRefCore}>{text.Core}</h1></button>
                <button className={styles.toggleBtn} onClick={rightClick}><h1 ref={textRefTech}>{text.Tech}</h1></button>
            </div>
        </div>
    );
};

export default Toggle;
