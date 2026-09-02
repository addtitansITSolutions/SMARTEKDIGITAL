import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutIntro from "../sections/home/AboutIntro";
import Hero from "../sections/home/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
      </main>
      <Footer />
    </>
  );
};

export default Home;