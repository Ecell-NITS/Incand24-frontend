// Footer Sec code by Suraj Verma
import React from "react";
import styles from "./Footer.module.css";

export const metadata = {
  title: "Footer",
  description: "Footer",
};

const Footer = () => {

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.bglogo}><img src="./Group 5226.png" alt="" /></div>
        <div className={styles.top}>
          <div className={styles.top1}>
            <div className={styles.top_tittle}>
              <a href="#">BROCHURE</a>
            </div>
            <p className={styles.p} alt='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className={styles.top2}>
            <div className={styles.top_tittle}>
              <a href="#">CONTACT US</a>
            </div>
            <a href="mailto:#" alt="incand@gmail.com" className={styles.mail}>incand@gmail.com</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom1}>
            <a href="#" className={styles.icons} >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className={styles.insta} fill="none">
                <g clip-path="url(#clip0_939_620)">
                  <path d="M24 0C17.487 0 16.668 0.03 14.109 0.144C11.55 0.264 9.807 0.666 8.28 1.26C6.67828 1.86246 5.22747 2.80748 4.029 4.029C2.80823 5.22809 1.86332 6.67872 1.26 8.28C0.666 9.804 0.261 11.55 0.144 14.1C0.03 16.665 0 17.481 0 24.003C0 30.519 0.03 31.335 0.144 33.894C0.264 36.45 0.666 38.193 1.26 39.72C1.875 41.298 2.694 42.636 4.029 43.971C5.361 45.306 6.699 46.128 8.277 46.74C9.807 47.334 11.547 47.739 14.103 47.856C16.665 47.97 17.481 48 24 48C30.519 48 31.332 47.97 33.894 47.856C36.447 47.736 38.196 47.334 39.723 46.74C41.3237 46.1372 42.7735 45.1922 43.971 43.971C45.306 42.636 46.125 41.298 46.74 39.72C47.331 38.193 47.736 36.45 47.856 33.894C47.97 31.335 48 30.519 48 24C48 17.481 47.97 16.665 47.856 14.103C47.736 11.55 47.331 9.804 46.74 8.28C46.1368 6.67868 45.1918 5.22803 43.971 4.029C42.7729 2.80703 41.322 1.86194 39.72 1.26C38.19 0.666 36.444 0.261 33.891 0.144C31.329 0.03 30.516 0 23.994 0H24.003H24ZM21.849 4.326H24.003C30.411 4.326 31.17 4.347 33.699 4.464C36.039 4.569 37.311 4.962 38.157 5.289C39.276 5.724 40.077 6.246 40.917 7.086C41.757 7.926 42.276 8.724 42.711 9.846C43.041 10.689 43.431 11.961 43.536 14.301C43.653 16.83 43.677 17.589 43.677 23.994C43.677 30.399 43.653 31.161 43.536 33.69C43.431 36.03 43.038 37.299 42.711 38.145C42.3262 39.1871 41.7121 40.1293 40.914 40.902C40.074 41.742 39.276 42.261 38.154 42.696C37.314 43.026 36.042 43.416 33.699 43.524C31.17 43.638 30.411 43.665 24.003 43.665C17.595 43.665 16.833 43.638 14.304 43.524C11.964 43.416 10.695 43.026 9.849 42.696C8.8065 42.3118 7.86338 41.6987 7.089 40.902C6.29025 40.1281 5.67517 39.185 5.289 38.142C4.962 37.299 4.569 36.027 4.464 33.687C4.35 31.158 4.326 30.399 4.326 23.988C4.326 17.58 4.35 16.824 4.464 14.295C4.572 11.955 4.962 10.683 5.292 9.837C5.727 8.718 6.249 7.917 7.089 7.077C7.929 6.237 8.727 5.718 9.849 5.283C10.695 4.953 11.964 4.563 14.304 4.455C16.518 4.353 17.376 4.323 21.849 4.32V4.326ZM36.813 8.31C36.4348 8.31 36.0603 8.38449 35.7109 8.52923C35.3615 8.67396 35.044 8.8861 34.7765 9.15353C34.5091 9.42097 34.297 9.73845 34.1522 10.0879C34.0075 10.4373 33.933 10.8118 33.933 11.19C33.933 11.5682 34.0075 11.9427 34.1522 12.2921C34.297 12.6415 34.5091 12.959 34.7765 13.2265C35.044 13.4939 35.3615 13.706 35.7109 13.8508C36.0603 13.9955 36.4348 14.07 36.813 14.07C37.5768 14.07 38.3094 13.7666 38.8495 13.2265C39.3896 12.6864 39.693 11.9538 39.693 11.19C39.693 10.4262 39.3896 9.69364 38.8495 9.15353C38.3094 8.61343 37.5768 8.31 36.813 8.31ZM24.003 11.676C22.3682 11.6505 20.7447 11.9505 19.2269 12.5584C17.7092 13.1664 16.3275 14.0702 15.1625 15.2173C13.9974 16.3643 13.0721 17.7317 12.4405 19.2398C11.809 20.7479 11.4837 22.3665 11.4837 24.0015C11.4837 25.6365 11.809 27.2551 12.4405 28.7632C13.0721 30.2713 13.9974 31.6387 15.1625 32.7857C16.3275 33.9328 17.7092 34.8366 19.2269 35.4446C20.7447 36.0525 22.3682 36.3525 24.003 36.327C27.2386 36.2765 30.3246 34.9557 32.5949 32.6497C34.8652 30.3438 36.1377 27.2375 36.1377 24.0015C36.1377 20.7655 34.8652 17.6592 32.5949 15.3532C30.3246 13.0473 27.2386 11.7265 24.003 11.676ZM24.003 15.999C26.125 15.999 28.1601 16.842 29.6606 18.3424C31.161 19.8429 32.004 21.878 32.004 24C32.004 26.122 31.161 28.1571 29.6606 29.6576C28.1601 31.158 26.125 32.001 24.003 32.001C21.881 32.001 19.8459 31.158 18.3454 29.6576C16.845 28.1571 16.002 26.122 16.002 24C16.002 21.878 16.845 19.8429 18.3454 18.3424C19.8459 16.842 21.881 15.999 24.003 15.999Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_939_620">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg></a>
            <a href="#" className={styles.icons} >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className={styles.fb} fill="none">
                <g clip-path="url(#clip0_939_628)">
                  <path d="M0 0V48H48V0H0ZM34.5293 6.26368C34.8779 6.25628 35.2409 6.2676 35.6162 6.29296C36.9952 6.29484 38.4355 6.41916 39.8642 6.54492L39.709 12.2285H35.8711C34.0716 12.1887 33.4217 12.8874 33.3633 14.918V19.3828H39.8642L39.6064 25.4707H33.3633V42.4189H27.0205V25.4707H22.6172V19.3828H27.0205V14.1562C27.0205 10.3879 28.6137 7.98928 31.752 6.77344C32.5579 6.45632 33.4835 6.28588 34.5293 6.26368Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_939_628">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg></a>
            <a href="#" className={styles.icons} >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className={styles.lkdin} fill="none">
                <path d="M9.4021 0C4.23168 0 0 4.23158 0 9.4021V38.5785C0 43.7489 4.23158 47.979 9.4021 47.979H38.5785C43.7489 47.979 47.979 43.7489 47.979 38.5785V9.4021C47.979 4.23168 43.7489 0 38.5785 0H9.4021ZM11.7669 7.9175C14.246 7.9175 15.773 9.54499 15.8201 11.6843C15.8201 13.7764 14.2459 15.4496 11.7189 15.4496H11.6724C9.24048 15.4496 7.66862 13.7765 7.66862 11.6843C7.66862 9.54504 9.28805 7.9175 11.7668 7.9175H11.7669ZM33.1307 17.9164C37.8985 17.9164 41.4726 21.0326 41.4726 27.7293V40.2309H34.2269V28.5675C34.2269 25.6366 33.1782 23.637 30.556 23.637C28.5542 23.637 27.3611 24.9848 26.8372 26.2867C26.6458 26.7525 26.5988 27.4031 26.5988 28.0547V40.2309H19.353C19.353 40.2309 19.4481 20.4734 19.353 18.4277H26.6003V21.5152C27.5631 20.0296 29.2855 17.9163 33.1307 17.9163V17.9164ZM8.09602 18.4293H15.3418V40.231H8.09602V18.4293Z" fill="white" />
              </svg></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="276" height="6" viewBox="0 0 276 6" fill="none" className={styles.bar}>
              <path d="M2.98535 3L273.015 3" stroke="url(#paint0_linear_957_1213)" stroke-width="5" stroke-linecap="round" />
              <defs>
                <linearGradient id="paint0_linear_957_1213" x1="142.527" y1="3.72368" x2="171.433" y2="-59.6226" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#73CDDB" />
                  <stop offset="1" stop-color="#333EF2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.bottom2}>
            <div className={styles.bottom2_1}>NIT SILCHAR
              <svg xmlns="http://www.w3.org/2000/svg" width="276" height="6" viewBox="0 0 276 6" fill="none" className={styles.bar2}>
                <path d="M2.98535 3L273.015 3" stroke="url(#paint0_linear_957_1213)" stroke-width="5" stroke-linecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_957_1213" x1="142.527" y1="3.72368" x2="171.433" y2="-59.6226" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#73CDDB" />
                    <stop offset="1" stop-color="#333EF2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.bottom2_2}>NIT Road, Fakirtilla, Silchar, Assam, 788010</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
