"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import Brochure from "../Button/Button";
import styles from "./Navbar.module.scss";
import menu from "../../../public/logos/menu.svg";
import insta from "../../../public/logos/instagram.svg";
import fb from "../../../public/logos/facebook.svg";
import linkedIn from "../../../public/logos/linkedin.svg";
import line from "../../../public/logos/line.svg";
import dark from "../../../public/logos/dark.svg";
import light from "../../../public/logos/light.svg";
import close from "../../../public/logos/close.svg";

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
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div>
      <nav>
        <button className={styles.hamburger} onClick={change} label="menu">
          {/* <label></label> */}
          <Image src={menu} className={styles.menu} alt="" />
        </button>
        <div className={select ? `${styles.show} ${styles.active}` : styles.show}>
          <button label="close">
            <Image src={close} alt="" className={styles.cross} onClick={change} />
          </button>
          <div className={styles.nav_menu}>
            {navlink.map(({ name, link }) => (
              <Link
                className={styles.nav_items}
                key={name}
                to={link}
                spy
                smooth
                hashSpy
                offset={50}
                duration={500}
              >
                {name}
                <Image className={styles.line} src={line} alt="" />
              </Link>
            ))}
          </div>
          <div className={styles.footer}>
            <span id={styles.follow}>Follow Us</span>
            <div className={styles.social}>
              <Link className={styles.link} href="/about">
                <Image src={insta} alt=""></Image>
              </Link>
              <Link className={styles.link} href="/">
                <Image src={fb} alt=""></Image>
              </Link>
              <Link className={styles.link} href="/">
                <Image src={linkedIn} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.menu_bar}>
          <Link to="hero" spy smooth hashSpy offset={50} duration={500}>
            <Image
              style={{ cursor: "pointer" }}
              src={navbar ? light : dark}
              className={styles.logo}
              alt=""
            />
          </Link>

          <div className={navbar ? styles.grp1 : styles.grp2}>
            {navlink.map(({ name, link }) => (
              <Link
                className={navbar ? styles.item1 : styles.item}
                key={name}
                to={link}
                spy
                smooth
                hashSpy
                offset={50}
                duration={500}
              >
                {name}
              </Link>
            ))}
            <div className={styles.btn}>
              <Brochure />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
