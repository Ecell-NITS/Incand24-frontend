"use client"

import React from "react";
import styles from "./gallery.module.scss";
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/gallery/hero/Hero";
import Gallery from "@/app/components/gallery/Gallery/Gallery";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
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
  return (
    <div className={styles.wrapper}>
      <Navbar navlink={navlink} defaultDark={false} />
      <Hero/>
      <Gallery/>
      <Footer galleryPage/>
    </div>
  );
};

export default page;
