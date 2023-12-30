"use client";

import Sponsor from "./components/Sponsor/Sponsor";
import styles from "./Home.module.scss";
import About from "./components/about/About";
import Social from "./components/SocialHandles/Social";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <main className={styles.home}>
      <About />
      <Sponsor />
      <Footer />
      <Social />
    </main>
  );
};

export default Home;
