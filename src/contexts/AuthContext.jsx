import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  console.log(user);
  const login = async (inputs) => {
    const res = await axios.post("http://localhost:5000/auth/login", inputs);
    const { email, token, role, name, image } = res.data.data;
    setUser({ email, token, role, name, image });
    localStorage.setItem(
      "user",
      JSON.stringify({ email, token, role, name, image })
    );
    console.log(res);
  };

  const signup = async (inputs) => {
    const res = await axios.post("http://localhost:5000/auth/signup", inputs);
    const { email, token, role, name, image } = res.data.data;
    setUser({ email, token, role, name, image });
    localStorage.setItem(
      "user",
      JSON.stringify({ email, token, role, name, image })
    );
    console.log(res);
  };

  const logout = async () => {
    await axios.delete("http://localhost:5000/auth/logout");
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (userDetails) {
      setUser(userDetails);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, signup, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
