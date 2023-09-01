import React from 'react'
import VisionCard from './VisionCard';


const visions = [
    {
      title: "Foster Learning and Growth",
      image : 'https://i.postimg.cc/1zZBkC0v/Works-2016.jpg',
      description:
        "From beginners taking their first steps, to seasoned experts pushing the boundaries of technology, we're here to inspire and support your progress.",
    },
    {
      title: "Ignite Innovation",
      image : 'https://i.postimg.cc/2SWTXRWq/Free-Vector-Creativity-concept-illustration.jpg' ,
      description:
        "We're not just following trends – we're setting them. Through regular brainstorming sessions, open forums, and daring experiments, we aim to push the boundaries of what technology can achieve.",
    },
    {
      title: "Cultivate Collaboration",
      image : 'https://i.postimg.cc/wTZ0VT18/Free-Vector-Teamwork-people-with-puzzle-pieces.jpg',
      description:
        "Whether it's through shared projects, hackathons, or collaborative coding challenges, we're building a network that thrives on teamwork.",
    }
  ];
const AfterHero = () => {
  return (
    <>
   <div className="flex flex-col items-center gap-12 pt-2 xl:py-8">
    <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
     <h1>Our Vision</h1>
   </div>

   <div className='flex flex-row items-center justify-center gap-20 px-5  xl:px-20 flex-wrap'>
    {
        visions.map((vision,index)=>{
            return(
                <VisionCard
            key={index}
            image = {vision.image}
            title={vision.title}
            description={vision.description}
          />
            )

        })
    }
   </div>
   </div>
    </>
  )
}

export default AfterHero