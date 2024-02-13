"use client";

// import { Allura as allura } from "next/font/google";
import styles from "./Sponsors.module.scss";
import SponsorsHero from "@/app/components/sponsors_components/Hero/SponsorsHero";
import WhySponsors from "@/app/components/sponsors_components/Hero/WhySponsors";
import PrevSponsors from "@/app/components/sponsors_components/Hero/PrevSponsors";
import Navbar from "@/app/components/Navbar/Navbar";

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
  return (
    <div className={styles.sponsors_body}>
      <Navbar navlink={navlink} defaultDark />
      <SponsorsHero />
      <WhySponsors />
      <PrevSponsors />
    </div>
  );
};

export default Sponsors;
