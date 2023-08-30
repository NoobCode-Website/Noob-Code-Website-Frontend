import React from 'react'
import ResourceCard from '../components/resources/ResourceCard'
import { resources } from '../data/resources'
const ResourcesPage = ({isMenuOpen}) => {
  return (
    <div className={`flex flex-col items-center  gap-12 py-8 overflow-x-hidden ${isMenuOpen ? 'pt-96' : '2xl:pt-[150px]'}`}>
       <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
        <h1>Our Resources</h1>
      </div>

      <div className='flex flex-row items-center justify-center px-20  flex-wrap gap-16'>
      {resources.map((resource, index) => {
            return (
              <ResourceCard key={index+1} photo={resource.photo} index={resource.id} name={resource.name} description={resource.description} link={resource.link} />
            );
          })}
      </div>
    </div>
  )
}

export default ResourcesPage