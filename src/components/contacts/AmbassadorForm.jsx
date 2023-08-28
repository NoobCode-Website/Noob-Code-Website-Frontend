import React, { useState } from "react";

const AmbassadorForm = () => {

    const [candidate , setCandidate] = useState({
      name : "",
      collegeName : "",
      courseName : "",
      presentYear : "",
      email : "",
      phoneNumber : "",
      linkedInLink : "",
      githubLink : "",
      approach : ""
    });

  return (
    <div className="text-white border-2 border-blue-400 p-10 rounded-xl">
      <form action="" >
        <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-row gap-3 items-center ">
            <label htmlFor="" className="text-xl font-semibold">
              Name :
            </label>
            <input
              type="text"
              name=""
              id=""
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
              name=""
              id=""
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
                name=""
                id=""
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
                name=""
                id=""
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
                name=""
                id=""
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
                name=""
                id=""
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
              name=""
              id=""
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
              name=""
              id=""
              placeholder="Github Profile"
              className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-white px-4 text-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-xl font-semibold">
              Explain How would your Approach people to join this Community:
            </label>
            <textarea
              rows="10"
              cols="60"
              className="rounded-lg  bg-transparent border-2 border-blue-400 placeholder:text-white  text-xl"
            />
          </div>
       
        </div>
        
        <button
          
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
