import Link from "next/link";
import Social from "./components/SocialHandles/Social";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.home}>
      <h1>This is home page</h1>
      <Link href="/about">About</Link>
      <Social />
    </main>
  );
};

export default Home;
