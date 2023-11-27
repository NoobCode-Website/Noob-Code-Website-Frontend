import React, { useEffect, useState } from 'react'
import EventRoutes from '../EventRoutes'
import CollaborationCard from '../collaborations/CollaborationCard'
import axios from 'axios';
import {PropagateLoader} from 'react-spinners'
const Collaborations = ({isMenuOpen}) => {
  const [collabData , setCollabData]= useState([]);
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://noobcode-server-side.vercel.app/events/getcollabs")
      .then((res) => {
        setCollabData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  setTimeout(()=>{
    setIsLoading(false);
  } , 3000)
  return (
    <div className={`flex flex-col oveflow-x-hidden items-center gap-12 py-8  ${isMenuOpen ? 'pt-96' : '2xl:pt-[120px]'}`}>
    <div className="flex flex-col items-center gap-12 py-0">
  <div>
    <EventRoutes  />
  </div>

  <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 md:text-4xl lg:text-3xl  ">
    <h1>Our Collaborations</h1>
  </div>

  <div className='flex flex-col-reverse items-center gap-12'>
       {isLoading ? 
 <div className="h-[500px] flex flex-col justify-center items-center">
 <PropagateLoader color="#fff" />
</div>
  :
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