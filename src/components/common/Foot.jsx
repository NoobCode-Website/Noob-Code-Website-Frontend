import React from 'react'
import logo from '../../assets/logo.jpg'
import { Links } from "./Nav";
import { Link } from "react-router-dom";
import { SiLinktree } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa';
const Foot = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-1">
        <h1 className=" xl:text-lg text-white tracking-wider">
          © NoobCode 2023 | All Rights Reserved .
        </h1>
      </div>
    </>
  )
}

export default Foot