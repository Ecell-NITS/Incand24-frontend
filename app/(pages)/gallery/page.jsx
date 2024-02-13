"use client";

import React, { useEffect } from "react";
import styles from "./gallery.module.scss";
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/gallery/hero/Hero";
import Gallery from "@/app/components/gallery/Gallery/Gallery";
import Footer from "@/app/components/Footer/Footer";

const Page = () => {
  const navlink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Sponsors",
      href: "/sponsors",
    },
    {
      name: "Team",
      href: "/team",
    },
  ];

  useEffect(() => {
    document.title = "Gallery | Incandescence";
  }, []);
  return (
    <div className={styles.wrapper}>
      <Navbar navlink={navlink} defaultDark={false} />
      <Hero />
      <Gallery />
      <Footer galleryPage />
    </div>
  );
};

export default Page;
