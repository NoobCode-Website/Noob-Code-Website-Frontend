import React from 'react'
const ReviewCard = ({name , intro , stars , review , image}) => {
  return (
    <div className='review-card w-[250px]  xl:w-[350px] xl:h-[400px] border-blue-400 p-6 rounded-xl'>
        <div className='flex flex-col items-center gap-2'> 
            <div className='flex flex-col items-center text-white font-semibold text-xl gap-2'>
                <img src={image} alt="" className='h-[50px] w-[50px] xl:h-[100px] xl:w-[100px] rounded-full object-cover' />
                <div className='flex flex-col items-center gap-1'>
                <h1 className='text-md xl:text-xl'> {name} </h1>
                     <h1 className='text-base xl:text-xl'>{intro} </h1>
                </div>
            </div>

            <div className='flex flex-col items-center text-white text-0.5xl w-[200px] xl:w-[300px] text-center'>
                <p className='text-sm xl:text-sm'>{review}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard