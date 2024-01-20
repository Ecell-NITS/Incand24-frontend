"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  // Passion_One as passionOne,
  Poppins as poppins,
  Montserrat_Alternates as montserratAlternates,
} from "next/font/google";
import Image from "next/image";
import Brochure from "../Button/Button";
import styles from "./Navbar.module.scss";
import menuL from "../../../public/logos/menuL.svg";
import menuD from "../../../public/logos/menuD.svg";
import insta from "../../../public/logos/instagram.svg";
import instaD from "../../../public/logos/instaD.svg";
import fb from "../../../public/logos/facebook.svg";
import fbD from "../../../public/logos/facebookD.svg";
import linkedIn from "../../../public/logos/linkedin.svg";
import linkD from "../../../public/logos/linkedinD.svg";
import line from "../../../public/logos/line.svg";
import lineD from "../../../public/logos/lineD.svg";
import dark from "../../../public/images/DarkLogoNav.svg";
import light from "../../../public/images/LightLogoNav.svg";
import closeL from "../../../public/logos/closeL.svg";
import closeD from "../../../public/logos/closeD.svg";

// const passion = passionOne({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--passion-font",
// });
const Poppins = poppins({
  weight: ["400"],
  subsets: ["latin"],
});
const monteserrat = montserratAlternates({
  weight: ["500"],
  subsets: ["latin"],
});
const Navbar = () => {
  const [select, setSelect] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navlink = [
    {
      name: "Home",
      link: "hero",
    },
    {
      name: "About Us",
      link: "about",
    },
    {
      name: "Sponsors",
      link: "sponsor",
    },
  ];
  const change = () => {
    if (select === false) {
      setSelect(!select);
    } else {
      setSelect(!select);
    }
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 110) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div>
      <nav>
        <button className={styles.hamburger} onClick={change} label="menu">
          {/* <label></label> */}
          <Image src={navbar ? menuL : menuD} className={styles.menu} alt="" />
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
            select
              ? `${styles.show} ${styles.active} ${monteserrat.className}`
              : `${styles.show} ${monteserrat.className}`
          }
        >
          <button label="close" className={styles.close}>
            <Image
              src={!navbar ? closeD : closeL}
              alt=""
              className={styles.cross}
              onClick={change}
            />
          </button>
          <div
            className={
              !navbar ? `${styles.nav_menu} ${styles.nav_dark}` : `${styles.nav_menu}`
            }
          >
            {navlink.map(({ name, link }) => (
              <Link
                onClick={change}
                className={styles.nav_items}
                key={name}
                to={link}
                spy
                smooth
                hashSpy
                offset={10}
                duration={500}
              >
                {name}
                <Image className={styles.line} src={navbar ? line : lineD} alt="" />
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1jA6Y5fh-ZW8VYepFH7QhS6UZus-KYgHC/view?usp=drivesdk"
              className={
                !navbar
                  ? `${styles.nav_items} ${styles.nav_dark}`
                  : `${styles.nav_items_a}`
              }
              target="_blank"
              aria-label="Brochure"
              rel="noopener noreferrer"
            >
              <div>Brochure</div>
              <Image className={styles.line} src={navbar ? line : lineD} alt="" />
            </a>
          </div>
          <div className={`${styles.footer} ${monteserrat.className}`}>
            <span
              className={!navbar ? `${styles.follow} ${styles.followD}` : styles.follow}
            >
              Follow Us
            </span>
            <div className={styles.social}>
              <a
                className={styles.link}
                aria-label="Insta"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/incandescence.nitsilchar"
              >
                <Image src={navbar ? insta : instaD} alt=""></Image>
              </a>
              <a
                className={styles.link}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/incandescence.nits/"
              >
                <Image src={navbar ? fb : fbD} alt=""></Image>
              </a>
              <a
                className={styles.link}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/incandescence23/"
              >
                <Image src={!navbar ? linkD : linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.menu_bar}>
          <Link
            to="hero"
            spy
            smooth
            hashSpy
            offset={50}
            duration={500}
            className={styles.wrapper}
          >
            <div className={styles.logo}>
              <Image
                fill
                style={{ cursor: "pointer" }}
                src={navbar ? light : dark}
                alt=""
              />
            </div>
          </Link>

          <div className={navbar ? styles.grp1 : styles.grp2}>
            {navlink.map(({ name, link }) => (
              <Link
                className={
                  navbar
                    ? `${styles.item1} ${Poppins.className}`
                    : `${Poppins.className} ${styles.item}`
                }
                key={name}
                to={link}
                spy
                smooth
                hashSpy
                offset={20}
                duration={500}
              >
                {name}
              </Link>
            ))}
            <a
              className={styles.btn}
              aria-label="Brochure"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1jA6Y5fh-ZW8VYepFH7QhS6UZus-KYgHC/view"
            >
              <Brochure />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
