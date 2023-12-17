import styles from "./Home.module.scss";
import Hero from "./components/Backgroung/Hero_Section/Hero";
const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
    </main>
  );
};

export default Home;
