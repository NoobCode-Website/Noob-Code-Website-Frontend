import React from "react";
import Events from "../components/AddEvents";
import Auth from "../components/Auth";
import Dashboard from "../components/Dashboard";

const AdminPage = ({ isMenuOpen }) => {
  return (
    <>
      <div
        className={`${
          isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
        } flex   overflow-x-clip flex-col  items-center justify-center xl:gap-0 gap-8`}
      >
        <Dashboard />
      </div>
    </>
  );
};

export default AdminPage;
