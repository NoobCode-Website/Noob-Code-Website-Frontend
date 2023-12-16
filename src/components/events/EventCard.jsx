import { useState } from "react";

import EventGallery from "./EventGallery";
import SpeakerModal from "./SpeakerModal";
import SpeakerBox from "./SpeakerBox";

const EventCard = ({
  name,
  date,
  venue,
  attendees,
  ylink,
  image,
  speakers,
  index,
  isLoading,
}) => {
  return (
    <>
      <div className=" p-10 text-white w-full border-r-2 border-l-2  border-blue-400 shadow-blue-400 rounded-xl hover:scale-x-105 duration-700 shadow-md flex flex-col lg:flex-row  items-center gap-5  xl:justify-start xl:items-start">
        <div className="lg:w-1/2">
          <h1 className="text-3xl text-center font-bold tracking-wider md:text-center lg:text-start">
            {name}
          </h1>
          <div className="flex  items-center gap-1  flex-wrap justify-between">
            <h1 className="text-2xl lg:text-lg">
              Date : <span className="text-xl ">{date}</span>
            </h1>
            <h1 className="text-2xl lg:text-lg ">
              Venue : <span className="text-xl ">{venue}</span>
            </h1>
          </div>
          <h1 className="text-2xl lg:text-lg ">
            Attendees : <span className="text-xl ">{attendees}</span>
          </h1>
          {ylink === " " ? null : (
            <div className="flex flex-row flex-wrap gap-2 xl:gap-5  font-bold text-md">
              Youtube Link :{" "}
              <a
                href={ylink}
                target="_blank"
                rel="noreferrer"
                className="underline font-semibold hover:text-blue-400 cursor-pointer duration-300"
              >
                Click Here
              </a>
            </div>
          )}
          {!speakers && (
            <div className="py-6">
              <SpeakerBox speakers={speakers} index={index} />
            </div>
          )}
        </div>
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={image}
            className="object-cover w-fit 2xl:w-fit"
          />
        </div>
      </div>
    </>
  );
};

export default EventCard;
