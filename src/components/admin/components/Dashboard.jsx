import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const adminRoutes = [
    {
      name: "Manage Events",
      path: "/noobcodeadmin/events",
    },
    {
      name: "Manage Team Members",
      path: "/noobcodeadmin/team",
    },
    {
      name: "Manage Outsources",
      path: "/noobcodeadmin/outsources",
    },
  ];

  const auth = useContext(AuthContext);
  const { logout, user } = auth;
  console.log(user.name);
  return (
    <div className="flex flex-col items-center justify-center w-4/5 gap-20">
      <div className="flex flex-row w-full items-center justify-between gap-10">
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
        {user != null && (
          <h1 className="text-3xl font-semibold text-white">
            Welcome {user?.role} , {user?.name}
          </h1>
        )}
        <div className="flex flex-row items-center gap-2">
          <img
            src={user?.image}
            className="w-10 rounded-full object-cover"
            alt=""
          />
          <button
            onClick={logout}
            className="bg-red-800 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center gap-10 justify-evenly flex-wrap">
        {adminRoutes.map((route, index) => {
          return (
            <Link key={index} to={route.path}>
              <div className="w-[200px]  h-[200px] border-2 rounded-2xl bg-transparent hover:bg-white hover:bg-opacity-20 cursor-pointer p-5 flex items-center justify-center">
                <h1 className="text-center  text-white text-2xl">
                  {route.name}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
