import React  from "react";

import EventRoutes from "../components/events/EventRoutes";
import Sessions from "../components/events/subroutes/Sessions";

const EventsPage = ({isMenuOpen}) => {
  


  return (
    
    <div className={`flex flex-col items-center gap-12 py-8  ${isMenuOpen ? 'pt-96' : '2xl:pt-[150px]'}`}>
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
