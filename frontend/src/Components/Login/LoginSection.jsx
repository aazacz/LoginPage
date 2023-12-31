import React, { useState } from "react";
import Navbar from "../navBar/navbar";
import "./loginSection.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";

const LoginSection = () => {
  const [values, Setvalues] = useState({
    email: "",
    password: ""
  });

const [error,SetError] = useState("")

const navigate = useNavigate()
const dispatch = useDispatch()

  const HandleSubmit=(event)=>{
  event.preventDefault();
  console.log(values);
  let loginDetails = values
  console.log(values);
  console.log("loginDetails"+loginDetails);
 
      axios.post("http://localhost:5000/login",loginDetails)
           .then((res)=>{
              console.warn("result",res.data);
              console.warn("result",res.data.token);
              localStorage.setItem('login',JSON.stringify({
                login:true,
                token:res.data.token
              })  
              )

              if (localStorage.getItem('login')) {
                const loginData = JSON.parse(localStorage.getItem('login'));
                if (loginData.login && loginData.token) {
                  dispatch(loginUser({
                          name: res.data.name,
                          email: res.data.email,
                          login: true,
                          token: res.data.token,
                          image: res.data.image}))
                           }
              }

              return res

           }).then((res) => {
            console.log("second then fucniton"+res);
            navigate('/UserDashboard') 
          })
           .catch(err=>console.log(err))
}



  return (
    <>
      {<Navbar/>}


      <div className="body">
        <div className="Menu">
     
           <div className="loginContainer">
        <h1>LOGIN</h1>
        <div style={{ color: "red" }}>
           {error && error}
          </div>

        <form onSubmit={HandleSubmit} action="">
          <div className="textField">
            <label htmlFor="Email">Enter Your Email</label>
            <input autoComplete="true"   onChange={(e) => { Setvalues({...values, email: e.target.value }); }}
              type="email"  name="Email"  id="Email" />
          </div>

          <div className="textField">
            <label htmlFor="Password">Enter Your Password</label>
            <input  onChange={(e) => {  Setvalues({...values, password: e.target.value });}}
              type="Password"  name="Password" id="Password"  defaultValue=""/>
          </div>

          <button type="submit" className="LoginLink">
            LOGIN
          </button>

          <div className="signupField">
            <h6>Are you a new user </h6>{" "}
            <Link to="/signup"> <button type="button" className="signupLink">Signup</button></Link>
          </div>
        </form>

        <div className="adminfield">
          <div className="adminfield_sub">
            <h6>If You are an Admin</h6>{" "}
            <Link to="/admin"> <button type="button" className="AdminLogin"> Login  </button> </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default LoginSection;
