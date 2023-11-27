import React from 'react'
import DomainCard from './DomainCard'
import { domains } from '../../../data/domains'
const Domains = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-8">
    <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
     <h1>Our Domains</h1>
   </div>

   <div className='flex flex-row items-center justify-center gap-20 px-5 xl:px-20 flex-wrap'>
    {
      domains.map((domain) => ( 
        <DomainCard key={domain.id} name={domain.name} photo={domain.photo} count={domain.count} description={domain.description} link={domain.link} />
      ))
    }
    
   </div>
   </div>

  )
}

export default Domains