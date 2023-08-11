import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../navBar/navbar";

const Signup = () => {
  return (
    <>
    {<Navbar/>}
    <div className="body">
        <div className="Menu">
      <div className="SignupContainer">
        <span className="head">
         
          <Link to="/">           
            <img
              className="backbutton"
              src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EBack Arrow%3C/title%3E%3Cdesc%3EA solid styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' d='M32 64A32 32 0 1 0 0 32a32 32 0 0 0 32 32zM20.634 24.54a2 2 0 0 1 2.732 2.921L18.511 32H42a4 4 0 0 0 0-8 2 2 0 0 1 0-4 8 8 0 0 1 0 16H18.509l4.857 4.54a2 2 0 0 1-2.732 2.921L10.513 34z' fill='%23202020'%3E%3C/path%3E%3C/svg%3E"
              alt="Back Arrow"
              width="40"
              height="40"  />
          </Link>
          <h1>SIGNUP</h1>
        </span>
        <form action="">
          <div className="textField">
            <label htmlFor="Name">Enter Your name</label>
            <input type="Name" name="Name" id="Name" />
          </div>

          <div className="textField">
            <label htmlFor="Email">Enter Your Email</label>
            <input type="email" name="Email" id="Email" />
          </div>

          <div className="textField">
            <label htmlFor="Password">Enter Your Password</label>
            <input
              type="Password"
              name="Password"
              id="Password"
              defaultValue=""
            />
          </div>

          <button type="button" className="SignupLink">
            Signup
          </button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
