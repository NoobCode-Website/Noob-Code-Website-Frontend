import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../EventCard";

const Sessions = () => {
  const [eventData, setEventData] = React.useState([]);
  const [speakerData, setSpeakerData] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://noob-code-website-backend.vercel.app/events/getevents")
      .then((res) => {
        setEventData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://noob-code-website-backend.vercel.app/events/getspeakers")
      .then((res) => {
        setSpeakerData(res.data.data);
        setIsLoading(false);
        console.log(res.data.data) ;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   if (isLoading) {
     return 
   }
  if (eventData.length === 0 || speakerData.length === 0) {
    console.log("Loading");
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-12 py-8">
        <div className="font-bold text-white text-3xl md:text-4xl lg:text-3xl tracking-widest hover:scale-x-110 ">
          <h1>Our Events</h1>
        </div>

        <div className="flex flex-col items-center gap-20">
  
          {eventData.map((event, index) => {
            return (
              <EventCard
                key={index}
                index={index}
                speakers={speakerData}
                name={event.activity}
                ylink={event.youtube}
                image={event.image}
                date={event.date}
                venue={event.venue}
                attendees={event.footfall}
                isLoading={isLoading}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
