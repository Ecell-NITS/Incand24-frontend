import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./social.module.scss";

const Social = () => {
  const [scrollY, setScrollY] = useState(0);
  const [social, setSocial] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    if (scrollY > window.innerHeight * 1.5) {
      setSocial(true);
    } else {
      setSocial(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [social, scrollY]);

  return (
    <div className={`${styles.socialHandle} ${social ? styles.visible : ""} `}>
      <div className={styles.socialIcon}>
        <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
          <Image width={40} height={40} src="/logos/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <div className={styles.socialIcon}>
        <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
          <Image width={40} height={40} src="/logos/facebook.svg" alt="facebook" />
        </a>
      </div>
      <div className={styles.socialIcon}>
        <a href="https://www.instagram.com/incandescence.nitsilchar" target="_blank">
          <Image width={40} height={40} src="/logos/instagram.svg" alt="instagram" />
        </a>
      </div>
      <div className={styles.verticalLine}></div>
    </div>
  );
};

export default Social;
