import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector,useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";



const Profile = () => {

  // const updateState =()=>{
  // return  const user = useSelector(state=>state.login)
  //   console.log(user);
  // }
  const user = useSelector(state=>state.login)
   console.log(user);
  useEffect(()=>{
     
    if (localStorage.getItem('login')) {
      const loginData = JSON.parse(localStorage.getItem('login'));
      if (loginData.login && loginData.token) {
            
           }
    }
  })
  

  const [values, Setvalues] = useState({
    name:  user.name,
    email: user.email,
    image: user.image
  });
  
  const formdata= new FormData()
        formdata.append("name",values.name)
        formdata.append("email",values.email)
        formdata.append("image",values.image)
        formdata.append("token",user.token)



  const [error, SetError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const HandleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/updateProfile", formdata)
      .then((res) => {
        dispatch(loginUser({
          name: res.data.name,
          email: res.data.email,
          login: true,
          token: res.data.token,
          image: res.data.image}))
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
                <img src={`/${values.image}`} width="100px" height="100px" alt="Profile" className="profile-image mr-2" />

                
  <label htmlFor="inputGroupFile01" className="bi bi-upload">
<h5>Upload</h5>
<input
    type="file"
  id="inputGroupFile01"
  className="visually-hidden"
  onChange={e => Setvalues({...values, image: e.target.files[0]})}/>
</label>





                </div>

                <div className="textField col-lg-4 ">
                  <label htmlFor="Email">Full Name</label>
                  <input
                    autoComplete="true"
                    onChange={e => Setvalues({...values, name: e.target.value })}
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder={values.name}
                    defaultValue={values.name}
                  />
                </div>

                <div className="textField col-lg-4 ">
                  <label htmlFor="Password">Your Email</label>
                  <input
                   readOnly
                    onChange={e => Setvalues({...values, name: e.target.value })}
                    type="Password"
                    name="Password"
                    id="Password"
                    defaultValue=""
                    placeholder={values.email}
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
