import React from 'react'
import DomainCard from './DomainCard'

const Domains = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-8">
    <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
     <h1>Our Domains</h1>
   </div>

   <div className='flex flex-row items-center justify-center gap-20 px-5 xl:px-20 flex-wrap'>
    <DomainCard />
    <DomainCard />
    <DomainCard />
    <DomainCard />
    
   </div>
   </div>

  )
}

export default Domains