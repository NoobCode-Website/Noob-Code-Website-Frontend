// TeamsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Navbar/Nav';
import Footer from '../Footer/footer';
const TeamsPage = () => {
  const [teamData, setTeamData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const coreMembers = teamData.filter((member) => member.tag === 'core');
  const ncoreMembers = teamData.filter((member) => member.tag === 'ncore');

  return (
    <>
    <div><Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/></div>

<div className={`bg-inherit z-0 text-white text-center py-10 ${isMenuOpen ? 'pt-96' : ''}`}>
  <h1 className="text-3xl font-semibold mb-10 ">NoobCode Core Team</h1>
  <div className="flex flex-wrap justify-center">
    {coreMembers.map((member, index) => (
      <div key={index} className="flex  max-w-xs justify-center my-2 mx-3.5">
        <div
          className="border bg-white border-gray-300 rounded p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-md"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-72 h-3/4 "
          />
          <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
          {member.linkedin && member.linkedin.trim() !== '' && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 m-3 hover:text-blue-700 transform transition-transform hover:translate-y-[-5px]"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          )}
          {member.github && member.github.trim() !== '' && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 m-3 hover:text-gray-900 transform transition-transform hover:translate-y-[-5px]"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
          {member.instagram && member.instagram.trim() !== '' && (
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
  <h1 className="text-3xl text-white font-semibold mb-10">NoobCode Pillars</h1>
  <div className="flex flex-wrap justify-center">
    {ncoreMembers.map((member, index) => (
      <div key={index} className="flex max-w-xs justify-center my-2 mx-3.5">
        <div
          className="border bg-white border-gray-300 rounded-lg p-3 m-2 transform transition-transform hover:scale-105 hover:shadow-md"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-72 h-3/4 "
          />
          <h3 className="text-xl text-black font-semibold mt-2">{member.name}</h3>
          <p className="text-gray-800">{member.role}</p>
          {member.linkedin && member.linkedin.trim() !== '' && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 m-3 hover:text-blue-700 transform transition-transform hover:translate-y-[-5px]"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          )}
          {member.github && member.github.trim() !== '' && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 m-3 hover:text-gray-900 transform transition-transform hover:translate-y-[-5px]"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
          {member.instagram && member.instagram.trim() !== '' && (
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
<Footer></Footer>
    </>
  );
};

export default TeamsPage;
