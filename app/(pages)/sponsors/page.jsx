"use client";

// import { Allura as allura } from "next/font/google";
import { useEffect } from "react";
import styles from "./Sponsors.module.scss";
import SponsorsHero from "@/app/components/sponsors_components/Hero/SponsorsHero";
import WhySponsors from "@/app/components/sponsors_components/Hero/WhySponsors";
import PrevSponsors from "@/app/components/sponsors_components/Hero/PrevSponsors";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import CurrentSponsors from "@/app/components/current_sponsors/CurrentSponsors";

// const Allura = allura({
//   weight: ["400"],
//   subsets: ["latin"],
// });

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
    name: "Events",
    href: "/events  ",
  },
  {
    name: "Team",
    href: "/team",
  },
];

const Sponsors = () => {
  useEffect(() => {
    document.title = "Sponsors | Incandescence";
  }, []);
  return (
    <div className={styles.sponsors_body}>
      <Navbar navlink={navlink} defaultDark />
      <SponsorsHero />
      <WhySponsors />
      <CurrentSponsors />
      <PrevSponsors />
      <Footer galleryPage />
    </div>
  );
};

export default Sponsors;
