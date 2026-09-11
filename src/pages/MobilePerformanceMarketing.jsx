import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MobilePerformanceMarketingHero from '../sections/mobilePerformanceMarketing/MobilePerformanceMarketingHero'
import MobilePerformanceMarketingIntro from '../sections/mobilePerformanceMarketing/MobilePerformanceMarketingIntro'
import MobilePerformanceMarketingJourney from '../sections/mobilePerformanceMarketing/MobilePerformanceMarketingJourney'
import MobilePerformanceMarketingAcquisition from '../sections/mobilePerformanceMarketing/MobilePerformanceMarketingAcquisition'
import MobilePerformanceMarketingResults from '../sections/mobilePerformanceMarketing/MobilePerformanceMarketingResults'
import MobilePerformanceMarketingCTA from '../sections/mobilePerformanceMarketing/MobilePerformanceMarketingCTA'

const MobilePerformanceMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <MobilePerformanceMarketingHero />
        <MobilePerformanceMarketingIntro />
        <MobilePerformanceMarketingJourney />
        <MobilePerformanceMarketingAcquisition />
        <MobilePerformanceMarketingResults />
        <MobilePerformanceMarketingCTA />
      </main>
      <Footer />
    </>
  )
}

export default MobilePerformanceMarketing