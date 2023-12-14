import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SpeakerModal from "./SpeakerModal";

const SpeakerBox = ({ speakers, index }) => {
  const speakerDetails = speakers[index];

  const { speaker } = speakerDetails;
  const [openSpeaker, setSpeaker] = useState(false);
  const handleOpenSpeaker = () => {
    setSpeaker(true);
  };
  const closeOpenedSpeaker = () => {
    setSpeaker(false);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full rounded-xl  gap-5 border-2 border-blue-300 justify-start px-4   py-4">
        <h1 className="text-xl md:text-4xl lg:text-xl font-semibold">
          {speaker.length > 1 ? "Speakers" : "Speaker"}
        </h1>
        {speaker.length === 1 ? (
          <>
            <div className="flex  lg:flex-row flex-col justify-between gap-3 lg:gap-20">
              <div className="flex flex-col items-center gap-5">
                <img
                  src={speaker[0].image}
                  className=" md:w-[250px] lg:w-[150px] "
                  alt={speaker[0].image}
                />
                <div>
                  <h1 className="font-semibold text-3xl lg:text-xl text-center">
                    {speaker[0].name}
                  </h1>
                </div>
              </div>

              <div className="md:w-[250px] lg:w-4/5">
                <h1 className="text-2xl">Qualifications : </h1>
                <br />
                <ul className="flex flex-col">
                  {speaker[0].qualification.map((qual, index) => {
                    return (
                      <li key={index} className="text-lg lg:text-lg">
                        {qual}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <button
              onClick={handleOpenSpeaker}
              className="text-xl text-blue-300 hover:text-white duration-300"
            >
              Know More{" "}
            </button>
            {openSpeaker ? (
              <SpeakerModal
                speaker={speaker[0]}
                index={index}
                closeSpeaker={closeOpenedSpeaker}
                handleSpeaker={handleOpenSpeaker}
              />
            ) : null}
          </>
        ) : (
          <div className="flex flex-col items-start justify-center   gap-5 w-full">
            {speaker.map((speak, index) => {
              return (
                <div className="border-b-2 last:border-none w-full">
                  <SpeakerCard key={index} speaker={speak} index={index} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

const SpeakerCard = ({ speaker, index }) => {
  const {
    image,
    name,
    qualification,
    date,
    github,
    instagram,
    linkedin,
    twitter,
    session,
    ylink,
  } = speaker;
  const [openSpeaker, setOpenSpeaker] = useState(false);

  const handleSpeaker = () => {
    setOpenSpeaker(true);
  };
  const closeSpeaker = () => {
    setOpenSpeaker(false);
  };
  return (
    <div>
      <div className="flex flex-col items-center  pb-5 ">
        <div className="flex  flex-row w-full  items-center max-lg:justify-center  flex-wrap  gap-4 md:gap-6">
          <img
            className="w-32 md:w-16  rounded-full object-cover"
            src={image}
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start text-md  text-center">
            <h1>{session}</h1>
            <h1 className="text-2xl">{name}</h1>
          </div>
        </div>
        <button
          onClick={handleSpeaker}
          className="text-xl text-blue-300 hover:text-white duration-300"
        >
          Know More{" "}
        </button>
      </div>
      {openSpeaker ? (
        <SpeakerModal
          speaker={speaker}
          index={index}
          closeSpeaker={closeSpeaker}
          handleSpeaker={handleSpeaker}
        />
      ) : null}
    </div>
  );
};

export default SpeakerBox;
