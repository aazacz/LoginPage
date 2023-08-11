import React from "react";
import "./AdminLogin.css";
import Navbar from "../navBar/navbar";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      {<Navbar />}
      <div className="body">
        <div className="Menu">
          <div className="AdminloginContainer">
            <h3>ADMIN LOGIN</h3>
            <form action="">
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

           <Link to={"dashboard"}>   <button type="button" className="LoginLink">
                LOGIN
              </button></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
