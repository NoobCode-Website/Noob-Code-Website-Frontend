import React from 'react'
import EventCard from '../EventCard'
import EventRoutes from '../EventRoutes'
import ContestCard from '../contests/ContestCard'

const Contests = () => {
  return (
    <div>
        <div className="flex flex-col items-center gap-12 py-8">
      <div>
        <EventRoutes  />
      </div>

      <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
        <h1>Our Contests</h1>
      </div>

     <div>
      <ContestCard />
     </div>

    </div>
    </div>
  )
}

export default Contests