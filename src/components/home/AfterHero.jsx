import React from 'react'
import VisionCard from './VisionCard';


const visions = [
    {
      title: "Growing Together",
      image : 'https://i.postimg.cc/1zZBkC0v/Works-2016.jpg',
      description:
        "From beginners taking their first steps, to seasoned experts , NoobCode is a platform for everyone to learn ,interact and share their knowledge , thus Growing together as a Community.",
    },
    {
      title: "Ignite Innovation",
      image : 'https://i.postimg.cc/2SWTXRWq/Free-Vector-Creativity-concept-illustration.jpg' ,
      description:
        "We're not just following trends,we're setting them.Through regular hands-on sessions, open forums, and curated resources, NoobCode is the launchpad of unthinkable innovations.",
    },
    {
      title: "Connect & Collaborate",
      image : 'https://i.postimg.cc/wTZ0VT18/Free-Vector-Teamwork-people-with-puzzle-pieces.jpg',
      description:
        "Whether it's through shared projects, hackathons, or collaborative coding challenges, NoobCode will help you connect and collaborate with enthusiastic techies from everywhere.",
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