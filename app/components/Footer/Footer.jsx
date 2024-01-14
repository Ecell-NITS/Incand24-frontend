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
            <Link href="mailto:incandescene@nits.ac.in">
              <span>
                <Icon icon="iconoir:mail" color="#acebbd" width="25" />
                incandescene@nits.ac.in{" "}
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.logo}>
          <Image alt=" " src={logo} fill />
        </div>
        <div className={styles.info}>
          <div className={styles.follow}>
            Follow us
            <div className={styles.social}>
              <Link
                href="https://www.instagram.com/incandescence.nitsilchar"
                target="_blank"
              >
                <Icon icon="mdi:instagram" color="#acebbd" width="30" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/incandescence23/"
                target="_blank"
              >
                <Icon icon="pajamas:linkedin" color="#acebbd" width="30" />
              </Link>
              <Link href="https://www.facebook.com/incandescence.nits/" target="_blank">
                <Icon icon="fe:facebook" color="#acebbd" width="30" />
              </Link>
            </div>
          </div>
          <div className={styles.contact}>
            <div>NIT SILCHAR</div>
            <span>
              <Link target="_blank" href="https://maps.app.goo.gl/5vA3bZoxBSHCu38H6">
                {" "}
                <div>
                  <Icon icon="system-uicons:location" color="#acebbd" width="25" />
                  NIT Road, Fakirtilla,
                </div>
                <div>Silchar, Assam 788010</div>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
