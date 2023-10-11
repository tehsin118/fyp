import React from "react";
import { Route, Switch } from "react-router-dom";

import SignIn from "./SignIn";
import ForgetPassword from "./ForgetPassword";
import SignUp from "./SignUp";
import Pos from "./pos/pos";
import DefaultLayout from "./Sidebar/DefaultLayout";
import Error404 from "../MainPage/ErrorPage/Error404";
export default function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   if (
  //     location.pathname.includes("signIn") ||
  //     location.pathname.includes("signUp") ||
  //     location.pathname.includes("index-three") ||
  //     location.pathname.includes("forgetPassword")
  //   ) {
  //     document.body.classList.add("account-page");
  //   }
  //   return () => {
  //     document.body.classList.remove("account-page");
  //   };
  // }, [location.pathname]);

  // if (location.pathname === "/") {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <Switch>
      <Route path="/signIn" component={SignIn} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" component={DefaultLayout} />

      <Route path="*" component={Error404} />
      <Route path="/pos" component={Pos} />
    </Switch>
  );
}
