import React from "react";

const DomainCard = () => {
  return (
    <div className="flex flex-col justify-center shadow-md shadow-white hover:scale-105 duration-500 cursor-default items-center border-2 border-blue-500 w-[380px] h-[500px] rounded-xl p-6">
      <div className="flex flex-col items-center gap-6">
        <img
          src="https://www.clipartmax.com/png/middle/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png"
          alt=""
          className="h-[150px] w-[150px] rounded-full"
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-white tracking-wider font-semibold">
            Domain Name
          </h1>
          <h1 className="text-xl text-white tracking-wider font-semibold">
            Members Count : 100
          </h1>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            atque rem praesentium similique sed, ex quas.
          </p>
        </div>

        <button
              className="bg-violet-700 text-white px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              Join Now
            </button>
      </div>
    </div>
  );
};

export default DomainCard;
