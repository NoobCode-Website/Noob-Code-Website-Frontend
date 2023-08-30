import React from "react";


const DomainCard = ({key , name , count , photo , description , link}) => {
 


  return (
    <div  className="flex flex-col justify-center shadow-md shadow-white hover:scale-105 duration-500 cursor-default items-center border-2 border-blue-500 xl:w-[380px] xl:h-[550px] min-[360px]:w-[300px] md:w-[600px]  rounded-xl p-6">
      <div className="flex flex-col items-center gap-6">
        <img
          src={photo}
          alt=""
          className="h-[150px] w-[150px] rounded-lg"
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-center text-white tracking-wider font-semibold">
           {name}
          </h1>
          <h1 className="text-xl text-white tracking-wider font-semibold">
            Members Count : {count}
          </h1>
          <p className="text-white text-lg">
           {description}
          </p>
        </div>

        <a href={link} target="_blank" rel="noreferrer"
              className="bg-violet-700 text-white px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              Join Now
            </a>
      </div>
    </div>
  );
  }


export default DomainCard ;
