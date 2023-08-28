import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <div id="works" className="mx-auto mt-16 sm:mt-10 p-4">
      <div className="bg-yellow-400 h-auto sm:h-[250px] flex flex-col gap-8 items-center justify-between p-6 sm:p-4">
        <h2
          data-aos="zoom-out"
          className="font-bold text-3xl sm:text-2xl md:text-4xl lg:text-5xl"
        >
          Let's Connect 
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://discord.com/invite/PnTpVszb2V"
            className="box font-medium text-white flex items-center justify-center flex-col p-4 sm:p-2"
          >
            <FaDiscord className="text-black text-2xl sm:text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-xs sm:text-sm">Discord</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://chat.whatsapp.com/GYL89VSeSXgLppyy6U6NVZ"
            className="box font-medium text-white flex items-center justify-center flex-col p-4 sm:p-2"
          >
            <IoLogoWhatsapp className="text-black text-2xl sm:text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-xs sm:text-sm">WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.instagram.com/_noobcode_/?igshid=MzRlODBiNWFlZA%3D%3D"
            className="box font-medium text-white flex items-center justify-center flex-col p-4 sm:p-2"
          >
            <RiInstagramFill className="text-black text-2xl sm:text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-xs sm:text-sm">Instagram</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1600"
            href="https://linktr.ee/noobcode"
            className="box font-medium text-white flex items-center justify-center flex-col p-4 sm:p-2"
          >
            <SiLinktree className="text-black text-2xl sm:text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-xs sm:text-sm">Linktree</p>
          </a>
        </div>
        <div className="text-center text-xs sm:text-sm">
          | Copyright &copy; <span className="text-gray-700">2023 NoobCode</span> All rights reserved |
        </div>
      </div>
    </div>
  );
};

export default Footer;
