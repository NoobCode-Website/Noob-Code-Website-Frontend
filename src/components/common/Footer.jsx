import React from "react";
import logo from "../../assets/logo.jpg";
import { FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import { Links } from "./Nav";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <>
    <div id="works" className="mx-auto flex flex-col xl:flex-row justify-evenly bg-black bg-opacity-70 items-center  mt-16 sm:mt-10 p-4">

<div className="flex flex-col items-center gap-5">
  <img src={logo} className="w-[120px] h-[120px] rounded-full" alt="" />
  <div className="flex flex-col items-center gap-2">
  
         
          <a className="bg-blue-400 text-white px-3 py-2 rounded-full hover:text-blue-600 hover:bg-white font-semibold text-lg " href="mailto:noobcode2023@gmail.com"> Send email</a>
         
         
        </div>
</div>
      <div className=" h-auto sm:h-[250px] flex flex-col justify-around gap-5 items-center  p-6 sm:p-4">
        <h2
          data-aos="zoom-out"
          className="font-bold text-2xl text-[#0addf0] sm:text-2xl md:text-4xl lg:text-5xl"
        >
          Let's Connect 
        </h2>
        <div className="flex flex-wrap justify-center flex-row gap-4 2xl:gap-4 sm:gap-8">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://discord.com/invite/PnTpVszb2V"
            className="box font-medium text-white flex items-center justify-center flex-col py-4 sm:p-2"
          >
            <FaDiscord className="text-white h-[40px] w-[40px] rounded-full px-1 py-1 text-2xl sm:text-3xl hover:scale-125 cursor-pointer bg-violet-500 " />
            <p className="text-xs sm:text-lg text-violet-400">Discord</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://chat.whatsapp.com/GYL89VSeSXgLppyy6U6NVZ"
            className="box font-medium text-white  flex items-center justify-center flex-col py-4 sm:p-2"
          >
            <IoLogoWhatsapp className=" text-2xl sm:text-3xl hover:scale-125 cursor-pointer h-[40px] w-[40px] rounded-full px-1 py-1 bg-white text-green-400 border-2 border-green-400" />
            <p className="text-xs sm:text-lg text-green-400">WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.instagram.com/_noobcode_/?igshid=MzRlODBiNWFlZA%3D%3D"
            className="box font-medium text-white flex items-center justify-center flex-col py-4 sm:p-2"
          >
            <RiInstagramFill className=" text-2xl sm:text-3xl hover:scale-125 cursor-pointer h-[40px] w-[40px] rounded-full px-1 py-1 bg-white text-pink-600 border-2 border-pink-400" />
            <p className="text-xs sm:text-lg text-pink-600">Instagram</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1600"
            href="https://linktr.ee/noobcode"
            className="box font-medium text-white flex items-center justify-center flex-col py-4 sm:p-2"
          >
            <SiLinktree className="  text-2xl sm:text-3xl hover:scale-125 cursor-pointer h-[40px] w-[40px] rounded-full px-1 py-1 bg-green-600 text-black border-2 border-black" />
            <p className="text-xs sm:text-lg text-green-600">Linktree</p>
          </a>
        </div>

        
      
        
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl text-[#0addf0] font-bold">Quick Links</h1>
        <div>
          <ul className="grid grid-cols-2 text-center gap-5">
           {
              Links.map((link , index)=>(
               <Link to={link.link}><li key={index} className="text-xl font-semibold text-blue-600 hover:text-blue-400 cursor-pointer">{link.name}</li></Link> 
              ))
           }
          </ul>
        </div>
      </div>
    </div>
    
   
    
    </>
  );
};

export default Footer;
