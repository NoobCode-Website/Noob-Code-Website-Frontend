import React from "react";
import { Accordion } from "flowbite-react";
const SpeakerForm = () => {
  return (
    <div className="flex flex-row items-center gap-5 w-full">
      <Accordion className="w-2/4 ">
        <Accordion.Panel>
          <Accordion.Title className="text-white hover:text-black">
            Speaker 1
          </Accordion.Title>
          <Accordion.Content>
            <form action="" className="flex flex-col items-start  gap-10">
              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor=""
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Speaker Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor="session"
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Session Name:
                </label>
                <input
                  type="text"
                  name="session"
                  id="session"
                  placeholder="Session"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor=""
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Image :
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Image"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor="date"
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date of Session"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor=""
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Youtube Link:
                </label>
                <input
                  type="text"
                  name="ylink"
                  id="ylink"
                  placeholder="Youtube Link"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor="github"
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  GitHub Profile URL :
                </label>
                <input
                  type="text"
                  name="github"
                  id="github"
                  placeholder="GitHub"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor="linkedin"
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  LinkedIn Profile URL :
                </label>
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="LinkedIn"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor="twitter"
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Twitter Profile URL :
                </label>
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Twitter"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center ">
                <label
                  htmlFor="instagram"
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Instagram URL :
                </label>
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  placeholder="Instagram"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>
            </form>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default SpeakerForm;
