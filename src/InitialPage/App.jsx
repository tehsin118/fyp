import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "./SignIn";
import ForgetPassword from "./ForgetPassword";
import SignUp from "./SignUp";
import Pos from "./pos/pos";
import DefaultLayout from "./Sidebar/DefaultLayout";
import Error404 from "../MainPage/ErrorPage/Error404";
export default function App() {
  return (
    <Routes>
      <Route path="/signIn" component={SignIn} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" component={DefaultLayout} />

      <Route path="*" component={Error404} />
      <Route path="/pos" component={Pos} />
    </Routes>
  );
}
