import React,{ useEffect, useState } from "react";
import "./AdminLogin.css";
import Navbar from "../navBar/navbar";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LoadUser,removeUser } from '../redux/userSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
const navigate=useNavigate()
//to list the user details
const dispatch =  useDispatch() 
  const getUserList = async ()=>{
    await axios.get("http://localhost:5000/admin/userlist").then((result) => {
      
    dispatch(LoadUser(result.data.userdetails))
      console.log(result.data.userdetails);
  });
  }

  //to initially load the userdetails and send the details to the redux user slice
useEffect( ()=>{
  try {
    getUserList()
 } catch (error) {
    console.error(error);
 }
},[])


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

             <button type="button" onClick={()=>navigate('/dashboard')} className="LoginLink">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
