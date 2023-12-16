import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeamPage = ({ isMenuOpen }) => {
  const auth = useContext(AuthContext);
  const { user } = auth;
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    image: "",
    tag: "",
    linkedin: "",
    github: "",
    instagram: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const member = await axios.post(
        "http://localhost:5000/teams/addmember",
        inputs,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log(member);
      navigate("/team");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`${
        isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
      } flex   overflow-x-clip flex-col  items-center justify-center xl:gap-0 gap-8 text-white`}
    >
      <h1 className="text-2xl font-semibold pb-5">Add Team Member</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-start bg-gradient-to-tr from-teal-600 to-indigo-900  gap-10 border-2 border-blue-400 rounded-xl  px-10 py-10"
      >
        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="name"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Member Name :
          </label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            id="name"
            placeholder="Name"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="role"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Member Role :
          </label>
          <input
            type="text"
            value={inputs.role}
            onChange={handleChange}
            name="role"
            id="role"
            placeholder="Role"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="image"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Member Image :
          </label>
          <input
            type="text"
            value={inputs.image}
            onChange={handleChange}
            name="image"
            id="image"
            placeholder="Image"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="tag"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Team Tag {"(Core,Non-Core)"}:
          </label>
          <input
            type="text"
            value={inputs.tag}
            onChange={handleChange}
            name="tag"
            id="tag"
            placeholder="Team Tag"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="linkedin"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            LinkedIn URL:
          </label>
          <input
            type="text"
            value={inputs.linkedin}
            onChange={handleChange}
            name="linkedin"
            id="linkedin"
            placeholder="LinkedIn"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="github"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            GitHub URL:
          </label>
          <input
            type="text"
            value={inputs.github}
            onChange={handleChange}
            name="github"
            id="github"
            placeholder="GitHub"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-3 items-center ">
          <label
            htmlFor="Instagram"
            className="text-md md:text-lg xl:text-xl font-semibold"
          >
            Instagram URL:
          </label>
          <input
            type="text"
            value={inputs.instagram}
            onChange={handleChange}
            name="instagram"
            id="instagram"
            placeholder="Instagram"
            className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
          />
        </div>
        <button
          type="submit"
          className="w-1/3 mx-auto bg-violet-500 px-4 py-2 text-xl font-semibold rounded-lg"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default TeamPage;
