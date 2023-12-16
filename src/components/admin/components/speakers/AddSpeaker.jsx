import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpeaker } from "../../../../redux/slices/speaker";
import { useNavigate } from "react-router-dom";

const AddSpeaker = ({ isMenuOpen }) => {
  const speakers = useSelector((state) => state.speaker.speaker);
  const dispatch = useDispatch();
  const [qualification, setQualification] = useState([""]);

  const handleAddQualification = () => {
    setQualification([...qualification, ""]);
  };

  const handleRemoveQualification = (index) => {
    const updatedQualification = [...qualification];
    updatedQualification.splice(index, 1);
    setQualification(updatedQualification);
  };

  const handleQualificationChange = (index, e) => {
    const updatedQualification = [...qualification];
    updatedQualification[index] = e.target.value;
    setQualification(updatedQualification);
  };

  const [event, setEvent] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    session: "",
    date: "",
    ylink: "",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  });
  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleApply = (e) => {
    e.preventDefault();
    const {
      name,
      image,
      session,
      date,
      ylink,
      github,
      linkedin,
      twitter,
      instagram,
    } = inputs;
    const speaker = {
      name,
      image,
      session,
      date,
      ylink,
      github,
      linkedin,
      twitter,
      instagram,
      qualification,
    };
    dispatch(addSpeaker(speaker));
    console.log(speakers);
    navigate("/noobcodeadmin/events");
  };
  console.log(qualification);
  return (
    <div
      className={`${
        isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
      } flex   overflow-x-clip flex-col  items-center justify-center xl:gap-0 gap-8`}
    >
      <h1 className="text-3xl font-bold text-white pb-5">Add Speaker</h1>
      <div className="flex flex-row bg-gradient-to-tr rounded-xl  from-teal-600 to-indigo-900 items-center justify-center border-2 border-blue-500  py-10 px-10 gap-5 w-2/5">
        <form
          action=""
          className="flex flex-col items-start  gap-10 text-white"
        >
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
              value={inputs.name}
              onChange={handleInputChange}
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400  placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor="event"
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Event Name:
            </label>
            <input
              type="text"
              name="event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              id="event"
              placeholder="Event"
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
              value={inputs.session}
              onChange={handleInputChange}
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
              value={inputs.image}
              onChange={handleInputChange}
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
              value={inputs.date}
              onChange={handleInputChange}
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
              value={inputs.ylink}
              onChange={handleInputChange}
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
              value={inputs.github}
              onChange={handleInputChange}
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
              value={inputs.linkedin}
              onChange={handleInputChange}
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
              value={inputs.twitter}
              onChange={handleInputChange}
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
              value={inputs.instagram}
              onChange={handleInputChange}
              placeholder="Instagram"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-3 items-center ">
            <label
              htmlFor=""
              className="text-md md:text-lg xl:text-xl font-semibold"
            >
              Qualifications :
            </label>
            <div className="flex flex-col items-start gap-6">
              {qualification.map((qualificat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={qualificat}
                    onChange={(e) => handleQualificationChange(index, e)}
                    placeholder={`Qualification ${index + 1}`}
                    className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                  />
                  <button
                    type="button"
                    className="px-4 py-1 bg-violet-600 hover:bg-violet-900 font-semibold rounded-xl text-2xl"
                    onClick={handleAddQualification}
                  >
                    +
                  </button>
                  {qualification.length !== 1 && (
                    <button
                      type="button"
                      className="px-4 py-1 bg-red-600 hover:bg-red-950 font-semibold rounded-xl text-2xl"
                      onClick={() => handleRemoveQualification(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleApply}
            className="bg-violet-700 px-5 py-2 rounded-xl w-1/3 mx-auto text-xl font-medium"
          >
            Add Speaker
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpeaker;
