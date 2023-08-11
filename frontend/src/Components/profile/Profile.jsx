import React, { useState } from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");

  console.log(name, email);

  const [values, Setvalues] = useState({
    email: "",
    password: "",
  });

  const [error, SetError] = useState("");

  const navigate = useNavigate();

  const HandleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        navigate("/UserDashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="Body">
        <div className="Menu">
          <div className="Container">
            <h1>Profile </h1>
            <div style={{ color: "red" }}>{error && error}</div>

            <form onSubmit={HandleSubmit} action="">


              
              <div className="row">
                <div className="profilephoto col-lg-4">
                  <img
                    src={"/background.jpg"}
                    width="100px"
                    height="100px"
                    alt="Profile"
                    className="profile-image mr-2"
                  />

                
  <label htmlFor="inputGroupFile01" className="bi bi-upload">
<h5>Upload</h5>
<input
  type="file"
  id="inputGroupFile01"
  className="visually-hidden"
  onChange={e => setData({ ...data, image: e.target.files[0] })}/>
</label>





                </div>

                <div className="textField col-lg-4 ">
                  <label htmlFor="Email">Full Name</label>
                  <input
                    autoComplete="true"
                    onChange={(e) => {
                      SetName(e.target.value);
                    }}
                    type="email"
                    name="Email"
                    id="Email"
                  />
                </div>

                <div className="textField col-lg-4 ">
                  <label htmlFor="Password">Your Email</label>
                  <input
                    onChange={(e) => {
                      SetEmail(e.target.value);
                    }}
                    type="Password"
                    name="Password"
                    id="Password"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4"></div>

                <div className="col-lg-4">   <button type="submit" className="Loginlink">
                  {" "}
                  update{" "}
                </button>{" "}</div>
              </div>
     
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
