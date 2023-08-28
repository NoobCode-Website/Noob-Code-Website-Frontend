import React from 'react'
import logo from '../../assets/logo.jpg'
const ReviewCard = () => {
  return (
    <div className=' review-card border-blue-400 border-2 shadow-md shadow-white hover:scale-105 duration-500 p-6 rounded-xl'>
        <div className='flex flex-row items-center gap-5'> 
            <div className='flex flex-col items-center text-white font-semibold text-xl'>
                <img src={logo} alt="" className='h-40 w-40 rounded-full' />
                <div>
                    <h1>Stars : 4/5</h1>
                     <h1>Name : </h1>
                     <h1>Short Intro </h1>
                </div>
            </div>

            <div className='flex flex-col items-center text-white font-semibold text-xl w-[200px]'>
                <h1 className='text-xl'>Review</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, officiis id dolores eaque doloribus, quidem pariatur hic totam vel quas repellendus quaerat non sed a possimus harum corporis. Non nulla dolorem quo.</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard