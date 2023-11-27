import React from 'react'
import { BsDiscord,  BsLinkedin , BsInstagram } from 'react-icons/bs'
import { TypeAnimation } from "react-type-animation";
import logo from '../../assets/logo.jpg'

const HeroSection = () => {
    const logoStyle={  
        borderRadius:"60rem",
        marginLeft:"2rem",
        marginRight:"2rem",
        border: "1px solid blue"
      }
  return (
    <div className="hero flex flex-col-reverse flex-wrap 2xl:flex-row w-screen -mt-16  xl:justify-evenly 2xl:justify-center items-center gap-12 2xl:gap-5  xl:mt-[100px]  xl:h-[550px] ">
      <div className="flex  flex-col items-center gap-8 w-[300px] md:w-[500px] text-center xl:w-[800px]">
        <div className='h-[50px]'>
        <TypeAnimation
          sequence={[
            'WELCOME TO NOOBCODE COMMUNITY',
            1000,
            'WHERE YOUR CODING JOURNEY BEGINS',
            1000,
          ]}
          wrapper="span"
          speed={200}
          style={{display: "inline-block",fontFamily:"Josefin Sans"}}
          className="font-bold  text-2xl xl:text-3xl text-[#0addf0]"
          repeat={Infinity}
        />
        </div>
        
        <div className='mt-5'>
        <p className="text-white  text-center text-xl w-[300px] xl:w-[500px]" >
        <span className='font-bold'>NoobCode </span> is a Community which helps a Newbie (aka NoobCoder) to become a Pro. We provide curated Resources about various Domains, host Interactive Sessions & Conduct Challenges to Ignite the Developer in You! Join us for an Ultimate Journey !
          <div className="flex  flex-col gap-5 xl:gap-8   xl:flex-row  justify-center  mt-10  items-center">
            <a href='https://chat.whatsapp.com/GYL89VSeSXgLppyy6U6NVZ' rel='noreferrer' target='_blank' className="xl:px-4 xl:py-4 p-2 border-2 border-yellow-300  rounded-full bg-[#1a8fdd] font-bold text-lg xl:text-xl text-white hover:bg-white hover:text-[#1a8fdd]">
              Join Us
            </a>
            <div className='flex flex-row items-center gap-5 xl:gap-8'>
            <a href='https://discord.com/invite/PnTpVszb2V' rel='noreferrer' target='_blank' className="px-4 py-2 rounded-full bg-[#6a45e4] font-bold text-xl text-white hover:bg-white hover:text-[#6a45e4] ">
              <BsDiscord className="h-[25px] w-[25px] 2xl:h-[40px] 2xl:w-[40px]" />
            </a>
            <a href='https://www.instagram.com/_noobcode_/' rel='noreferrer' target='_blank' className="px-4 py-2 rounded-full bg-white font-bold text-xl text-[#ab3ad7] hover:bg-[#ab3ad7] hover:text-white">
              <BsInstagram className="h-[25px] w-[25px] 2xl:h-[40px] 2xl:w-[40px]" />
            </a>
            <a href='https://www.linkedin.com/company/90744227/' rel='noreferrer' target='_blank' className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]">
              <BsLinkedin className="h-[25px] w-[25px] 2xl:h-[40px] 2xl:w-[40px]" />
            </a>
            </div>
           
          </div>
        </p>
        </div>
       
      </div>

      <div>
        <div className='flex flex-row items-center justify-center'>
        <img src={logo} alt="noobcode logo" 
       className='rounded-full  mr-0.5 border-2 mt-[100px] xl:mt-0 border-blue-500 h-[10rem] w-[10rem] md:w-[12rem] md:h-[12rem] xl:h-[15rem] xl:w-[15rem] ' style={logoStyle}  />
      </div>
      </div>
    </div>
  )
}

export default HeroSection