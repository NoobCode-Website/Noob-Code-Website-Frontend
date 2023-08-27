import React, { useEffect, useState } from 'react'
import EventRoutes from '../EventRoutes'
import CollaborationCard from '../collaborations/CollaborationCard'
import axios from 'axios';

const Collaborations = () => {
  const [collabData , setCollabData]= useState([]);
  useEffect(() => {
    axios
      .get("https://noob-code-website-backend.vercel.app/events/getcollabs")
      .then((res) => {
        setCollabData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, []);
  return (
    <div>
    <div className="flex flex-col items-center gap-12 py-8">
  <div>
    <EventRoutes  />
  </div>

  <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
    <h1>Our Collaborations</h1>
  </div>

  <div className='flex flex-col items-center gap-20'>
       {
        collabData.map((collab , index) => {
          return (
            <CollaborationCard key={index} index={index} date={collab.date} description={collab.description} image={collab.image} name={collab.name} website={collab.partnerWebsite} venue={collab.venue}   />
           
          )
        })
       }
       </div>

</div>
</div>
  )
}

export default Collaborations