import React from 'react'
import EventCard from '../EventCard'
import EventRoutes from '../EventRoutes'

const Sessions = () => {
  return (
    <div>
        <div className="flex flex-col items-center gap-12 py-8">
      <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
        <h1>Our Events</h1>
      </div>

       <div>
        <EventCard />
       </div>

    </div>
    </div>
  )
}

export default Sessions