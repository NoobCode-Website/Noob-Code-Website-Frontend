// Header.js
import React, { useContext } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Links = [
  { name: "HOME", link: "/" },
  { name: "TEAM", link: "/team" },
  { name: "EVENTS", link: "/events/sessions" },
  { name: "RESOURCES", link: "/resources" },
  { name: "CONTACT", link: "/contacts" },
];
const Header = ({ isMenuOpen, toggleMenu }) => {
  const auth = useContext(AuthContext);
  const { logout, user } = auth;
  return (
    <div
      className={`shadow-md w-full 2xl:fixed top-0 left-0 z-20 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "relative" : ""
      }`}
    >
      <div className="md:flex items-center justify-around bg-black bg-opacity-50 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-2  ">
          <Link to="/">
            <img
              src="https://i.postimg.cc/VL6FtfjK/20230215-095834-0000.png"
              className="w-14 h-14  text-blue-600 rounded-full"
              alt="NC Logo"
            />
          </Link>
          <div className="flex flex-row pr-4 xl:flex-row text-white">
            <span>NoobCode</span>
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-10 h-10 text-white"
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-opacity-50 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 smooth-scroll ease-in-out ${
            isMenuOpen ? "bottom-[-400px]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <Link to={link.link} key={link.name}>
              <li className="md:ml-8 md:my-0 my-4 pt-2 font-semibold xl:text-xl">
                <h1
                  className="text-blue-200 p-2 cursor-pointer hover:bg-black hover:bg-opacity-10  hover:rounded transition border border-transparent 
                hover:border-blue-300 "
                >
                  {link.name}
                </h1>
              </li>
            </Link>
          ))}

          <Link to="/joinus">
            <button className="btn bg-gray-800 border-double border-4 border-sky-500 text-white md:ml-8  font-semibold px-3 py-2 rounded duration-500 md:static">
              Become Ambassador
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
