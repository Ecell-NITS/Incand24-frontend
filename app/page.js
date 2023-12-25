import styles from "./Home.module.scss";
import Hero from "./components/Hero/hero";

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <div className={styles.slider}></div>
    </main>
  );
};

export default Home;
