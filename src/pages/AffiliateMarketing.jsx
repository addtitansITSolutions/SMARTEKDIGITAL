import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import AffiliateMarketingHero from '../sections/AffiliateMarketing/AffiliateMarketingHero'
import AffiliateMarketingIntro from '../sections/AffiliateMarketing/AffiliateMarketingIntro'
import AffiliateMarketingNetwork from '../sections/AffiliateMarketing/AffiliateMarketingNetwork'
import AffiliateMarketingApproach from '../sections/AffiliateMarketing/AffiliateMarketingApproach'
import AffiliateMarketingResults from '../sections/AffiliateMarketing/AffiliateMarketingResults'


const AffiliateMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <AffiliateMarketingHero />
        <AffiliateMarketingIntro />
        <AffiliateMarketingNetwork />
        <AffiliateMarketingApproach />
        <AffiliateMarketingResults />
      </main>
      <Footer />
    </>
  )
}

export default AffiliateMarketing
