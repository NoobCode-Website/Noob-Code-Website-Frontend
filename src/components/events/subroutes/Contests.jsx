import React, { useEffect, useState } from 'react'

import EventRoutes from '../EventRoutes'
import ContestCard from '../contests/ContestCard'
import axios from 'axios'

const Contests = ({isMenuOpen}) => {
  const [contestData , setContestData] = useState([]);
  useEffect(() => {
    axios.get('https://noob-code-website-backend-xwzd.vercel.app/events/getcontests')
    .then((res) => {
        setContestData(res.data.data);  
    })
    .catch((err) => {
      console.log(err);
    })

    
} , []);
  return (
    <div className={`flex overflow-x-hidden flex-col items-center gap-12 py-8  ${isMenuOpen ? 'pt-96' : 'pt-[150px]'}`}>
        <div className="flex flex-col items-center gap-12 py-8">
      <div>
        <EventRoutes  />
      </div>


      <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110  md:text-4xl lg:text-3xl ">
        <h1>Our Contests</h1>
      </div>

      <div className='flex flex-col items-center gap-20'>
       {
        contestData.map((contest , index) => {
          return (
            <ContestCard key={index} index={index} name={contest.contest} date={contest.date} description={contest.description} attendees={contest.footfall} link={contest.hackerrank} image={contest.image} time={contest.time} venue={contest.venue}  />
           
          )
        })
       }
       </div>

    </div>
    </div>
  )
}

export default Contests