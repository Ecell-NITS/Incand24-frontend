import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>This is home page</h1>
      <Link href="/about">About</Link>
    </main>
  );
};

export default Home;
