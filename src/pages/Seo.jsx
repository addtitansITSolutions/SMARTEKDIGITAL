import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import SEOHero from '../sections/seo/SEOHero'
import SEOIntro from '../sections/seo/SEOIntro'
import SEOFoundations from '../sections/seo/SEOFoundations'
import SEOProcess from '../sections/seo/SEOProcess'
import SEOResults from '../sections/seo/SEOResults'

const Seo = () => {
  return (
    <>
      <Navbar forceScrolled/>
      <main>
        <SEOHero />
        <SEOIntro />
        <SEOFoundations />
        <SEOProcess />
        <SEOResults />
      </main>
      <Footer />
    </>
  )
}

export default Seo
