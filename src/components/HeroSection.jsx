import React from 'react';
import logo from '../assets/logo.jpeg'
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
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
      className="hero flex mt-40 ml-10">
      <motion.img src={logo} alt="noobcode logo" 
      animate={{rotate:[ 0,300,300,0],x:[0,40,20,0,-80,-80,0]}}
      transition={{repeat:3,duration:3}}
       className='rounded-full border-2 border-blue-500'style={logoStyle} />
       <div className="hero-text">
       <TypeAnimation
        className='text-5xl-[#0000] md:text-4xl lg:text-4xl mt-20 ml-80'
        sequence={[
          'Welcome to Noobcode!',
          1000, 
          'Nice to see you! ',
          1000,
          'Welcome to Noobcode!',
          1000,
          'Nice to see you! ',
          1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '3em', display: 'inline-block',color:'antiquewhite',fontFamily:'Josefin Sans' }}
          repeat={Infinity}
        />
      <h2 className=' font-[Raleway] text-[#BFDAFF] pl-8 ml-4 text-lg md:text-xl lg:text-2xl mb-14 mr-10 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam, aspernatur harum accusantium vero temporibus distinctio molestias omnis assumenda pariatur, quidem illo ea. Quaerat nihil quibusdam porro aliquam ipsa?</h2>
        </div>
    </section>
    </div>
  )
}

export default HeroSection
