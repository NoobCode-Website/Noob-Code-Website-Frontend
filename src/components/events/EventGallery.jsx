import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import { GrClose } from "react-icons/gr";
const EventGallery = ({ closeModal }) => {
  return (
    <div>
      <div
        id="container"
        className=" fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex w-[600px] h-[700px] flex-col">
          <div className=" flex flex-row justify-between  px-12 py-5  bg-violet-500 text-white">
            <div>
              <h1 className="font-bold text-2xl">Event Photos</h1>
            </div>

            <div>
              <button onClick={closeModal}>
                <GrClose size={25} />
              </button>
            </div>
          </div>
          <div>
            <PhotoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
