import React from "react";
import EventCard from "../components/events/EventCard";

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
        <h1>Our Events</h1>
      </div>

      <div className="flex flex-col items-center gap-16">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default EventsPage;
