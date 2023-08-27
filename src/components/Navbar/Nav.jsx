// Header.js
import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = ({ isMenuOpen, toggleMenu }) => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "EVENTS", link: "/" },
    { name: "RESOURCES", link: "/" },
    { name: "CONTACT", link: "/" },
    
  ];

  return (
    <div className={`shadow-md w-full top-0 left-0 z-20 ${isMenuOpen ? 'relative' : ''}`}>
      <div className='md:flex items-center justify-between bg-yellow-400 py-4 md:px-10 px-7'>

        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          
          <img src='https://i.postimg.cc/VL6FtfjK/20230215-095834-0000.png' className='w-7 h-7 text-blue-600 rounded-full' alt='NC Logo'/>
          <span>NoobCode</span>
        </div>
        
        <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {isMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-400 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isMenuOpen ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
              <a href={link.link} className='text-black hover:text-blue-600 duration-500'>
                {link.name}
              </a>
            </li>
          ))}
          <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
            Become Ambassador !
          </button>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
