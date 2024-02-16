"use client";

import React, { useState } from "react";
import Image from "next/image";
import TeamCard from "@/app/components/TeamCard/TeamCard";
import styles from "./Team.module.scss";
import teamData1 from "@/_db/Team3";
import teamData2 from "@/_db/Team4";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Toggle from "@/app/components/Toggle/Toggle";
import TeamHero from "@/app/components/TeamCard/TeamHero";

const Page = () => {
  const [isCore, setIsCore] = useState(true);
  const text = { Core: "Core", Tech: "Tech" };

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
      href: "/events",
    },
    {
      name: "Sponsors",
      href: "/sponsors",
    },
  ];

  return (
    <>
      <Navbar navlink={navlink} defaultDark={false} />

      <div className={styles.container}>
        <TeamHero />

        <Image
          src="/images/Stars.png"
          alt="bgimage"
          height={500}
          width={500}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // This ensures the image covers the entire container
          }}
        />
        <Toggle text={text} setIsCore={setIsCore} />

        {isCore &&
          teamData2.map((teamGroup) => (
            <div key={teamGroup[0].id} className={styles.card}>
              {teamGroup.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  rank={member.rank}
                  image={member.image}
                  fb={member.fb}
                  linkedln={member.linkedln}
                  git={member.git}
                />
              ))}
            </div>
          ))}

        {!isCore &&
          teamData1.map((teamGroup) => (
            <div key={teamGroup[0].id} className={styles.card}>
              {teamGroup.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  rank={member.rank}
                  image={member.image}
                  fb={member.fb}
                  linkedln={member.linkedln}
                  git={member.git}
                />
              ))}
            </div>
          ))}

        <Footer />
      </div>
    </>
  );
};

export default Page;
