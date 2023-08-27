import React, { useState, useEffect } from "react"
import axios from "axios"
const linkStyle = {
  color: "#999",
  textDecorationStyle: "dotted",
}

const Team = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = () => {
      axios.get("https://noob-code-website-backend.vercel.app/teams/getmembers")
        .then(response => {
          setData(response.data.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  
    getData();
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#222",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {data.length
        ? data.map((teamMember, i) => (
            <div
              key={i}
              style={{
                width: "50%",
                margin: ".5em 0",
                display: "flex",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                fontSize: "min(4vw,1.5em)",
                color: "#6f6f6f",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://i.postimg.cc/wB5cm9R2/IMG-20230422-171728-removebg-preview.png"
                alt={teamMember.name}
                style={{ height: "10em", borderRadius: "50%" }}
              />
              <div
                style={{
                  minWidth: "12em",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <span>Name: {teamMember.name}</span>
                <span>Specialty: {teamMember.role}</span>
                <a
                  href={teamMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Connect @ LinkedIn of {teamMember.name}
                </a>
                <a
                  href={teamMember.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {teamMember.name}'s Github
                </a>
              </div>
            </div>
          ))
        : null}
    </main>
  )
}

export default Team