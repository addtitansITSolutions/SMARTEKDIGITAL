import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import DigitalMarketing from './pages/DigitalMarketing'
import PerformanceMarketing from './pages/PerformanceMarketing'
// import Seo from './pages/Seo'
import AffiliateMarketing from './pages/AffiliateMarketing'
import EcommerceMarketing from './pages/EcommerceMarketing'
import ScrollToTop from './components/ScrollToTop'
import MobilePerformanceMarketing from './pages/MobilePerformanceMarketing'



const App = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/services/performance-marketing' element={<PerformanceMarketing />} />
          <Route path='/services/affiliate-marketing' element={<AffiliateMarketing />} />
          <Route path='/services/ecommerce-marketing' element={<EcommerceMarketing />} />
          <Route path="/services/mobile-performance-marketing" element={<MobilePerformanceMarketing />} />
          {/* <Route path='/services/seo' element={<Seo />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App

