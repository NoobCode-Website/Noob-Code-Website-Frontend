import React from 'react'
import { GrClose } from 'react-icons/gr'

const LeaderBoard = ({setOpenLeaderboard}) => {
  return (
    <div
        id="container"
        className=" fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex w-[900px] bg-cyan-900 flex-col border-2 rounded-xl">
          <div className=" flex flex-row justify-between items-center   px-12 py-5  bg-violet-500 text-white">
            <div>
              <h1 className="font-bold text-2xl">Leaderboard</h1>
            </div>

            <div>
              <button onClick={()=>{setOpenLeaderboard(false)}}>
                <GrClose size={25} />
              </button>
            </div>
          </div>

           

          </div>
          </div>
  )
}

export default LeaderBoard