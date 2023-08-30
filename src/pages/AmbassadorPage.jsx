import React from 'react'
import AmbassadorForm from '../components/contacts/AmbassadorForm'

const AmbassadorPage = ({isMenuOpen}) => {
  return (
    <div>
         <div className={`flex flex-col items-center gap-12  py-8 ${isMenuOpen ? 'pt-96' : '2xl:pt-[150px]'}`}>
      <div className="font-bold text-white text-lg text-center  xl:text-3xl tracking-widest hover:scale-x-105 duration-500">
        <h1>Join Us Today as Campus Ambassador in Your College</h1>
      </div>
      <AmbassadorForm />
      </div>
        
    </div>
  )
}

export default AmbassadorPage