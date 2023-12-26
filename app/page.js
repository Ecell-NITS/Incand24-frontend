import Sponsor from "./components/Sponsor/Sponsor";
import Social from "./components/SocialHandles/Social";
import styles from "./Home.module.scss";
import About from "./components/about/About";

const Home = () => {
  return (
    <main className={styles.home}>
      <About />
      <Sponsor />
      <Social />
    </main>
  );
};

export default Home;
