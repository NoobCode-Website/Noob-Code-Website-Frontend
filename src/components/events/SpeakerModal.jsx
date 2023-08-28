import React from "react";

import { GrClose } from "react-icons/gr";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const SpeakerModal = ({ speakers, index, closeSpeaker }) => {
  const speaker = speakers[index];
  return (
    <div>
      <div
        id="container"
        className=" fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "
      >
        <div className="flex w-[320px] h-[600px] overflow-y-scroll md:w-[700px] lg:w-[900px] lg:h-[500px] bg-cyan-900 flex-col border-2 rounded-xl">
          <div className=" flex flex-row justify-between items-center  scroll-smooth   px-12 py-5  bg-violet-500 text-white">
            <div>
              <h1 className="font-bold text-2xl">Speaker Details</h1>
            </div>

            <div>
              <button onClick={closeSpeaker}>
                <GrClose size={25} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row justify-between px-10 py-5">
            <div>
              <div className="flex flex-col items-start gap-2 lg:gap-0">
                <div>
                  <h1 className="text-4xl lg:text-start text-center font-bold tracking-widest hover:scale-x-110 hover:scale-y-95 cursor-pointer duration-300">
                    {speaker.speaker}
                  </h1>
                </div>
                <div className="flex flex-col items-start gap-5 ">
                  <h1 className="text-3xl tracking-wider text-blue-300 font-semibold hover:scale-x-110 duration-300 cursor-pointer">
                    Experiences
                  </h1>
                  <div className="flex flex-col gap-5">
                    <ul className="flex flex-col gap-2 text-lg font-medium">
                      <li>{speakers[index].description}</li>
                    </ul>

                    <div className="flex flex-row justify-around ">
                      <a href="/" rel="noreferrer" target="_blank" className="text-lg hover:text-black hover:scale-x-110 duration-500 cursor-pointer font-bold tracking-widest border-2 bg-blue-600 px-2 py-1 rounded-lg">
                        Session Link{" "}
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="/"
                        className="border-2 border-blue-300 px-3 py-2 rounded-lg bg-blue-500 "
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img
                src={speaker.image}
                alt=""
                className="w-[300px] md:w-[400px] lg:w-[300px] rounded-xl border-t-2 border-t-cyan-200"
              />
              <div className="flex flex-row gap-2 flex-wrap items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={speaker.twitter}
                  className="px-3 py-2 rounded-full bg-[#3e94df] font-bold text-xl text-white hover:bg-white hover:text-[#3e94df] "
                >
                  <BsTwitter className="h-[28px] w-[28px]" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={speaker.github}
                  className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]"
                >
                  <BsGithub className="h-[28px] w-[28px]" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={speaker.linkedin}
                  className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]"
                >
                  <BsLinkedin className="h-[28px] w-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
