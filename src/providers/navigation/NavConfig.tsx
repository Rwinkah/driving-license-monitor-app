import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../../pages/login/Login";s
import App from "../../App";
import Main from "../../pages/Main";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
