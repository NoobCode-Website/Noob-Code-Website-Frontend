import React from 'react';
import logo from '../assets/logo.jpeg'
import {motion} from 'framer-motion'
function HeroSection() {

  const logoStyle={
    height:"15rem",
    width:"15rem",
    borderRadius:"60rem",
    marginLeft:"4rem",
    marginRight:"2rem",
    border: "1px solid blue"
  }
  return (
    <div>
      <section 
      className="hero">
      <motion.img src={logo} alt="noobcode logo" 
      animate={{rotate:[ 0,300,300,0],x:[0,20,20,0,-100,-100,0]}}
      transition={{repeat:3,duration:3}}
       className='rounded-full border-2 border-blue-500'style={logoStyle} />
       <div className="hero-text">
       <h1>WELCOME TO NOOBCODE!</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam, aspernatur harum accusantium vero temporibus distinctio molestias omnis assumenda pariatur, quidem illo ea. Quaerat nihil quibusdam porro aliquam ipsa?</h2>
        </div>
    </section>
    </div>
  )
}

export default HeroSection
