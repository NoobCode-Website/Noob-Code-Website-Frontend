import React, { useState } from 'react'

import LeaderBoard from './LeaderBoard'
const ContestCard = ({key , index , name , date , description , attendees , link , image , time , venue}) => {
    const [openLeaderboard, setOpenLeaderboard] = useState(false)
  return (
    <div className="text-white">
      <div className=" border-r-2 border-l-2 border-blue-400 shadow-blue-400  flex lg:flex-row flex-col justify-between rounded-xl  shadow-md  p-10 hover:scale-x-105 duration-700 md:w-[680px] 2xl:w-[1200px] min-[360px]:w-[320px] min-[500px]:w-[470px] lg:w-[900px] xl:w-[1050px] gap-10">
        <div className=" flex flex-col  xl:w-[500px] gap-2">
          <div className="text-2xl md:text-4xl xl:text-2xl font-bold tracking-wider  lg:text-start">{name}</div>

          <div className="flex lg:flex-row flex-col justify-between">
            <h1 className="text-2xl lg:text-lg font-semibold">Date : {date} </h1>
            <h1 className="text-2xl lg:text-lg font-semibold">Time : {time}</h1>
            <h1 className="text-2xl lg:text-lg font-semibold">Venue : {venue}</h1>
          </div>

          <div className="text-2xl lg:text-lg font-semibold">Attendees : {attendees}</div>

         <div className='flex flex-col items-start'> 
            <div>
                <h1 className='text-white tracking-wider text-2xl font-semibold'>Contest Description</h1>
            </div>

            <div>
                <ul className='flex flex-col min-[360px]:w-[280px] gap-2 text-lg tracking-wide font-semibold'>
                  {description}
                </ul>
            </div>

           
         </div>
         <div className='flex flex-col gap-10 justify-center lg:justify-between py-5'>
            <a href={link}
              className="bg-violet-700 px-4 py-2  text-center rounded-xl  md:text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              View Contest
            </a>
            <button
            onClick={() => setOpenLeaderboard(true)}
              className="bg-violet-700 px-4 py-2 rounded-xl  text-xl md:text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              View Leaderboard
            </button>
            </div>
          

        </div>
        <div>
          <img src={image} alt="" className="lg:w-[800px] lg:h-[500px] w-[320px] md:w-[600px] xl:w-[600px]" />
        </div>
      </div>
      {openLeaderboard ? <LeaderBoard setOpenLeaderboard={setOpenLeaderboard} /> : null}
    </div>
  )
}

export default ContestCard