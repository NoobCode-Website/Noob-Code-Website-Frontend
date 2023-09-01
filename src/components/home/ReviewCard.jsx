import React from 'react'
import logo from '../../assets/logo.jpg'
const ReviewCard = ({name , intro , stars , review , image}) => {
  return (
    <div className=' review-card w-[300px]  xl:w-[400px] xl:h-[600px] border-blue-400 border-2 shadow-md shadow-white hover:scale-105 duration-500 p-6 rounded-xl'>
        <div className='flex flex-col items-center gap-2'> 
            <div className='flex flex-col items-center text-white font-semibold text-xl gap-2'>
                <img src={image} alt="" className='h-[200px] w-[200px] rounded-full object-cover' />
                <div className='flex flex-col items-center gap-1'>
                <h1>Name : {name} </h1>
                    <h1>Stars : {stars}/5</h1>
                     <h1>{intro} </h1>
                </div>
            </div>

            <div className='flex flex-col items-center text-white font-semibold text-xl w-[280px] xl:w-[350px] text-center'>
                <h1 className='text-2xl'>Review</h1>
                <p className='text-lg'>{review}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard