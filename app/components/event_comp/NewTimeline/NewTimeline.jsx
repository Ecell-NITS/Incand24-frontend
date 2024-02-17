"use client";

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable import/no-extraneous-dependencies */
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
// import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./NewTimeline.module.scss";
import events from "@/_db/events";
import NewButton from "../../Shared/NewButton/NewButton";
import butterfly from "./butterfly";

const poppins = Poppins({
  weight: ["400", "600"],
  display: "swap",
  subsets: ["latin"],
});

AOS.init();

const NewTimeline = ({ data = events, route }) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
      window?.addEventListener("resize", () => {
        setWidth(window?.innerWidth);
      });

      return window?.removeEventListener("resize", () => {});
    }
    return null;
  }, []);

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
            <Player
              className={styles.butterfly}
              autoplay
              loop
              // keepLastFrame
              src={butterfly}
              id={styles.lottie}
              style={{ height: "auto", width: "100px" }}
            ></Player>
            <div
              data-aos={event.id % 2 === 0 && width > 768 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay="500"
              className={`${poppins.className} ${styles.cardWrapper}`}
            >
              <div className={styles.desc}>
                {`${event.text.slice(0, 100)}...`}
                <span
                  role="button"
                  tabindex="0"
                  aria-label="dismiss"
                  onClick={() => {
                    router.push(`/${route}/${event.id}`);
                  }}
                >
                  <NewButton text="Know More" />
                </span>
              </div>
              <div className={`${styles.Card}`}>
                <div className={styles.index}>
                  {event.id < 10 ? `0${event.id}` : event.id}
                </div>
                <div className={styles.image}>
                  {event.thumbnail ? (
                    <Image src={event.thumbnail} alt="" fill sizes="auto" priority />
                  ) : (
                    ""
                  )}
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
