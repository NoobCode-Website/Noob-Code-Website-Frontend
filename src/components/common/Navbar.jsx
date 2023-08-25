import React from 'react'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const routings = [
    {name: 'Home', path: '/'},
    {name: 'Events', path: '/events'},
    {name: 'Resources', path: '/resources'},
    {name: 'Team', path: '/team'},
    {name: 'Contact', path: '/contact'},
  ]
  return (
   <div className='flex flex-row items-center justify-around'>
    <div>
      <Link to="/"><img src={logo} alt="" className='h-28 w-28 rounded-full border-2 border-blue-500' /></Link>
    </div>

    <div className='text-white flex flex-row items-center gap-20 font-semibold text-xl '>
    {
      routings.map((item, index) => (
        <Link to={item.path} index={index}><h1 className='hover:text-blue-300 cursor-pointer'>{item.name}</h1></Link>
      ))
    }
    </div>
     

   </div>
  )
}

export default Navbar