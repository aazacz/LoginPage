import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LoadUser,removeUser } from './redux/userSlice';

const Updateusercomponent = () => {
    const dispatch =  useDispatch() 
    const getUserList = async ()=>{
        await axios.get("http://localhost:5000/admin/userlist").then((result) => {
        dispatch(LoadUser(result.data.userdetails))
        console.log(result.data.userdetails);
      });
    }
  return (
<></>
  )
}

export default Updateusercomponent