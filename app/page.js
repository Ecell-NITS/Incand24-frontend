import styles from "./Home.module.scss";
import Hero from "./components/hero/hero";

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
    </main>
  );
};

export default Home;
