import React from "react";
import AddEvents from "../components/AddEvents";
const EventPage = ({ isMenuOpen }) => {
  return (
    <>
      <div
        className={`${
          isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
        } flex   overflow-x-clip flex-col  items-center justify-center xl:gap-0 gap-8`}
      >
        <AddEvents />
      </div>
    </>
  );
};

export default EventPage;
