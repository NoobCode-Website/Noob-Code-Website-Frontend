// Header.js
import React from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export const Links = [
  { name: "HOME", link: "/" },
  { name: "TEAM", link: "/team" },
  { name: "EVENTS", link: "/events/sessions" },
  { name: "RESOURCES", link: "/resources" },
  { name: "CONTACT", link: "/contacts" },
  
];
 const Header = ({ isMenuOpen, toggleMenu }) => {
 

  return (
    <div className={`shadow-md w-full 2xl:fixed top-0 left-0  z-20 ${isMenuOpen ? 'relative' : ''}`}>
      <div className='md:flex items-center justify-around bg-yellow-400 py-4 md:px-10 px-7'>

        <div className='font-bold text-2xl cursor-pointer flex items-center gap-2  '>
          
          <img src='https://i.postimg.cc/VL6FtfjK/20230215-095834-0000.png' className='w-14 h-14  text-blue-600 rounded-full' alt='NC Logo'/>
          <div className='flex flex-col pr-4 xl:flex-row'>
            <span>Noob</span>
            <span>Code</span>
          </div>
        </div>
        
        <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-10 h-10'>
          {isMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-400 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 scroll-smooth ease-in ${
            isMenuOpen ? 'top-20' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <Link to={link.link}><li className='md:ml-8 md:my-0 my-7 font-semibold xl:text-xl' key={link.name}>
              <h1 className='text-black hover:text-blue-600 duration-500'>
                {link.name}
              </h1>
            </li></Link>
          ))}
          <Link to="/joinus"><button className='btn bg-blue-600 text-white md:ml-8  font-semibold px-3 py-2 rounded duration-500 md:static'>
            Become Ambassador
          </button></Link>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
