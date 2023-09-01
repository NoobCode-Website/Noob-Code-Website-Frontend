import React from "react";


const ResourceCard = ({key , index , name , description , link , photo}) => {
  return (
    <div className="resource-card flex flex-col h-[550px] items-center min-[360px]:w-[300px] md:w-[680px] xl:w-[400px] hover:scale-105 duration-500 cursor-default border-2 border-blue-400  gap-5 rounded-xl shadow-md shadow-blue-200 p-6">
      <div>
        <img
          src={photo}
          alt=""
          className="h-[150px] w-[150px] rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl text-white text-center  tracking-wider font-bold ">{name}</h1>
        <p className="text-white text-lg text-center">
          {description}
        </p>

        <a href={link} target="_blank" rel="noreferrer"
              className="bg-violet-700 text-white px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              Resource Link
            </a>
      </div>
    </div>
  );
};

export default ResourceCard;
