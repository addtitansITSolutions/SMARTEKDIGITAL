import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutIntro from "../sections/home/AboutIntro";
import Hero from "../sections/home/Hero";
import Services from "../sections/home/Services";
import WhyChooseUs from "../sections/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;