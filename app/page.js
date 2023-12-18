import Link from "next/link";
import Sponsor from "./components/Sponsor/Sponsor";

const Home = () => {
  return (
    <main>
      <h1>This is home page</h1>
      <Link href="/about">About</Link>
      <Sponsor />
    </main>
  );
};

export default Home;
