/* eslint-disable jsx-a11y/control-has-associated-label */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Poppins, Montserrat, Allura } from "next/font/google";
import { useRouter } from "next/navigation";
import styles from "./Footer.module.scss";
import logo from "../../../public/images/glowingLogo.svg";
import hills from "../../../public/images/footerHills.png";
import Brochure from "../Button/Button";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Footer",
  description: "Footer",
};

const Footer = ({ isHills = true, homePage = false }) => {
  const router = useRouter();

  // ecell

  return (
    <div className={`${styles.Footer} ${montserrat.className}`}>
      {isHills && (
        <div className={styles.hills}>
          <Image style={{ pointerEvents: "none" }} alt="" src={hills} fill />
        </div>
      )}
      <div
        className={`${styles.container} ${isHills ? styles.yesHills : styles.noHills}`}
      >
        {homePage && (
          <div className={styles.ca}>
            <h1 className={`${styles.title} ${allura.className}`}>
              Become Campus Ambassador
            </h1>
            <p className={`${styles.content} ${montserrat.className}`}>
              Becoming a NIT Silchar Campus Ambassador is your exclusive ticket to
              becoming the face and voice of our vibrant academic community. It&apos;s not
              just a role, it&apos;s an opportunity to share the dynamic spirit of our
              campus with the world!
            </p>
            <div
              id={styles.topBrchBtn}
              onClick={() => {
                router.push("/ca");
              }}
              role="button"
              aria-label="home button"
              tabIndex={0}
              onKeyDown={() => {
                router.push("/");
              }}
            >
              <Brochure text="Join Us" />
            </div>
          </div>
        )}

        <div className={styles.info}>
          <a
            href="https://drive.google.com/file/d/1jA6Y5fh-ZW8VYepFH7QhS6UZus-KYgHC/view?usp=drivesdk"
            target="_blank"
            className={styles.brochure}
          >
            <Brochure text="Brochure" />
          </a>
          <div className={styles.contact}>
            <div> Contact us</div>
            <a href="mailto:incandescene@nits.ac.in">
              <span className={styles.fold_fs}>
                <Icon
                  icon="iconoir:mail"
                  color="#acebbd"
                  width="25"
                  className={styles.mailicon}
                />
                incandescene@nits.ac.in{" "}
              </span>
            </a>
          </div>
        </div>
        <div className={styles.logo}>
          <div
            role="button"
            aria-label="home button"
            tabIndex={0}
            onClick={() => {
              router.push("/");
            }}
            onKeyDown={() => {
              router.push("/");
            }}
          >
            <Image style={{ cursor: "pointer" }} alt=" " src={logo} fill />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.follow}>
            Follow us
            <div className={styles.social}>
              <a
                href="https://www.instagram.com/incandescence.nitsilchar"
                target="_blank"
              >
                <Icon
                  icon="mdi:instagram"
                  color="#acebbd"
                  width="30"
                  className={styles.icon}
                />
              </a>
              <a href="https://www.linkedin.com/company/incandescence23/" target="_blank">
                <Icon
                  icon="pajamas:linkedin"
                  color="#acebbd"
                  width="30"
                  className={styles.icon}
                />
              </a>
              <a href="https://www.facebook.com/incandescence.nits/" target="_blank">
                <Icon
                  icon="fe:facebook"
                  color="#acebbd"
                  width="30"
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <div className={styles.contact}>
            <div>NIT SILCHAR</div>
            <span>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/5vA3bZoxBSHCu38H6"
                className={styles.fold_fs}
              >
                {" "}
                <div>
                  <Icon
                    icon="system-uicons:location"
                    color="#acebbd"
                    width="25"
                    className={styles.locnlogo}
                  />
                  NIT Road, Fakirtilla,
                </div>
                <div>Silchar, Assam 788010</div>
              </a>
            </span>
          </div>
        </div>
        <div className={`${styles.ecell_copyright} ${poppins.className}`}>
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
    </div>
  );
};

export default Footer;
