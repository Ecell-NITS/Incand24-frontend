"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";
// import Link from 'next/link'
// import {RouterLink as Link}  from "react-router-dom";

import {
  // Passion_One as passionOne,
  Allura as allura,
  // Poppins as poppins,
  // Montserrat_Alternates as montserratAlternates,
} from "next/font/google";
import Image from "next/image";
import Brochure from "../Button/Button";
import styles from "./Canavbar.module.scss";
import menuL from "../../../public/logos/menuL.svg";
// import menuD from "../../../public/logos/menuD.svg";
import insta from "../../../public/logos/instagram.svg";
// import instaD from "../../../public/logos/instaD.svg";
import fb from "../../../public/logos/facebook.svg";
// import fbD from "../../../public/logos/facebookD.svg";
import linkedIn from "../../../public/logos/linkedin.svg";
// import linkD from "../../../public/logos/linkedinD.svg";
import line from "../../../public/logos/line.svg";
// import lineD from "../../../public/logos/lineD.svg";
// import dark from "../../../public/images/DarkLogoNav.svg";
import light from "../../../public/images/LightLogoNav.svg";
import closeL from "../../../public/logos/closeL.svg";
// import closeD from "../../../public/logos/closeD.svg";

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
const CaNavbar = () => {
  const [select, setSelect] = useState(false);
  //   const [navbar, setNavbar] = useState(false);
  const navlink = [
    {
      name: "Home",
      link: "/Hero",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Sponsors",
      link: "/Sponsor",
    },
  ];
  const change = () => {
    if (select === false) {
      setSelect(!select);
    } else {
      setSelect(!select);
    }
  };
  //   useEffect(() => {
  //     const changeColor = () => {
  //       if (window.scrollY >= 110) {
  //         setNavbar(true);
  //       } else {
  //         setNavbar(false);
  //       }
  //     };
  //     window.addEventListener("scroll", changeColor);
  //   }, []);
  return (
    <div>
      <nav>
        <button className={styles.hamburger} onClick={change} label="menu">
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
            select
              ? `${styles.show} ${styles.active} ${Allura.className}`
              : `${styles.show} ${Allura.className}`
          }
        >
          <button label="close" className={styles.close}>
            <Image src={closeL} alt="" className={styles.cross} onClick={change} />
          </button>
          <div className={styles.nav_menu}>
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
                <Image className={styles.line} src={line} alt="" />
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1jA6Y5fh-ZW8VYepFH7QhS6UZus-KYgHC/view?usp=drivesdk"
              className={`${styles.nav_items} 
                  ${styles.nav_items_a}`}
              target="_blank"
              aria-label="Brochure"
              rel="noopener noreferrer"
            >
              <div>Brochure</div>
              <Image className={styles.line} src={line} alt="" />
            </a>
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
        <div className={styles.menu_bar}>
          <Link
            href="/hero"
            // spy
            // smooth
            // hashSpy
            // offset={50}
            // duration={500}
            className={styles.wrapper}
          >
            <div className={styles.logo}>
              <Image fill style={{ cursor: "pointer" }} src={light} alt="" />
            </div>
          </Link>

          <div className={styles.grp1}>
            {navlink.map((item) => (
              <Link
                className={`${styles.item1} ${Allura.className}`}
                key={item.name}
                href={item.link}
                // spy
                // smooth
                // hashSpy
                // offset={-40}
                // duration={500}
              >
                {item.name}
              </Link>
            ))}
            <a
              className={`styles.btn ${Allura.className}`}
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
export default CaNavbar;
