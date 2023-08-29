import React from 'react'
import Domains from '../components/home/Domains/Domains'
import HeroSection from '../components/home/HeroSection'

import AfterHero from '../components/home/AfterHero'

import Testimonials from '../components/home/Testimonials'

const HomePage = ({isMenuOpen}) => {
  return (
    <div className={`${isMenuOpen ? 'pt-96' : 'pt-[80px]'} flex   overflow-x-hidden flex-col items-center justify-center xl:gap-0 gap-20`}>
      <HeroSection />
      <AfterHero />
        <Domains />
       <Testimonials />
        
    </div>
  )
}

export default HomePage