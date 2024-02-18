"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Allura } from "next/font/google";
import styles from "./Event.module.scss";
import GradientBg from "@/app/components/Shared/GradientBg/GradientBg";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";

const EventBody = dynamic(() => import("@/app/components/event_comp/main/EventBody"), {
  ssr: false,
});

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const Event = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Events | Incandescence 2024";
    }
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
