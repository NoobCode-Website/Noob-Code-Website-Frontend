import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { GrClose } from "react-icons/gr";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const SpeakerModal = ({ speaker, index, closeSpeaker, handleSpeaker }) => {
  const {
    name,
    image,
    qualification,
    github,
    twitter,
    linkedin,
    instagram,
    session,
    ylink,
    date,
  } = speaker;

  return (
    <Modal
      show={handleSpeaker}
      onClose={closeSpeaker}
      className="text-white max-md:mx-3"
    >
      <Modal.Header className=" bg-violet-500 px-5 py-3 ">
        <h1 className="text-white font-semibold text-2xl">Speaker</h1>
      </Modal.Header>
      <Modal.Body className="bg-cyan-900  flex flex-col items-center ">
        <div className=" flex flex-row flex-wrap items-start  justify-center ">
          <div className="flex  flex-col items-start lg:w-1/2">
            <h1 className="text-lg md:text-2xl lg:text-start text-center font-bold tracking-widest hover:scale-x-110 hover:scale-y-95 cursor-pointer duration-300">
              {name}
            </h1>
            <h1 className="text-lg md:text-2xl tracking-wider text-blue-300 font-semibold hover:scale-x-110 duration-300 cursor-pointer">
              Experiences
            </h1>
            <ul className="py-2 flex flex-col gap-2 text-md font-medium">
              {qualification.map((qual, index) => {
                return (
                  <li key={index} className="text-sm md:text-lg">
                    {qual}
                  </li>
                );
              })}
            </ul>
            {ylink !== " " && (
              <div className="flex flex-row justify-around py-2 md:py-5 gap-3">
                <a
                  href={ylink}
                  rel="noreferrer"
                  target="_blank"
                  className="text-xs md:hidden md:text-md hover:text-black hover:scale-x-110 duration-500 cursor-pointer font-bold tracking-widest border-2 bg-blue-600 px-2 py-1 rounded-lg"
                >
                  Session Link{" "}
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5 lg:flex-row justify-between px-2 py-1 md:py-5">
            <div className="flex flex-col items-center gap-5">
              <img
                src={image}
                alt=""
                className="w-[200px]  md:w-[400px] lg:w-[200px] rounded-xl border-t-2 border-t-cyan-200"
              />
              <div className="flex flex-row gap-2 flex-wrap items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={twitter}
                  className="px-3 py-2 rounded-full bg-[#3e94df] font-bold text-xl text-white hover:bg-white hover:text-[#3e94df] "
                >
                  <BsTwitter className="md:h-[28px] md:w-[28px]" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                  className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]"
                >
                  <BsGithub className="md:h-[28px] md:w-[28px]" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={linkedin}
                  className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]"
                >
                  <BsLinkedin className="md:h-[28px] md:w-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {ylink !== " " && (
          <iframe
            className="md:block hidden"
            width="560"
            height="315"
            src={ylink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SpeakerModal;
