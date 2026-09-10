import React from 'react'
import Navbar from '../components/Navbar'
import DigitalMarketingHero from '../sections/digitalMarketing/DigitalMarketingHero'
import Footer from "../components/Footer"
import DigitalMarketingIntro from '../sections/digitalMarketing/DigitalMarketingIntro'
import DigitalMarketingCapabilities from '../sections/digitalMarketing/DigitalMarketingCapabilities'
import DigitalMarketingCTA from '../sections/digitalMarketing/DigitalMarketingCTA'

const DigitalMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <DigitalMarketingHero />
        <DigitalMarketingIntro />
        <DigitalMarketingCapabilities />
        <DigitalMarketingCTA />
      </main>
      <Footer />
    </>
  )
}

export default DigitalMarketing
