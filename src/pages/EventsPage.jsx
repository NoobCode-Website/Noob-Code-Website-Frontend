import React  from "react";

import EventRoutes from "../components/events/EventRoutes";
import Sessions from "../components/events/subroutes/Sessions";

const EventsPage = () => {
  


  return (
    
    <div className="flex flex-col items-center gap-12 py-8">
      <div>
        <EventRoutes  />
      </div>
      <div>
        <Sessions />
      </div>

    </div>
  );
};

export default EventsPage;
