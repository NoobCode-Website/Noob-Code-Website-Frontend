import React from "react";

const CollaborationCard = ({index , date , description , image , name , website , venue }) => {

  return (
    <div className="text-white">
      <div className=" border-r-2 border-l-2 border-blue-400 shadow-blue-400  flex flex-row justify-between rounded-xl  shadow-md w-[1200px] p-10 hover:scale-x-105 duration-700">
        <div className=" flex flex-col w-[500px] gap-2">
          <div className="text-2xl font-bold tracking-wider">{name}</div>

          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Date : {date} </h1>
            <h1 className="text-lg font-semibold">Venue : {venue}</h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl tracking-wider font-semibold">
              Description :
            </h1>
            <div className="text-lg">
             {description}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-10 pt-5">
            <a href={website} className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700">
               Partner Website
            </a>
            <button className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700">
              Gallery
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="" className="w-[400px] h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
