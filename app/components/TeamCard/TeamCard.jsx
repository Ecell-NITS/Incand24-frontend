"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./TeamCard.module.scss";

const poppins = Poppins({
  weight: ["800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

const TeamCard = ({ name, insta, rank, fb, linkedln, git, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grad}>
        <Image
          src="/Variant2.png"
          style={{ padding: "0 1.5rem" }}
          alt=""
          layout="fill"
          className={styles.col}
        />
      </div>
      <div className={styles.card}>
        <div className={styles.in}>
          <div className={styles.image}>
            {/* <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" /> */}

            {/* <img src={image} /> */}
            <Image src={image} height={150} width={150} alt="image" />
          </div>
          <div className={`${poppins.className} ${styles.items}`}>
            <div className={styles.icons}>
              {fb && (
                <Link target="_blank" href={fb}>
                  <Icon
                    icon="ic:baseline-facebook"
                    width="2rem"
                    height="2rem"
                    style={{ color: "white" }}
                  />
                </Link>
              )}
              {linkedln && (
                <Link target="_blank" href={linkedln}>
                  <Icon
                    icon="mdi:linkedin"
                    width="2rem"
                    height="2rem"
                    style={{ color: "white" }}
                  />
                </Link>
              )}
              {git && (
                <Link target="_blank" href={git}>
                  <Icon
                    icon="mdi:github"
                    width="2rem"
                    height="2rem"
                    style={{ color: "white" }}
                  />
                </Link>
              )}
              {!git && insta && (
                <Link target="_blank" href={insta}>
                  <Icon
                    icon="mdi:instagram"
                    width="2rem"
                    height="2rem"
                    style={{ color: "white" }}
                  />
                </Link>
              )}
            </div>
            <h3>{name}</h3>
            <h5>{rank}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
