import  {  useState } from "react";

import EventGallery from "./EventGallery";
import SpeakerModal from "./SpeakerModal";
import SpeakerBox from "./SpeakerBox";
const EventCard = ({ name, date, venue, attendees, ylink, image, speakers , index }) => {
  
  const [openGallery, setOpenGallery] = useState(false);
  const [openSpeaker, setOpenSpeaker] = useState(false);

  const handleSpeaker = () => {
    setOpenSpeaker(true);
  };
  const closeSpeaker = () => {
    setOpenSpeaker(false);
  };
  const handleGallery = () => {
    setOpenGallery(true);
  };
  const closeModal = () => {
    setOpenGallery(false);
  };
  
  return (
    <div className="text-white">
      <div className=" border-r-2 border-l-2 border-blue-400 shadow-blue-400  flex lg:flex-row flex-col items-center justify-between rounded-xl  shadow-md md:w-[680px] 2xl:w-[1200px] p-10 hover:scale-x-105 duration-700 min-[360px]:w-[320px] min-[500px]:w-[470px] lg:w-[900px] xl:w-[1050px] gap-10">
        <div className=" flex flex-col xl:w-[500px] gap-2 ">
          <div className="text-2xl font-bold tracking-wider md:text-center lg:text-start">{name}</div>

          <div className="flex lg:flex-row flex-col justify-between ">
            <h1 className="text-2xl lg:text-lg font-semibold">Date : {date}</h1>
            <h1 className="text-2xl lg:text-lg font-semibold">Venue : {venue}</h1>
          </div>

          <div className="text-2xl lg:text-lg font-semibold">Attendees : {attendees}</div>

          {ylink===" "?null:<div className="flex flex-col font-bold text-md">
            Youtube Link :{" "}
            <a href={ylink}  className="underline font-semibold hover:text-blue-400 cursor-pointer duration-300">
              {ylink}
            </a>
          </div>}

          <div>
          <SpeakerBox speakers={speakers[index]} index={index} handleSpeaker={handleSpeaker} />
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={handleGallery}
              className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              Event Gallery
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="" className="lg:w-[800px] lg:h-[500px] w-[320px] md:w-[600px] xl:w-[600px]" />
        </div>
      </div>
      {openGallery ? <EventGallery closeModal={closeModal} /> : null}
      {openSpeaker ? <SpeakerModal speakers={speakers} index={index} closeSpeaker={closeSpeaker} /> : null}
    </div>
  );
};

export default EventCard;
