import React, { useEffect, useState } from 'react'
import "./UserDetails.css"
import { useSelector } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LoadUser,removeUser } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';

//to list the user details
const UserDetails = () => {
const dispatch =  useDispatch() 
const navigate =  useNavigate() 

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
    console.error(error)} },[])

//to get the user details from the redux store and list the users down
const userDetails  = useSelector(state=>state.userlist)
const reversedUserDetails = [...userDetails].reverse()

console.log("userlist from the redux state");
console.log(userDetails);

//to delete the user
const handleDelete=(id)=>{
dispatch(removeUser(id))
}

const handleUpdate=(user)=>{
  navigate('update',{ state: user })
}
   return (
    <>

    <table className="custom-table">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>



        {
      

        reversedUserDetails.map((user,index)=>(
 <tr key={index}>

<td>{index+1}</td>
<td>
  <div className="profile-image-container">
    <img      src={`/${user.image}`}      alt="Profile"   className="profile-image"  /> 
     </div>
</td>


<td>{user.name}</td>
<td>{user.email}</td>
<td>********</td>
<td>
            <button key={`edit_${user._id}`}  onClick={()=>handleUpdate(user)} className="btn btn-sm btn-primary ">Edit</button>
            <button key={`delete_${user._id}`}  onClick={()=>handleDelete(user._id)} className="btn btn-sm btn-danger ms-2">Delete</button>
</td>

</tr>
        ))}
        
        
       
      </tbody>
    </table>
  </>
  
  )
}

export default UserDetails