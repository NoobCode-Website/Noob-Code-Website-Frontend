import React from 'react'
import { Link } from 'react-router-dom'
const EventRoutes =() => {
    
  return (
    <div className='flex md:flex-row flex-col items-center text-white text-2xl gap-5 lg:gap-20  '>
        <Link to="/events/sessions" className='border-2 p-4 rounded-l-xl bg-blue-900 active:bg-red-900'><h1>Sessions</h1></Link>
        <Link to="/events/contests" className='border-2 p-4 rounded-xl bg-blue-900 active:bg-red-900'><h1>Contests</h1></Link>
        <Link to="/events/collaborations" className='border-2 p-4 rounded-r-xl bg-blue-900 active:bg-red-900'><h1>Collaborations</h1></Link>
    </div>
  )
}

export default EventRoutes