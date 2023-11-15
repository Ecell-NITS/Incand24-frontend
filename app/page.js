import Link from "next/link";
import Hero from "./components/Hero/hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Link href="/about">About</Link>
    </main>
  );
};

export default Home;
