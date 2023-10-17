import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../../pages/login/Login";s
import App from "../../App";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};

export default NavConfig;
