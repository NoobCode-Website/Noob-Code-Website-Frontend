import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SpeakerBox = ({ speakers, index, handleSpeaker }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="flex flex-col items-center rounded-xl  gap-5 border-2 border-blue-300 justify-start px-3 w-[300px] sm:w-[500px] md:w-[600px]  py-4">
        <h1 className="text-xl md:text-4xl lg:text-xl font-semibold">
          Speaker{" "}
        </h1>
        <div className="flex md:flex-row flex-col justify-between gap-3 lg:gap-20">
          <div className="flex flex-col items-center gap-5">
            <div>
              <img
                src={speakers.image}
                className=" md:w-[250px] lg:w-[150px] "
                alt={speakers.speaker}
              />
            </div>
            <div>
              <h1 className="font-semibold text-3xl lg:text-xl text-center">
                {speakers.speaker}
              </h1>
            </div>
          </div>

          <div className="md:w-[250px] lg:w-[200px]">
            <h1 className="text-2xl">Qualifications : </h1>
            <br />
            <h1 className="text-lg lg:text-lg">{speakers.description}</h1>
          </div>
        </div>

        <button
          onClick={handleSpeaker}
          className="text-xl text-blue-300 hover:text-white duration-300"
        >
          Know More{" "}
        </button>
      </div>
    </div>
  );
};

export default SpeakerBox;
