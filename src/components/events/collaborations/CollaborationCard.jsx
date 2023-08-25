import React from "react";
import logo from "../../../assets/logo.jpg";
const CollaborationCard = () => {
  return (
    <div className="text-white">
      <div className=" border-r-2 border-l-2 border-blue-400 shadow-blue-400  flex flex-row justify-between rounded-xl  shadow-md w-[1200px] p-10 hover:scale-x-105 duration-700">
        <div className=" flex flex-col w-[500px] gap-2">
          <div className="text-2xl font-bold tracking-wider">Session Name</div>

          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Date </h1>
            <h1 className="text-lg font-semibold">Venue Name</h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl tracking-wider font-semibold">
              Description :
            </h1>
            <div className="text-lg">
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro nostrum nam accusamus modi, reprehenderit tempore, eveniet
              error consectetur quaerat a commodi et quasi. Recusandae maxime
              aut odio ut aspernatur natus qui dolor? ipsum dolor sit amet
              consectetur adipisicing elit. Animi incidunt minima illo quasi eos
              velit nesciunt. Harum explicabo fugiat eaque praesentium illum
              distinctio labore, nesciunt eos ea culpa ad atque quae
              necessitatibus.
            </div>
          </div>

          <div className="flex flex-row justify-between gap-10 pt-5">
            <button className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700">
               Partner Website
            </button>
            <button className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700">
              Gallery
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="" className="w-[400px] h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
