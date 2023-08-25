import React from "react";
import { Di } from "react-icons/di";
const ResourceCard = () => {
  return (
    <div className="flex flex-col items-center w-[400px] hover:scale-105 duration-500 cursor-default border-2 border-blue-400  gap-5 rounded-xl shadow-md shadow-blue-200 p-6">
      <div>
        <img
          src="https://www.clipartmax.com/png/middle/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png"
          alt=""
          className="h-[150px] w-[150px] rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl text-white tracking-wider font-bold ">Tech Name</h1>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          quaerat praesentium eos vel eius recusandae, esse accusantium a
          veritatis magni labore eveniet voluptatem itaque dolore odio dolores
          quas temporibus perferendis unde? Excepturi?
        </p>

        <button
              className="bg-violet-700 text-white px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              Resource Link
            </button>
      </div>
    </div>
  );
};

export default ResourceCard;
