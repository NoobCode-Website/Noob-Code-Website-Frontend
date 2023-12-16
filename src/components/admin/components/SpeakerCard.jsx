import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeSpeaker } from "../../../redux/slices/speaker";

const SpeakerCard = ({ speaker, index }) => {
  const speakers = useSelector((state) => state.speaker.speaker);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeSpeaker(speaker.name));
  };
  console.log(speakers);
  return (
    <div className="flex flex-col justify-center items-center gap-2 border px-4 py-2 rounded-xl">
      <img
        src="https://i.postimg.cc/NjfrBZjg/Bag.jpg"
        alt=""
        className="w-32 h-full rounded-xl object-cover"
      />
      <h1>{speaker.name}</h1>
      <ul className="flex flex-col items-start ">
        {speaker.qualification.map((qual, index) => (
          <li key={index}>{qual.value}</li>
        ))}
      </ul>
      <div className="flex flex-row gap-2 flex-wrap items-center">
        <a
          target="_blank"
          rel="noreferrer"
          href={speaker.twitter}
          className="px-3 py-2 rounded-full bg-[#3e94df] font-bold text-xl text-white hover:bg-white hover:text-[#3e94df] "
        >
          <BsTwitter className="md:h-[24px] md:w-[24px]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={speaker.github}
          className="px-4 py-2 rounded-full bg-[#0c0b0f] font-bold text-xl text-white hover:bg-white hover:text-[#0c0b0f]"
        >
          <BsGithub className="md:h-[24px] md:w-[24px]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={speaker.linkedin}
          className="px-4 py-2 rounded-full bg-[#215594] font-bold text-xl text-white hover:bg-white hover:text-[#215594]"
        >
          <BsLinkedin className="md:h-[24px] md:w-[24px]" />
        </a>
      </div>
      <button className="text-white px-4 py-1 bg-violet-600 rounded-lg">
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="text-white px-4 py-1 bg-red-600 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default SpeakerCard;
