import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
    role: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { login, logout, signup } = auth;
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs);
      navigate("/noobcodeadmin");
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/noobcodeadmin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={isLogin ? handleLogin : handleSubmit}
        className="flex flex-col items-center w-1/4 justify-center gap-5 px-10 py-10 border-2 border-blue-400 rounded-lg"
      >
        {!isLogin && (
          <div className="flex flex-col items-start text-white gap-1 w-full">
            <label htmlFor="" className="text-xl font-semibold">
              Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={inputs.name}
              placeholder="Name"
              className="rounded-lg h-10 bg-transparent border-2 w-full border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              onChange={handleChange}
            />
          </div>
        )}
        {!isLogin && (
          <div className="flex flex-col items-start text-white gap-1 w-full">
            <label htmlFor="role" className="text-xl font-semibold">
              Role :
            </label>
            <input
              type="text"
              name="role"
              id="role"
              value={inputs.role}
              placeholder="Role"
              className="rounded-lg h-10 bg-transparent border-2 w-full border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              onChange={handleChange}
            />
          </div>
        )}
        <div className="flex flex-col items-start text-white gap-1 w-full">
          <label htmlFor="email" className="text-xl font-semibold">
            Email :
          </label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            id="email"
            placeholder="Email"
            className="rounded-lg h-10 bg-transparent border-2 w-full border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-start text-white gap-1 w-full">
          <label htmlFor="password" className="text-xl font-semibold">
            Password :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={inputs.password}
            className="rounded-lg h-10 w-full bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
            onChange={handleChange}
          />
        </div>
        {!isLogin && (
          <div className="flex flex-col items-start text-white gap-1 w-full">
            <label htmlFor="image" className="text-xl font-semibold">
              Image Link :
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={inputs.image}
              placeholder="Image"
              className="rounded-lg h-10 w-full bg-transparent border-2 border-blue-400 placeholder:text-slate-300 px-4 text-md xl:text-xl md:text-lg"
              onChange={handleChange}
            />
          </div>
        )}

        <button
          type="submit"
          className="px-5 py-2 text-xl font-semibold text-center text-white bg-violet-700 rounded-xl hover:bg-violet-500"
        >
          {isLogin ? "Login" : "Register"}
        </button>
        <p className="text-white">
          {isLogin ? (
            <>
              Don't have an Account ?{" "}
              <span
                className="text-orange-500 font-medium text-lg cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Register Now !
              </span>
            </>
          ) : (
            <>
              Have an Account already ?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-orange-500 font-medium text-lg cursor-pointer"
              >
                Login Now !
              </span>
            </>
          )}
        </p>
      </form>
    </>
  );
};
export default Auth;
