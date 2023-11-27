import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import EventRoutes from "../EventRoutes";
import ContestCard from "../contests/ContestCard";
import axios from "axios";

const Contests = ({ isMenuOpen }) => {
  const [contestData, setContestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://noobcode-server-side.vercel.app/events/getcontests")
      .then((res) => {
        setContestData(res.data.data);
    
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  setTimeout(()=>{
    setIsLoading(false);
  } , 3000)
  return (
    <div
      className={`flex overflow-x-hidden flex-col items-center gap-12 py-5  ${
        isMenuOpen ? "pt-96" : "2xl:pt-[120px]"
      }`}
    >
      <div className="flex flex-col items-center gap-12 py-5">
        <div>
          <EventRoutes />
        </div>

        <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110  md:text-4xl lg:text-3xl ">
          <h1>Our Contests</h1>
        </div>

        <div className="flex flex-col-reverse items-center gap-20">
          {isLoading ? (
           <div className="h-[500px] flex justify-center items-center">
           <PropagateLoader color="#fff" />
         </div>
          ) : (
            contestData.map((contest, index) => {
              return (
                <ContestCard
                  key={index}
                  index={index}
                  name={contest.contest}
                  date={contest.date}
                  description={contest.description}
                  attendees={contest.footfall}
                  link={contest.hackerrank}
                  image={contest.image}
                  time={contest.time}
                  venue={contest.venue}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Contests;
