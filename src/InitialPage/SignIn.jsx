/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { LoginImage, Logo, MailIcon } from "../EntryFile/imagePath";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SignInPage = (props) => {
  const [eye, seteye] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };

  //   const onSubmit = (data) => {
  //     props.history.push("/dream-pos/dashboard");
  //   };

  return (
    <>
      <div className="main-wrapper">
        <Helmet>
          <title>SignIn -GoShoppIn</title>
          <meta name="description" content="SignIn page" />
        </Helmet>
        <div className="account-content">
          <div className="login-wrapper">
            <div className="login-content">
              <div className="login-userset">
                <form>
                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4>Please login to your account</h4>
                  </div>
                  <div className="form-login">
                    <label>Email</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        className={`  "is-invalid" : ""}`}
                        placeholder="Enter your email address"
                        defaultValue="admin@dreamguystech.com"
                      />
                      <img src={MailIcon} alt="img" />
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={eye ? "password" : "text"}
                        className={`   "is-invalid" : ""}`}
                        placeholder="Enter your password"
                        defaultValue={123456}
                      />
                      <span
                        onClick={onEyeClick}
                        className={`fas toggle-password ${
                          eye ? "fa-eye-slash" : "fa-eye"
                        } `}
                      />
                    </div>
                  </div>
                  <div className="form-login">
                    <div className="alreadyuser">
                      <h4>
                        <Link to="/forgetPassword" className="hover-a">
                          Forgot Password?
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="form-login">
                    <button className="btn btn-login">Sign In</button>
                  </div>
                </form>
                <div className="signinform text-center">
                  <h4>
                    Don’t have an account?{" "}
                    <Link to="/signUp" className="hover-a">
                      Sign Up
                    </Link>
                  </h4>
                </div>
                <div className="form-setlogin">
                  <h4>Or sign up with</h4>
                </div>
              </div>
            </div>
            <div className="login-img">
              <img src={LoginImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
