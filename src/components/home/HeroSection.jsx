import React from 'react'
import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'
import { TypeAnimation } from "react-type-animation";
import logo from '../../assets/logo.jpg'
import {motion} from 'framer-motion'
const HeroSection = () => {
    const logoStyle={
        height:"15rem",
        width:"15rem",
        borderRadius:"60rem",
        marginLeft:"4rem",
        marginRight:"2rem",
        border: "1px solid blue"
      }
  return (
    <div className="flex flex-row justify-evenly items-center mt-[30px] mb-[50px] h-[750px]">
      <div className="flex flex-col gap-8 w-[720px]">
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
          style={{ fontSize: "2.25rem", display: "inline-block" }}
          className="font-bold text-4xl text-[#0addf0]"
          repeat={Infinity}
        />
        {/* <h1 className=" font-bold text-4xl text-[#0addf0]">
          Unstop Igniters Club of RCCIIT
        </h1> */}

        <p className="text-white  font-semibold text-xl w-[500px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          fugit esse debitis laudantium hic unde sequi provident, facere rem
          excepturi autem asperiores beatae repellendus. Amet eos officia modi
          quas esse. Iusto, ab eligendi nostrum veniam quidem corporis quibusdam
          perspiciatis velit.
          <div className="flex flex-row justify-center mt-10 space-x-10 items-center">
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
        <motion.img src={logo} alt="noobcode logo" 
      animate={{rotate:[ 0,300,300,0],x:[0,40,20,0,-80,-80,0]}}
      transition={{repeat:Infinity,duration:3}}
       className='rounded-full border-2 border-blue-500'style={logoStyle} />
      </div>
    </div>
  )
}

export default HeroSection