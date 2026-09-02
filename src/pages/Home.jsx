import Navbar from "../components/Navbar";
import Hero from "../sections/home/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Hero />
      </main>
    </>
  );
};

export default Home;