import React, { useState } from 'react'
import logo from '../../../assets/logo.jpg'
import LeaderBoard from './LeaderBoard'
const ContestCard = () => {
    const [openLeaderboard, setOpenLeaderboard] = useState(false)
  return (
    <div className="text-white">
      <div className=" border-r-2 border-l-2 border-blue-400 shadow-blue-400  flex flex-row justify-between rounded-xl  shadow-md w-[1200px] p-10 hover:scale-x-105 duration-700">
        <div className=" flex flex-col w-[500px] gap-2">
          <div className="text-2xl font-bold tracking-wider">Contest Name</div>

          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Date </h1>
            <h1 className="text-lg font-semibold">Time </h1>
            <h1 className="text-lg font-semibold">Venue Name</h1>
          </div>

          <div className="text-lg font-semibold">Attendees : 100</div>

         <div className='flex flex-col items-start'> 
            <div>
                <h1 className='text-white tracking-wider text-2xl font-semibold'>Contest Description</h1>
            </div>

            <div>
                <ul className='flex flex-col gap-2 text-lg tracking-wide font-semibold'>
                    <li>lawda</li>
                    <li>bokachoda</li>
                    <li>bal bara</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, tempore! Libero, praesentium?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, tempore! Libero, praesentium?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, tempore! Libero, praesentium?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, tempore! Libero, praesentium?</li>
                </ul>
            </div>

           
         </div>
         <div className='flex flex-row justify-between py-5'>
            <button
              className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              View Contest
            </button>
            <button
            onClick={() => setOpenLeaderboard(true)}
              className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              View Leaderboard
            </button>
            </div>
          

        </div>
        <div>
          <img src={logo} alt="" className="w-[500px] h-[500px]" />
        </div>
      </div>
      {openLeaderboard ? <LeaderBoard setOpenLeaderboard={setOpenLeaderboard} /> : null}
    </div>
  )
}

export default ContestCard