import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PerformanceMarketingHero from '../sections/performanceMarketing/PerformanceMarketingHero'
import PerformanceMarketingIntro from '../sections/performanceMarketing/PerformanceMarketingIntro'
import PerformanceMarketingChannels from '../sections/performanceMarketing/PerformanceMarketingChannels'
import PerformanceMarketingApproach from '../sections/performanceMarketing/PerformanceMarketingApproach'
import PerformanceMarketingCTA from '../sections/performanceMarketing/PerformanceMarketingCTA'

const PerformanceMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <PerformanceMarketingHero />
        <PerformanceMarketingIntro />
        <PerformanceMarketingChannels />
        <PerformanceMarketingApproach />
        <PerformanceMarketingCTA />
      </main>
      <Footer />
    </>
  )
}

export default PerformanceMarketing
