// import React, { useEffect } from "react";
import Lottie from "lottie-react";
// import Image from 'next/image'
import { Allura } from "next/font/google";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Girl from "../../../../public/Girl";
import ani01 from "../../../../public/Animation01";
import ani02 from "../../../../public/Animation02";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./WhySponsors.module.scss";

const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
});

const WhySponsors = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 500 });
  // }, []);

  return (
    <div className={styles.body}>
      <p className={`${styles.qsn} ${allura.className}`}>
        {" "}
        {/* data-aos="fade-up" */}
        Why sponsor us?
      </p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className={styles.banner}>
            <div className={styles.lottie} id={styles.girlAni}>
              <Lottie animationData={Girl} loop />
            </div>
            <p className={styles.text}>
              PUBLICITY THROUGH SOCIAL MEDIA BANNERS, POSTERS, ETC.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.banner}>
            <div className={styles.lottie}>
              <Lottie animationData={ani01} loop />
            </div>
            <p className={styles.text}>
              YOUR NAME AND LOGO ON THE OFFICIAL WEBSITE OF INCANDESCENCE
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.banner}>
            <div className={styles.lottie}>
              <Lottie animationData={ani02} loop />
            </div>
            <p className={styles.text}>
              YOUR NAME AND LOGO ON THE OFFICIAL WEBSITE OF INCANDESCENCE
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WhySponsors;
