"use client";

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable import/no-extraneous-dependencies */
import { Icon } from "@iconify/react";
// import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Allura, Poppins } from "next/font/google";
import events from "@/_db/events";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./EventModal.module.scss";
import "./SwiperButton.scss";
import NewButton from "../../Shared/NewButton/NewButton";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const poppins = Poppins({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

const EventModal = ({ data = events[0], previousRoute = "events" }) => {
  const router = useRouter();
  return (
    <div className={`${styles.modal} ${allura.className}`}>
      <div className={styles.card}>
        <Image
          alt="event image"
          src={`${data.thumbnail ? data.thumbnail : "/events/eventsPlaceholder.png"}`}
          fill
          layout=""
        />
        <div className={styles.info}>
          <span
            role="button"
            tabindex="0"
            aria-label="dismiss"
            onClick={() => {
              router.push(`/${previousRoute}`);
            }}
            alt=""
            className={styles.cross}
          >
            <Icon icon="akar-icons:cross" color="#ffffff" width="30" />
          </span>
          <div className={styles.desc}>
            <h1>{data.header}</h1>
            <p className={`${poppins.className}`}>{data.text}</p>
            {data.registrationLink?.link && (
              <Link href={data.registrationLink?.link} alt="" target="_blank">
                <NewButton text="Register To Participate" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={styles.memories}>
        <h2 className={`${allura.className}`}>Memories</h2>
        <Swiper
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          className={styles.carousel}
          navigation
          modules={[Navigation, Autoplay]}
        >
          {data.imgUrls.map((item) => {
            return (
              <SwiperSlide key={item} className={styles.slides}>
                <div className={styles.slideImage}>
                  <Image src={item} alt="" fill layout="" sizes="auto" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> 
      </div>
    </div>
  );
};

export default EventModal;
