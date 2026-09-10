import React from 'react'
import Navbar from '../components/Navbar'
import DigitalMarketingHero from '../sections/digitalMarketing/DigitalMarketingHero'
import Footer from "../components/Footer"

const DigitalMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <DigitalMarketingHero />
      </main>
      <Footer />
    </>
  )
}

export default DigitalMarketing
