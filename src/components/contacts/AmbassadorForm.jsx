import axios from "axios";
import React, { useState } from "react";

import { BsFillCheckSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AmbassadorForm = () => {
  const success = () => toast.success("Form Data Sent Successfully !" ,  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  const error = () => toast.error("Oops something went wrong" , {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  const navigate = useNavigate();
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
  const [emailValid, setEmailValid] = useState(false);
  const [mobileValid, setMobileValid] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandidate({ ...candidate, [name]: value });
    if (name === "email") {
      setEmailValid(validateEmail(value));
    }
    if (name === "phone") {
      setMobileValid(validateMobile(value));
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://noobcode-server-side.vercel.app/ambassadors/addambassadors",
        { ...candidate }
      );
      console.log("Form Data Submitted !");
      success();
      console.log(candidate);
      setTimeout(() => {
        navigate(0);
      } , 3000);
    } catch(err) {
      console.log(err);
      error();
    }
    
  };

  return (
    <div className="flex flex-col items-center text-white border-2 bg-gradient-to-tr from-teal-600 to-indigo-900 border-blue-400 p-10 rounded-xl 2xl:w-[1120px] min-[360px]:w-[300px] md:w-[600px] ">
      <form
        onSubmit={handleSubmit}
        className="min-[360px]:w-[300px] 2xl:w-[1040px]"
      >
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col  items-center xl:items-start gap-10">
            <div className="flex flex-col xl:flex-row gap-3 items-center ">
              <label
                htmlFor=""
                className="text-md md:text-lg xl:text-xl font-semibold"
              >
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={candidate.name}
                onChange={handleChange}
                placeholder="Name"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              />
            </div>

            <div className="flex flex-col xl:flex-row gap-3 items-center">
              <label
                htmlFor=""
                className="text-md md:text-lg xl:text-xl font-semibold"
              >
                College Name :
              </label>
              <input
                type="text"
                name="college"
                id="college"
                value={candidate.college}
                onChange={handleChange}
                placeholder="College"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              />
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-20 ">
              <div className="flex flex-col xl:flex-row gap-3 items-center">
                <label
                  htmlFor=""
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Presently Studying :
                </label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  value={candidate.branch}
                  onChange={handleChange}
                  placeholder="Course Name"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center">
                <label
                  htmlFor=""
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  Present Year :
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  value={candidate.year}
                  onChange={handleChange}
                  placeholder="Present Year"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-10  xl:gap-20 ">
              <div className="flex flex-col xl:flex-row gap-3 items-center">
                <label
                  htmlFor=""
                  className="text-md md:text-lg xl:text-xl font-semibold"
                >
                  E-mail :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={candidate.email}
                  onChange={handleChange}
                  placeholder="eg : xyz@abc.com"
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
                {emailValid && (
                  <span className="flex items-center ml-2 text-green-500">
                    <BsFillCheckSquareFill className="h-5 w-5" />
                  </span>
                )}
              </div>

              <div className="flex flex-col xl:flex-row gap-3 items-center">
                <label
                  htmlFor=""
                  className="text-md md:text-lg  xl:text-xl font-semibold"
                >
                  Phone Number :
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={candidate.phone}
                  onChange={handleChange}
                  placeholder="Phone Number "
                  className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
                />
                {mobileValid && (
                <span className="flex items-center ml-2 text-green-500">
                  <BsFillCheckSquareFill className="h-5 w-5" />
                </span>
              )}
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-3 items-center">
              <label
                htmlFor=""
                className="text-md md:text-lg xl:text-xl font-semibold"
              >
                LinkedIn Link :
              </label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                value={candidate.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Profile"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              />
            </div>

            <div className="flex flex-col xl:flex-row gap-3 items-center">
              <label
                htmlFor=""
                className="text-md md:text-lg xl:text-xl font-semibold"
              >
                Github Link :
              </label>
              <input
                type="text"
                name="github"
                id="github"
                value={candidate.github}
                onChange={handleChange}
                placeholder="Github Profile"
                className="rounded-lg h-10 bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              />
            </div>

            <div className="flex flex-col xl:flex-row gap-3 items-center">
              <label
                htmlFor=""
                className="text-md md:text-lg xl:text-xl font-semibold"
              >
                Resume Link :
              </label>
              <input
                type="text"
                name="resume"
                id="resume"
                value={candidate.resume}
                onChange={handleChange}
                placeholder="Please Provide A Drive Link"
                className="rounded-lg h-10  xl:w-[900px] bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              />
            </div>

            <div className="flex flex-col xl:items-start items-center gap-3">
              <label
                htmlFor=""
                className="text-md md:text-lg xl:text-xl  w-[250px] md:w-[400px] xl:w-[700px]"
              >
                Explain How would your Approach people to join this Community:
                <br/>
                What benefits you think you got after joining <span className="font-semibold italic"> NoobCode Community</span> ? 
              </label>
              <textarea
                name="answer"
                id="answer"
                value={candidate.answer}
                onChange={handleChange}
                rows="10"
                cols="60"
                className="rounded-lg  bg-transparent border-2 border-blue-400 placeholder:text-slate-300 text-md md:text-lg xl:text-xl min-[360px]:w-[280px] xl:w-[900px] px-4 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-violet-700 flex items-center flex-row  px-4 py-2 rounded-xl text-xl  font-semibold hover:bg-violet-300 hover:text-violet-700"
          >
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AmbassadorForm;
