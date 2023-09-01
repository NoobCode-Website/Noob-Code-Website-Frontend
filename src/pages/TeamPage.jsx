// TeamsPage.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamsPage = ({ isMenuOpen }) => {
  const [teamData, setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://noobcode-server-side.vercel.app/teams/getmembers") // Replace with your API endpoint
      .then((response) => {
        setTeamData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, []);

  const coreMembers = teamData.filter((member) => member.tag === "core");
  const ncoreMembers = teamData.filter((member) => member.tag === "ncore");

  return (
    <>
      {isLoading ? (
        <div
          role="status"
          className="mt-[150px] h-[1000px] flex flex-col items-center justify-center"
        >
          <svg
            aria-hidden="true"
            className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div
          className={`bg-inherit z-0 text-white  text-center py-10 ${
            isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
          }`}
        >
          <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 mb-10 duration-500 cursor-pointer">
            <h1>NoobCode Core Team</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {coreMembers.map((member, index) => (
              <div
                key={index}
                className="flex  max-w-xs justify-center my-2 mx-3.5"
              >
                <div className="border bg-white border-gray-300 rounded p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-72 h-3/4 "
                  />
                  <h3 className="text-xl font-semibold mt-2 text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  {member.linkedin && member.linkedin.trim() !== "" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 m-3 hover:text-blue-700 transform transition-transform hover:translate-y-[-5px]"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                  )}
                  {member.github && member.github.trim() !== "" && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 m-3 hover:text-gray-900 transform transition-transform hover:translate-y-[-5px]"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  )}
                  {member.instagram && member.instagram.trim() !== "" && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 m-3 hover:text-pink-700 transform transition-transform hover:translate-y-[-5px]"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 my-10 duration-500 cursor-pointer">
            <h1>NoobCode Pillars</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {ncoreMembers.map((member, index) => (
              <div
                key={index}
                className="flex max-w-xs justify-center my-2 mx-3.5"
              >
                <div className="border bg-white border-gray-300 rounded-lg p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-72 h-3/4 "
                  />
                  <h3 className="text-xl text-black font-semibold mt-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-800">{member.role}</p>
                  {member.linkedin && member.linkedin.trim() !== "" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 m-3 hover:text-blue-700 transform transition-transform hover:translate-y-[-5px]"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                  )}
                  {member.github && member.github.trim() !== "" && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 m-3 hover:text-gray-900 transform transition-transform hover:translate-y-[-5px]"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  )}
                  {member.instagram && member.instagram.trim() !== "" && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 m-3 hover:text-pink-700 transform transition-transform hover:translate-y-[-5px]"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TeamsPage;
