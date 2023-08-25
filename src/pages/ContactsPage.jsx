import React from 'react'
import Location from '../components/contacts/Location'
import Socials from '../components/contacts/Socials'

const ContactsPage = () => {
   
      
  return (
    <div className='flex flex-col items-center gap-10'>
       <Location />
       <Socials />
    </div>
  )
}

export default ContactsPage