import React from "react";
import Events from "../components/admin/Events";

const AdminPage = ({ isMenuOpen }) => {
  return (
    <>
      <div
        className={`${
          isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
        } flex   overflow-x-clip flex-col  items-center justify-center xl:gap-0 gap-8`}
      >
        <Events />
      </div>
    </>
  );
};

export default AdminPage;
