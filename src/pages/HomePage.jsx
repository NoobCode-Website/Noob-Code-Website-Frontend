import React from 'react'
import Domains from '../components/home/Domains/Domains'

const HomePage = ({isMenuOpen}) => {
  return (
    <div className={`${isMenuOpen ? 'pt-96' : ''}`}>
        <Domains />
    </div>
  )
}

export default HomePage