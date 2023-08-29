import React from 'react'
import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'
import { TypeAnimation } from "react-type-animation";
import logo from '../../assets/logo.jpg'
import {motion} from 'framer-motion'
const HeroSection = () => {
    const logoStyle={
       
        borderRadius:"60rem",
        marginLeft:"4rem",
        marginRight:"2rem",
        border: "1px solid blue"
      }
  return (
    <div className="hero flex flex-col-reverse flex-wrap  2xl:flex-row w-screen  xl:justify-evenly items-center gap-20 mt-0 xl:mt-[100px]  xl:h-[550px] ">
      <div className="flex  flex-col items-center gap-8 w-[280px] md:w-[500px] md:text-center  xl:w-[720px]">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "NoobCode : Your Coding Journey Begins !",
            1000,
            "A Community of Coders",
            1000,
          ]}
          wrapper="span"
          speed={200}
          style={{  display: "inline-block" }}
          className="font-bold text-2xl xl:text-4xl text-[#0addf0]"
          repeat={Infinity}
        />
        {/* <h1 className=" font-bold text-4xl text-[#0addf0]">
          Unstop Igniters Club of RCCIIT
        </h1> */}

        <p className="text-white md:text-center font-semibold text-xl w-[280px] xl:w-[500px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          fugit esse debitis laudantium hic unde sequi provident, facere rem
          excepturi autem asperiores beatae repellendus. Amet eos officia modi
          quas esse. Iusto, ab eligendi nostrum veniam quidem corporis quibusdam
          perspiciatis velit.
          <div className="flex flex-col gap-10  xl:flex-row  justify-center  mt-10  items-center">
            <button className="px-4 py-4 rounded-full bg-[#1a8fdd] font-bold text-xl text-white hover:bg-white hover:text-[#1a8fdd]">
              Join Us
            </button>
            <button className="px-4 py-2 rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
              <BsDiscord className="h-[40px] w-[40px]" />
            </button>
            <button className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]">
              <BsGithub className="h-[40px] w-[40px]" />
            </button>
            <button className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
              <BsLinkedin className="h-[40px] w-[40px]" />
            </button>
          </div>
        </p>
      </div>

      <div>
        {/* <img className="w-[300px] h-[300px] rounded-full" src={logo} alt="" /> */}
        <div>
        {/* <img className="w-[300px] h-[300px] rounded-full" src={logo} alt="" /> */}
        <motion.img src={logo} alt="noobcode logo" 
      animate={{rotate:[ 0,300,300,0],x:[0,40,20,0,-80,-80,0]}}
      transition={{repeat:Infinity,duration:3}}
       className='rounded-full border-2 mt-[150px] xl:mt-0 border-blue-500 h-[10rem] w-[10rem] md:w-[12rem] md:h-[12rem] xl:h-[15rem] xl:w-[15rem] ' style={logoStyle}  />
      </div>
      </div>
    </div>
  )
}

export default HeroSection