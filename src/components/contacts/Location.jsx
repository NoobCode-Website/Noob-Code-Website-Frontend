import React, { useState } from "react";
import {PropagateLoader} from 'react-spinners'
const Location = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  },2000);
  return (
    <>
   <div className="text-white flex flex-col items-center gap-10">
      <div>
        <h1 className="text-3xl pt-5 font-semibold tracking-widest hover:scale-x-110 hover:text-blue-400 cursor-pointer duration-500">
          Reach Us
        </h1>
      </div>
     {isLoading ? 
     <div className="h-[500px] flex justify-center items-center">
     <PropagateLoader color="#fff" />
    </div>
      :  <div className="border-2 border-blue-500 " >
        <iframe
        className="w-[900px] h-[500px] min-[360px]:w-[320px] min-[360px]:h-[220px] md:w-[750px] md:h-[400px] lg:w-[900px] lg:h-[500px] xl:w-[1000px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689841495!2d88.26495178563961!3d22.535564935269036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1693995150631!5m2!1sen!2sin" 
          
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="RCCIIT"
        ></iframe>
      </div>}
    </div>
    </>
  );
};

export default Location;
