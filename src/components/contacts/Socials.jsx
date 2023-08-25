import React from "react";

const Socials = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center gap-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-widest hover:scale-x-110 hover:text-blue-400 cursor-pointer duration-500">
            How to Reach Us :{" "}
          </h1>
        </div>
        <div className="flex flex-row items-center gap-10"> 
          <div>
          <a
            href="https://www.linkedin.com/in//"
            target="blank"
          >
            <img
              alt="LinkedIn"
              src="https://img.shields.io/badge/LinkedIn-100000?style=for-the-badge&logo=LinkedIn&logoColor=white&labelColor=000000&color=0072b1"
              className="w-[200px]"
            />
          </a>
          </div>
          <div>
          <a href="https://www.facebook.com/TheSoumyarajBag/" target="blank">
            <img
              alt="Facebook"
              src="https://img.shields.io/badge/Facebook-100000?style=for-the-badge&logo=Facebook&logoColor=white&labelColor=black&color=000080"
              className="w-[200px]"
           />
          </a>
          </div>
          
          <div>
          <a href="https://www.instagram.com/soumyarajbag/" target="blank">
            <img
              alt="Instagram"
              src="https://img.shields.io/badge/Instagram-100000?style=for-the-badge&logo=Instagram&logoColor=white&labelColor=000000&color=FF009E"
              className="w-[200px]"
           />
          </a>
          </div>
          
          <div>
          <a href="discordapp.com/users/soumyarajbag" target="blank">
            <img
              alt="Discord"
              src="https://img.shields.io/badge/Discord-100000?style=for-the-badge&logo=Discord&logoColor=white&labelColor=black&color=6B00B3"
              className="w-[200px]"
            />
          </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Socials;
