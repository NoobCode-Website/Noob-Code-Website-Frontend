import React from 'react'
import ResourceCard from '../components/resources/ResourceCard'

const ResourcesPage = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-8">
       <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
        <h1>Our Resources</h1>
      </div>

      <div className='flex flex-row items-center justify-center flex-wrap gap-16'>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  )
}

export default ResourcesPage