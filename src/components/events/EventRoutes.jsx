import React from 'react'
import { Link } from 'react-router-dom'
const EventRoutes =() => {
    
  return (
    <div className='flex flex-row  items-center text-white text-md lg:text-2xl gap-2 xl:gap-5 lg:gap-20  '>
        <Link to="/events/sessions" className='border-2 p-2 xl:p-4 rounded-xl bg-blue-900 active:bg-red-900'><h1>Sessions</h1></Link>
        <Link to="/events/contests" className='border-2  p-2 xl:p-4 rounded-xl bg-blue-900 active:bg-red-900'><h1>Contests</h1></Link>
        <Link to="/events/collaborations" className='border-2  p-2 xl:p-4 rounded-xl bg-blue-900 active:bg-red-900'><h1>Collaborations</h1></Link>
    </div>
  )
}

export default EventRoutes