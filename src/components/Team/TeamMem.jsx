// TeamsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Navbar/Nav';
const TeamsPage = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios
      .get("https://noob-code-website-backend.vercel.app/teams/getmembers") // Replace with your API endpoint
      .then((response) => {
        setTeamData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  return (
    <>
    <div><Header></Header></div>
    
   
    <div className="bg-white z-0 text-center py-10">
      <h1 className="text-3xl font-semibold mb-10 ">Our Team</h1>
      <div className="flex flex-wrap justify-center">
        {teamData.map((member, index) => (
          <div key={index} className="flex max-w-xs justify-center my-2 mx-3.5">
            <div
              className="border border-gray-300 rounded p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-72 h-3/4 "
              />
              <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transform transition-transform hover:translate-y-[-5px]"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 m-3 hover:text-gray-900 transform transition-transform hover:translate-y-[-5px]"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transform transition-transform hover:translate-y-[-5px]"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-semibold mb-10">Our Pillars</h1>
      <div className="flex flex-wrap justify-center">
        {teamData.map((member, index) => (
          <div key={index} className="flex max-w-xs justify-center my-2 mx-3.5">
            <div
              className="border border-gray-300 rounded p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-72 h-3/4 "
              />
              <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transform transition-transform hover:translate-y-[-5px]"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 m-3 hover:text-gray-900 transform transition-transform hover:translate-y-[-5px]"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transform transition-transform hover:translate-y-[-5px]"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TeamsPage;
