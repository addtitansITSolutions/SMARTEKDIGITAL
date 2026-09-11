import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import EcommerceMarketingHero from '../sections/ecommercemarketing/EcommerceMarketingHero'
import EcommerceMarketingIntro from '../sections/ecommercemarketing/EcommerceMarketingIntro'
import EcommerceMarketingJourney from '../sections/ecommercemarketing/EcommerceMarketingJourney'
import EcommerceMarketingGrowth from '../sections/ecommercemarketing/EcommerceMarketingGrowth'


const EcommerceMarketing = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <EcommerceMarketingHero />
        <EcommerceMarketingIntro />
        <EcommerceMarketingJourney />
        <EcommerceMarketingGrowth />
      </main>
      <Footer />
    </>
  )
}

export default EcommerceMarketing