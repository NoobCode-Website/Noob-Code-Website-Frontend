import React from "react";
import logo from "../../assets/logo.jpg";
import EventGallery from "./EventGallery";
const EventCard = () => {
  const [openGallery, setOpenGallery] = React.useState(false);

  const handleGallery = () => {
    setOpenGallery(true);
  };
  const closeModal = () => {
    setOpenGallery(false);
  };
  return (
    <div className="text-white">
      <div className="border-2 border-blue-400  flex flex-row justify-between rounded-xl shadow-white shadow-md w-[1200px] p-10 hover:scale-x-105 duration-700">
        <div className=" flex flex-col w-[500px] gap-2">
          <div className="text-2xl font-bold tracking-wider">Session Name</div>

          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Date </h1>
            <h1 className="text-lg font-semibold">Venue Name</h1>
          </div>

          <div className="text-lg font-semibold">Attendees : 100</div>

          <div className="flex flex-col font-bold text-lg">
            Youtube Link :{" "}
            <h1 className="underline font-semibold hover:text-blue-400 cursor-pointer duration-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus quibusdam amet aperiam!
            </h1>
          </div>

          <div className="flex flex-col items-center rounded-xl  gap-5 border-2 border-blue-300 justify-start  py-4">
            <h1 className="text-xl font-semibold">Speaker </h1>
            <div className="flex flex-row justify-between gap-20">
              <div>
                <div>
                  <img src={logo} className="w-[150px] rounded-full" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-xl">Speaker Name</h1>
                </div>
              </div>

              <div className="w-[200px]">
                Qualifications :{" "}
                <h1 className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </h1>
              </div>
            </div>

            <button className="text-xl text-slate-400 hover:text-white duration-300">
              Know About More{" "}
            </button>
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
          <img src={logo} alt="" className="w-[500px] h-[500px]" />
        </div>
      </div>
      {openGallery ? <EventGallery closeModal={closeModal} /> : null}
    </div>
  );
};

export default EventCard;
