/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../InitialPage/App";
import "../assets/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/js/bootstrap.bundle.min.js";
import "../assets/css/line-awesome.min.css";
import "../assets/css/style.css";
import SignUp from "../InitialPage/SignUp";
import Pos from "../InitialPage/pos/pos";

const MainApp = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/pos" component={Pos} />
    </Routes>
    // </Router>
  );
};

export default MainApp;
