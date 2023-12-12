import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../../pages/login/Login";s
import App from "../../App";
import Main from "../../pages/Main";
import DriversDetails from "../../pages/details/DriversDetails";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="/drivers-details/:id" element={<DriversDetails />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
