import React from 'react'

const VisionCard = ({title , description , image}) => {
  return (
    <>
     <div className="vision-card flex flex-col justify-center shadow-md shadow-blue hover:scale-105  duration-500 cursor-default items-center border-2 border-blue-500 xl:w-[380px] xl:h-[500px] min-[360px]:w-[300px] md:w-[600px]   rounded-xl p-6">
      <div className="flex flex-col items-center gap-6">
        <img
          src={image}
          alt=""
          className="h-[150px] w-[150px] object-cover rounded-full"
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-white tracking-wider font-semibold">
            {title}
          </h1>
          
          <p className="text-white text-lg">
            {description}
          </p>
        </div>

       
      </div>
    </div>
    </>
  )
}

export default VisionCard