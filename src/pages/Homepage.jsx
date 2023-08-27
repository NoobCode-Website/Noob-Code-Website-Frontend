import React from 'react';
import HeroSection from '../components/HeroSection';
import AfterHero from '../components/AfterHero';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
function Homepage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <br/>
      <AfterHero/>
      <Testimonials/>
    </div>
  )
}

export default Homepage
