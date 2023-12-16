import Link from "next/link";
import Social from "./components/SocialHandles/Social";
import styles from "./Home.module.scss";
import Background from "./components/Backgroung/Background";
import Loki from "./components/HeroText/Loki";
import River from "./components/River/River";
const Home = () => {
  return (
    <main className={styles.home}>
      <Background>
        <Loki/>
        <River/>
      </Background>
    </main>
  );
};

export default Home;
