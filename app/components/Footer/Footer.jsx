import Link from "next/link";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import hills from "../../../public/images/footerHills.png";
import logo from "../../../public/images/LogoDark.png";
import Brochure from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.hills}>
        <Image alt="" src={hills} fill />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <Link
            href="https://drive.google.com/file/d/1jA6Y5fh-ZW8VYepFH7QhS6UZus-KYgHC/view?usp=drivesdk"
            target="_blank"
            className={styles.brochure}
          >
            <Brochure />
          </Link>
          <div className={styles.contact}>
            <div> Contact us</div>
            <span>incandescene@nits.ac.in</span>
          </div>
        </div>
        <div className={styles.logo}>
          <Image alt=" " src={logo} fill />
        </div>
        <div className={styles.info}>
          <div className={styles.follow}>
            Follow us
            <div className={styles.social}>
              <Icon icon="mdi:instagram" color="#acebbd" width="30" />
              <Icon icon="pajamas:linkedin" color="#acebbd" width="30" />
              <Icon icon="fe:facebook" color="#acebbd" width="30" />
            </div>
          </div>
          <div className={styles.contact}>
            <div>NIT SILCHAR</div>
            <span>
              <div>NIT Road, Fakirtilla,</div>
              <div>Silchar, Assam 788010</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
