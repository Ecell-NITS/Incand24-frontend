/* eslint-disable jsx-a11y/control-has-associated-label */

import { Link } from "react-scroll";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import hills from "../../../public/images/footerHills.png";
import logo from "../../../public/images/LogoDark.png";
import Brochure from "../Button/Button";

export const metadata = {
  title: "Footer",
  description: "Footer",
};

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.hills}>
        <Image style={{ pointerEvents: "none" }} alt="" src={hills} fill />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <a
            href="https://drive.google.com/file/d/1jA6Y5fh-ZW8VYepFH7QhS6UZus-KYgHC/view?usp=drivesdk"
            target="_blank"
            className={styles.brochure}
          >
            <Brochure />
          </a>
          <div className={styles.contact}>
            <div> Contact us</div>
            <a href="mailto:incandescene@nits.ac.in">
              <span>
                <Icon icon="iconoir:mail" color="#acebbd" width="25" />
                incandescene@nits.ac.in{" "}
              </span>
            </a>
          </div>
        </div>
        <div className={styles.logo}>
          <Link to="hero" spy smooth hashSpy offset={50} duration={500}>
            <Image style={{ cursor: "pointer" }} alt=" " src={logo} fill />
          </Link>
        </div>
        <div className={styles.info}>
          <div className={styles.follow}>
            Follow us
            <div className={styles.social}>
              <a
                href="https://www.instagram.com/incandescence.nitsilchar"
                target="_blank"
              >
                <Icon icon="mdi:instagram" color="#acebbd" width="30" />
              </a>
              <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
                <Icon icon="pajamas:linkedin" color="#acebbd" width="30" />
              </a>
              <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
                <Icon icon="fe:facebook" color="#acebbd" width="30" />
              </a>
            </div>
          </div>
          <div className={styles.contact}>
            <div>NIT SILCHAR</div>
            <span>
              <a target="_blank" href="https://maps.app.goo.gl/5vA3bZoxBSHCu38H6">
                {" "}
                <div>
                  <Icon icon="system-uicons:location" color="#acebbd" width="25" />
                  NIT Road, Fakirtilla,
                </div>
                <div>Silchar, Assam 788010</div>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.ecell_copyright}>
        <div className={styles.ecell}>
          MADE BY{" "}
          <a href="http://ecellnits.org" target="_blank">
            <Image src="/logos/ecell.svg" alt="ecell" width={10} height={10} />
          </a>{" "}
          <a href="https://ecellnits.org" target="_blank">
            {" "}
            E-CELL
          </a>
        </div>
        <div className={styles.copyright}>
          ©Copyright 2024, National Institute Of Technology, Silchar
        </div>
      </div>
    </div>
  );
};

export default Footer;
