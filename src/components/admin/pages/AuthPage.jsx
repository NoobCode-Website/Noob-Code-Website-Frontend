import React from "react";
import Auth from "../components/Auth";

const AuthPage = ({ isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? "pt-96" : "2xl:pt-[150px]"
      } flex   overflow-x-clip flex-col  items-center justify-center xl:gap-0 gap-8`}
    >
      <Auth />
    </div>
  );
};

export default AuthPage;
