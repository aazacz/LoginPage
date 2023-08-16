import React,{useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./UpdateUser.css"
import { useLocation } from "react-router-dom"

import { LoadUser} from '../redux/userSlice';
import { useDispatch } from 'react-redux';

function UpdateUser() {

    const location = useLocation();
    const user = location.state;
      console.log(user);

      const [data,setData] = useState({
        name:user.name,
        email:user.email,
        image:user.image
    
    })
const navigate = useNavigate()
const dispatch =  useDispatch() 

const getUserList = async () => {
    try {
      const result = await axios.get("http://localhost:5000/admin/userlist")
      const userDetails = result.data.userdetails;
      dispatch(LoadUser(userDetails));
      setData({...data,  name: userDetails.name, email: userDetails.email, image: userDetails.image });

    
    } catch (error) {
      console.error(error);
    }
  };



const handleSubmit = (event) => {
		event.preventDefault()

        const formdata= new FormData()
        formdata.append("name",data.name)
        formdata.append("email",data.email)
        formdata.append("image",data.image)

        axios.post("http://localhost:5000/admin/update",formdata).then((res)=>{
            console.log("res");
            console.log(res);
            if(res.data.Status==="success"){
                getUserList()
                navigate('/dashboard');
                                    }
             }).catch(err=>console.log(err))
     }

  return (
    
    <div className='d-flex flex-column align-items-center pt-4'>
    
    <h2>Update the User</h2>

    <form className="row g-3 w-50" onSubmit={handleSubmit}>
    <div className="col-12">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" defaultValue={data.name} className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
            onChange={e => setData({...data, name: e.target.value})}/>
        </div>
        <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" defaultValue={data.email} className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
            onChange={e => setData({...data, email: e.target.value})}/>
        </div>
        <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" defaultValue={data.password} id="inputPassword4" placeholder='Enter Password'
             onChange={e => setData({...data, password: e.target.value})}/>
        </div>
         
        <div className="col-12 mb-3">
            <div className="row image_row"> 
            <div className="col-2">
            <div className="profile-image-container">
    <img      src={`/${data.image}`}      alt="Profile"      className="profile-image"  /> 
     </div>
            </div>
            <div className="col-10">
            <label className="form-label" htmlFor="inputGroupFile01">Update Image</label>
            <input type="file" className="form-control" id="inputGroupFile01"
                onChange={e => setData({...data, image: e.target.files[0]})}/>
            </div>
            
            </div>
           
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Update User</button>
        </div>
    </form>
</div>
  )}


export default UpdateUser