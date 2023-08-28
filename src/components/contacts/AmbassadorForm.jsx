import axios from "axios";
import React, { useState } from "react";

const AmbassadorForm = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    college: "",

    year: "",
    email: "",
    phone: "",
    branch: "",
    linkedin: "",
    github: "",
    answer: "",
    resume: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandidate({ ...candidate, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://noob-code-website-backend.vercel.app/ambassadors/addambassadors",
        { ...candidate }
      );
      console.log("Form Data Submitted !");

      console.log(candidate);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-white border-2 border-blue-400 p-10 rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-row gap-3 items-center ">
              <label htmlFor="" className="text-xl font-semibold">
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={candidate.name}
                onChange={handleChange}
                placeholder="Name"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3 items-center">
              <label htmlFor="" className="text-xl font-semibold">
                College Name :
              </label>
              <input
                type="text"
                name="college"
                id="college"
                value={candidate.college}
                onChange={handleChange}
                placeholder="College"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
              />
            </div>

            <div className="flex flex-row items-center gap-20 ">
              <div className="flex flex-row gap-3 items-center">
                <label htmlFor="" className="text-xl font-semibold">
                  Presently Studying :
                </label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  value={candidate.branch}
                  onChange={handleChange}
                  placeholder="Course Name"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
                />
              </div>

              <div className="flex flex-row gap-3 items-center">
                <label htmlFor="" className="text-xl font-semibold">
                  Present Year :
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  value={candidate.year}
                  onChange={handleChange}
                  placeholder="Present Year"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
                />
              </div>
            </div>

            <div className="flex flex-row items-center  gap-20 ">
              <div className="flex flex-row gap-3 items-center">
                <label htmlFor="" className="text-xl font-semibold">
                  E-mail :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={candidate.email}
                  onChange={handleChange}
                  placeholder="eg : xyz@abc.com"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
                />
              </div>

              <div className="flex flex-row gap-3 items-center">
                <label htmlFor="" className="text-xl font-semibold">
                  Phone Number :
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={candidate.phone}
                  onChange={handleChange}
                  placeholder="Phone Number "
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
                />
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <label htmlFor="" className="text-xl font-semibold">
                LinkedIn Link :
              </label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                value={candidate.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Profile"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3 items-center">
              <label htmlFor="" className="text-xl font-semibold">
                Github Link :
              </label>
              <input
                type="text"
                name="github"
                id="github"
                value={candidate.github}
                onChange={handleChange}
                placeholder="Github Profile"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3 items-center">
              <label htmlFor="" className="text-xl font-semibold">
                Resume Link :
              </label>
              <input
                type="text"
                name="resume"
                id="resume"
                value={candidate.resume}
                onChange={handleChange}
                placeholder="Please Provide A Drive Link"
                className="rounded-lg h-10 w-[900px] bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xl font-semibold">
                Explain How would your Approach people to join this Community:
              </label>
              <textarea
                name="answer"
                id="answer"
                value={candidate.answer}
                onChange={handleChange}
                rows="10"
                cols="60"
                className="rounded-lg  bg-transparent border-2 border-blue-400 placeholder:text-white  text-xl"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-violet-700 flex items-center flex-row  px-4 py-2 rounded-xl text-xl font-semibold hover:bg-violet-300 hover:text-violet-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AmbassadorForm;
