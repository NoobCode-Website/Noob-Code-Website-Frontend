import React from 'react'
import logo from '../../assets/logo.jpg'
const SpeakerBox = ({speakers , index ,  handleSpeaker }) => {
  
  return (
    <div>
  <div className="flex flex-col items-center rounded-xl  gap-5 border-2 border-blue-300 justify-start px-4  py-4">
            <h1 className="text-xl font-semibold">Speaker </h1>
            <div className="flex flex-row justify-between gap-20">
              <div className='flex flex-col items-center gap-5'>
                <div>
                  <img src={logo} className="w-[150px] rounded-full" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-xl text-center">{speakers[index].speaker}</h1>
                </div>
              </div>

              <div className="w-[200px]">
                Qualifications :{" "}
                <h1 className="font-semibold">
               {speakers[index].description}
                </h1>
              </div>
            </div>

            <button
              onClick={handleSpeaker}
              className="text-xl text-slate-400 hover:text-white duration-300"
            >
              Know About More{" "}
            </button>
          </div>
    </div>
  )
}

export default SpeakerBox