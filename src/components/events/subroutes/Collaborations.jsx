import React from 'react'
import EventRoutes from '../EventRoutes'
import CollaborationCard from '../collaborations/CollaborationCard'

const Collaborations = () => {
  return (
    <div>
    <div className="flex flex-col items-center gap-12 py-8">
  <div>
    <EventRoutes  />
  </div>

  <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
    <h1>Our Collaborations</h1>
  </div>

 <div>
  <CollaborationCard />
 </div>

</div>
</div>
  )
}

export default Collaborations