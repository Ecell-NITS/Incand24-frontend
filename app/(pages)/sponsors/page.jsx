"use client";

// import { Allura as allura } from "next/font/google";
import styles from "./Sponsors.module.scss";
import SponsorsHero from "@/app/components/sponsors_components/Hero/SponsorsHero";
import WhySponsors from "@/app/components/sponsors_components/Hero/WhySponsors";
import PrevSponsors from "@/app/components/sponsors_components/Hero/PrevSponsors";

// const Allura = allura({
//   weight: ["400"],
//   subsets: ["latin"],
// });

const Sponsors = () => {
  return (
    <div className={styles.sponsors_body}>
      <SponsorsHero />
      <WhySponsors />
      <PrevSponsors />
    </div>
  );
};

export default Sponsors;
