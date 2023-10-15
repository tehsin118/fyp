/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  LoginImage,
  // Logo,
  MailIcon,
  Users1,
} from "../EntryFile/imagePath";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [eye, seteye] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };

  return (
    <>
      <div className="main-wrapper">
        <Helmet>
          <title>SignUp - GoShoppIn</title>
          <meta name="description" content="SignUp page" />
        </Helmet>
        <div className="account-content">
          <div className="login-wrapper">
            <div className="login-content">
              <div className="login-userset">
                <form>
                  <div className="login-logo">
                    {/* <img src={Logo} alt="img" /> */}
                  </div>
                  <div className="login-userheading">
                    <h3>Create an Account</h3>
                  </div>
                  <div className="form-login">
                    <label>Full Name</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        className={`  "is-invalid" : ""}`}
                        placeholder="Enter your full name"
                      />
                      <img src={Users1} alt="img" />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Email</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        className={`   "is-invalid" : ""}`}
                        placeholder="Enter your email address"
                      />
                      <img src={MailIcon} alt="img" />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={eye ? "password" : "text"}
                        className={`   "is-invalid" : ""}`}
                        placeholder="Enter your password"

                        // className="pass-input"
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
                    <button type="submit" className="btn btn-login">
                      Sign Up
                    </button>
                  </div>
                  <div className="signinform text-center">
                    <h4>
                      Already a user?{" "}
                      <Link to="/signIn" className="hover-a">
                        Sign In
                      </Link>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
            <div className="login-img">
              <img src={LoginImage} alt="img" />
            </div>
          </div>
        </div>
      </div>

      {/* <ul>
        <li className="odd">
          <div className="header">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium assumenda debitis molestiae quasi facilis deleniti!
              Amet aperiam repellendus dolor? Rem.
            </p>
          </div>
          <div className="details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              tenetur fuga. Animi ex ut praesentium eveniet, corrupti placeat.
              Laudantium officia dolores minus a, soluta obcaecati ex eligendi
              molestias ducimus porro!
            </p>
            <img src="" alt="" />
          </div>
        </li>
      </ul> */}
    </>
  );
};

export default SignUp;
