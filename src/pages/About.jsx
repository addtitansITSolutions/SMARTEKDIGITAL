import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/about/AboutHero";
import WhatDrivesUs from "../sections/about/WhatDrivesUs";
import HowWeWork from "../sections/about/HowWeWork";

const About = () => {
  return (
    <>
      <Navbar forceScrolled={true}/>

      <main>
        <AboutHero />
        <WhatDrivesUs />
        <HowWeWork />
        {/* More About sections will come here */}
      </main>
      <Footer />
    </>
  );
};

export default About;