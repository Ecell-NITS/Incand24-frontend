"use client";

/* eslint-disable import/no-extraneous-dependencies */
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
// import EventCard from "../Card/EventCard";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./NewTimeline.module.scss";
import events from "@/_db/events";

const poppins = Poppins({
  weight: ["400", "600"],
  display: "swap",
  subsets: ["latin"],
});

AOS.init();

const NewTimeline = ({ data = events }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
      window?.addEventListener("resize", () => {
        setWidth(window?.innerWidth);
      });
    }
    // console.log(width>768)
  }, [width]);

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <div className={styles.timelineMilestone}></div>
      </div>

      {data.map((event) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            key={event.id}
            className={styles.timelineItem}
          >
            <div
              data-aos={event.id % 2 === 0 && width > 768 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay="500"
              className={`${poppins.className} ${styles.cardWrapper}`}
            >
              <div className={styles.desc}>
                {`${event.text.slice(0, 100)}...`}
                <button>know more</button>
              </div>
              <div className={`${styles.Card}`}>
                <div className={styles.index}>
                  {event.id < 10 ? `0${event.id}` : event.id}
                </div>
                <div className={styles.image}>
                  <Image src={event.imgUrls[0]} alt="" fill sizes="auto" priority />
                </div>
                <span className={styles.title}>{event.header}</span>
              </div>
            </div>
            <div className={styles.timelineMilestone}></div>
          </div>
        );
      })}

      {/* <div className={styles.timelineItem}>
        <div className={styles.timelineMilestone}></div>
      </div> */}
    </div>
  );
};

export default NewTimeline;
