import React from "react";

const Location = () => {
  return (
    <div className="text-white flex flex-col items-center gap-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-widest hover:scale-x-110 hover:text-blue-400 cursor-pointer duration-500">
          Reach Us
        </h1>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5301581743934!2d88.3938243111534!3d22.559266533372874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027686b848fb8d%3A0xed09795e4836e886!2sRCC%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1692970902436!5m2!1sen!2sin"
          width="900"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="RCCIIT"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
