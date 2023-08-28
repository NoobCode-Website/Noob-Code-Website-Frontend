import React from 'react'
import Location from '../components/contacts/Location'
import Socials from '../components/contacts/Socials'

const ContactsPage = ({isMenuOpen}) => {
   
      
  return (
    <div className={`flex flex-col items-center gap-10 ${isMenuOpen ? 'pt-96' : ''}`}>
       <Location />
       <Socials />
    </div>
  )
}

export default ContactsPage