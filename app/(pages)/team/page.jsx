"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TeamCard from "@/app/components/TeamCard/TeamCard";
import styles from "./Team.module.scss";
import teamData1 from "@/_db/Team3";
import teamData2 from "@/_db/Team43";
import teamData3 from "@/_db/Team5";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Toggle from "@/app/components/Toggle/Toggle";
import TeamHero from "@/app/components/TeamCard/TeamHero";

const Page = () => {
  const [isCore, setIsCore] = useState(true);
  const [isTech, setIsTech] = useState(false);
  const [isModuleHead, setIsModuleHead] = useState(false);
  const text = { Core: "Core", Tech: "Tech", ModuleHead: "Module Head" };

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

  useEffect(() => {
    document.title = "Team | Incandescence";
  }, []);

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
            objectFit: "cover",
          }}
        />

        <Toggle
          text={text}
          setIsCore={setIsCore}
          setIsTech={setIsTech}
          setIsModuleHead={setIsModuleHead}
        />

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
                  insta={member.insta}
                />
              ))}
            </div>
          ))}

        {isTech &&
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
                  insta={member.insta}
                />
              ))}
            </div>
          ))}

        {isModuleHead &&
          teamData3.map((teamGroup) => (
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
                  insta={member.insta}
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
