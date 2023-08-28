import React from 'react'
import Domains from '../components/home/Domains/Domains'
import HeroSection from '../components/home/HeroSection'

import AfterHero from '../components/home/AfterHero'

import Testimonials from '../components/home/Testimonials'

const HomePage = ({isMenuOpen}) => {
  return (
    <div className={`${isMenuOpen ? 'pt-96' : ''} flex flex-col items-center`}>
      <HeroSection />
      <AfterHero />
        <Domains />
       <Testimonials />
        
    </div>
  )
}

export default HomePage