"use client";

import { useEffect } from "react";
import { Allura } from "next/font/google";
import styles from "./Event.module.scss";
import GradientBg from "@/app/components/Shared/GradientBg/GradientBg";
import EventBody from "@/app/components/event_comp/main/EventBody";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const Event = () => {
  useEffect(() => {
    document.title = "Events | Incandescence 2024";
  }, []);

  const navlink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Gallery",
      href: "/gallery",
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

  return (
    <div className={`${styles.Event} ${allura.className}`}>
      <Navbar navlink={navlink} defaultDark />
      <GradientBg />
      <EventBody />
      {/* <div className={styles.scroller}></div> */}
      <Footer galleryPage />
    </div>
  );
};

export default Event;
