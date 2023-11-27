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
    <>
      {
        <div className="text-white">
          <div className=" border-r-2 border-l-2 border-blue-400 shadow-blue-400  flex lg:flex-row flex-col items-center justify-between rounded-xl  shadow-md md:w-[680px] 2xl:w-[1200px] p-10 hover:scale-x-105 duration-700 min-[360px]:w-[340px] min-[500px]:w-[490px] lg:w-[900px] xl:w-[1050px] gap-10">
            <div className=" flex flex-col xl:w-[500px] gap-2 ">
              <div className="text-3xl text-center font-bold tracking-wider md:text-center lg:text-start">
                {name}
              </div>

              <div className="flex lg:flex-row  items-center  flex-wrap justify-between">
                <h1 className="text-2xl lg:text-lg ">
                  Date : <span className="text-xl ">{date}</span>
                </h1>
                <h1 className="text-2xl lg:text-lg ">
                  Venue : <span className="text-xl ">{venue}</span>
                </h1>
              </div>

              <div className="text-2xl lg:text-lg ">
                Attendees : <span className="text-xl ">{attendees}</span>
              </div>

              {ylink === " " ? null : (
                <div className="flex flex-row gap-5  font-bold text-md">
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

              <div>
                <SpeakerBox
                  speakers={speakers[index]}
                  index={index}
                  handleSpeaker={handleSpeaker}
                />
              </div>

              {/* <div className="flex flex-col items-center">
            <button
              onClick={handleGallery}
              className="bg-violet-700 px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
            >
              Event Gallery
            </button>
          </div> */}
            </div>
            <div>
              <img
                src={image}
                alt=""
                className="object-cover lg:w-[800px] lg:h-[500px] w-[320px] md:w-[600px] xl:w-[500px]"
              />
            </div>
          </div>
          {openGallery ? <EventGallery closeModal={closeModal} /> : null}
          {openSpeaker ? (
            <SpeakerModal
              speakers={speakers}
              index={index}
              closeSpeaker={closeSpeaker}
            />
          ) : null}
        </div>
      }
    </>
  );
};

export default EventCard;
