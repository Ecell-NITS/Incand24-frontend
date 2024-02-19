"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import {
  // Passion_One as passionOne,
  Allura as allura,
  // Poppins as poppins,
  // Montserrat_Alternates as montserratAlternates,
} from "next/font/google";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import menuL from "../../../public/logos/menuL.svg";
import insta from "../../../public/logos/instagram.svg";
import fb from "../../../public/logos/facebook.svg";
import linkedIn from "../../../public/logos/linkedin.svg";
import line from "../../../public/logos/line.svg";
import light from "../../../public/images/LightLogoNav.svg";
import closeL from "../../../public/logos/closeL.svg";

// const passion = passionOne({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--passion-font",
// });

const Allura = allura({
  weight: ["400"],
  subsets: ["latin"],
});
// const Poppins = poppins({
//   weight: ["400"],
//   subsets: ["latin"],
// });
// const monteserrat = montserratAlternates({
//   weight: ["500"],
//   subsets: ["latin"],
// });
const Navbar = ({ navlink }) => {
  // const [select, setSelect] = useState(false);
  const [close, setClose] = useState(false);
  // const [visibleNav, setVisibleNav] = useState(false);
  // const [navbar, setNavbar] = useState(!defaultDark);
  const router = useRouter();
  const change = () => {
    if (close === false) {
      setClose(!close);
    } else {
      setClose(!close);
    }
  };

  // useEffect(() => {
  //   const SetNavbar = () => {
  //     if (window.scrollY >= 400) {
  //       setVisibleNav(true);
  //     } else {
  //       setVisibleNav(false);
  //     }
  //   };

  //   window.addEventListener("scroll", SetNavbar);
  // });

  return (
    <div>
      <nav>
        <button
          className={styles.hamburger}
          // style={{ top: visibleNav ? 0 : "" }}
          onClick={change}
          label="menu"
        >
          {/* <label></label> */}
          <Image src={menuL} className={styles.menu} alt="" />
          {/* <div id={styles.logo}>
            <Image
              style={{ cursor: "pointer" }}
              src={navbar ? light : dark}
              alt=""
            />
          </div> */}
        </button>
        <div
          className={
            close
              ? `${styles.show} ${styles.active} ${Allura.className}`
              : `${styles.show} ${Allura.className}`
          }
        >
          <button label="close" className={styles.close}>
            <Image src={closeL} alt="" className={styles.cross} onClick={change} />
          </button>
          <div className={`${styles.nav_menu}`}>
            {navlink.map((link) => (
              <a
                onClick={change}
                className={styles.nav_items_a}
                key={link.name}
                // href={link.href}
                // spy
                // smooth
                // hashSpy
                // offset={10}
                // duration={500}
              >
                <span
                  onClick={() => {
                    router.push(link.href);
                  }}
                >
                  {link.name}
                </span>

                <Image className={styles.line} src={line} alt="" />
              </a>
            ))}
          </div>
          <div className={`${styles.footer} ${Allura.className}`}>
            <span className={styles.follow}>Follow Us</span>
            <div className={styles.social}>
              <a
                className={styles.link}
                aria-label="Insta"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/incandescence.nitsilchar"
              >
                <Image src={insta} alt=""></Image>
              </a>
              <a
                className={styles.link}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/incandescence.nits/"
              >
                <Image src={fb} alt=""></Image>
              </a>
              <a
                className={styles.link}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/incandescence23/"
              >
                <Image src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div
          className={styles.menu_bar}
          // style={{ top: visibleNav ? "2vh" : "" }}
        >
          <div className={styles.wrapper}>
            <div
              role="button"
              aria-label="home button"
              tabIndex={0}
              className={styles.logo}
              onClick={() => {
                router.push("/");
              }}
              onKeyDown={() => {
                router.push("/");
              }}
            >
              <Image fill style={{ cursor: "pointer" }} src={light} alt="" />
            </div>
          </div>

          <div className={styles.grp1}>
            {navlink.map((link) => (
              <a
                className={`${styles.item1} ${Allura.className}`}
                key={link.name}
                // href={link.href}
                onClick={() => {
                  router.push(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
//
export default Navbar;
