import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../EventCard";
import { PropagateLoader } from "react-spinners";

const Sessions = () => {
  const [eventData, setEventData] = React.useState([]);
  const [speakerData, setSpeakerData] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://noobcode-server-side.vercel.app/events/getevents")
      .then((res) => {
        setEventData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://noobcode-server-side.vercel.app/events/getspeakers")
      .then((res) => {
        setSpeakerData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      <div className="flex flex-col items-center gap-12 py-3">
        <div className="font-bold text-white text-3xl md:text-4xl lg:text-3xl tracking-widest hover:scale-x-110 ">
          <h1>Our Events</h1>
        </div>

        <div className="flex flex-col-reverse items-center gap-20">
          {isLoading ? (
            <div className="h-[500px] flex justify-center items-center">
              <PropagateLoader color="#fff" />
            </div>
          ) : (
            eventData.map((event, index) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
