import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import SpeakerCard from "./SpeakerCard";
import { useSelector } from "react-redux";

const Events = () => {
  const auth = useContext(AuthContext);
  const speakers = useSelector((state) => state.speaker.speaker);
  const { user } = auth;
  const [inputs, setInputs] = useState({
    activity: "",
    date: "",
    image: "",
    venue: "",
    footfall: "",
    youtube: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleAddEvent = async (e) => {
    e.preventDefault();

    try {
      const event = await axios.post(
        "http://localhost:5000/events/addevent",
        inputs,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      const speakerData = { event: inputs.activity, speaker: speakers };
      const speaker = await axios.post(
        "http://localhost:5000/events/addspeaker",
        speakerData,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log(speaker);
      console.log(event);

      navigate("/noobcodeadmin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-start text-white border-2 gap-10 bg-gradient-to-tr from-teal-600 to-indigo-900 border-blue-400 p-10 rounded-xl 2xl:w-[1120px] min-[360px]:w-[300px] md:w-[600px] ">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
        Add Event
      </h1>
      <div className="w-full flex flex-row items-center justify-around gap-10">
        <form
          action=""
          className="flex flex-col items-start  gap-10"
          onSubmit={handleAddEvent}
        >
          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="activity"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Session Name :
            </label>
            <input
              type="text"
              value={inputs.activity}
              onChange={handleChange}
              name="activity"
              id="activity"
              placeholder="Name"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="date"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Date :
            </label>
            <input
              type="date"
              value={inputs.date}
              onChange={handleChange}
              name="date"
              id="date"
              placeholder="Date"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="venue"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Venue :
            </label>
            <input
              type="text"
              name="venue"
              onChange={handleChange}
              value={inputs.venue}
              id="venue"
              placeholder="Venue"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="footfall"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Attendees Count:
            </label>
            <input
              type="number"
              name="footfall"
              onChange={handleChange}
              value={inputs.footfall}
              id="footfall"
              placeholder="footfall"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="youtube"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Youtube Link:
            </label>
            <input
              type="text"
              name="youtube"
              onChange={handleChange}
              value={inputs.youtube}
              id="youtube"
              placeholder="Youtube Link"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="image"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Event Poster:
            </label>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={inputs.image}
              id="image"
              placeholder="Event Poster"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>

          <button className="bg-violet-700 rounded-2xl text-white font-semibold text-center px-5 py-2">
            Add Event
          </button>
        </form>

        <img
          src={inputs.image}
          className="w-[350px] h-full object-cover "
          alt=""
        />
      </div>
      <Link to={"/noobcodeadmin/events/addspeaker"}>
        <button className="bg-violet-700 rounded-2xl text-white font-semibold text-center px-5 py-2">
          Add Speaker
        </button>
      </Link>
      <div className="flex flex-row flex-wrap gap-10 items-center">
        {speakers &&
          speakers.map((speaker, index) => {
            return (
              <div key={index}>
                <SpeakerCard speaker={speaker} index={index} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;
