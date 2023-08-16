import React,{ useEffect, useState } from "react";
import "./AdminLogin.css";
import Navbar from "../navBar/navbar";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LoadUser,loginUser,removeUser } from '../redux/userSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
const navigate=useNavigate()
const dispatch =  useDispatch() 


const [values, Setvalues] = useState({
                            email: "",
                            password: ""
});


const HandleSubmit=(event)=>{
      event.preventDefault();


  let loginDetails = values

      axios.post("http://localhost:5000/admin/login",loginDetails)
           .then((res)=>{
            if(res.data.status==="success"){
              console.warn("result",res.data);
              console.warn("result",res.data.token);
              localStorage.setItem('login',JSON.stringify({ login:true, token:res.data.token })  
              )
            }else{
              navigate('/admin')
            }
            

              if (localStorage.getItem('login')) {
                const loginData = JSON.parse(localStorage.getItem('login'));
                if (loginData.login && loginData.token) {
                  dispatch(loginUser({
                          name:  res.data.name,
                          email: res.data.email,
                          login: true,
                          token: res.data.token,
                          image: res.data.image}))
                           }
              }

              return res

           }).then((res) => {
            console.log("second then fucniton"+res);
            navigate('/dashboard') 
          })
           .catch(err=>console.log(err))
}



  return (
    <>
      {<Navbar />}
      <div className="body">
        <div className="Menu">
          <div className="AdminloginContainer">
            <h3>ADMIN LOGIN</h3>
            <form onSubmit={HandleSubmit} action="">
              <div className="textField">
                <label htmlFor="Email">Enter Your Email</label>
                <input type="email" name="Email" id="Email"  onChange={(e) => { Setvalues({...values, email: e.target.value }); }}/>
              </div>

              <div className="textField">
                <label htmlFor="Password">Enter Your Password</label>
                <input
                  onChange={(e) => { Setvalues({...values, password: e.target.value }); }}
                  type="Password"
                  name="Password"
                  id="Password"
                  defaultValue=""
                />
              </div>

             <button type="submit" className="LoginLink">
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
