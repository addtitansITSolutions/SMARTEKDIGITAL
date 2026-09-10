import React from 'react'
import ServiceHero from '../sections/services/ServiceHero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesOverview from '../sections/services/ServicesOverview'

const Services = () => {
  return (
    <>
      <Navbar forceScrolled={true}/>

      <main>
        <ServiceHero />
        <ServicesOverview />
      </main>
      <Footer />
    </>
  )
}

export default Services
