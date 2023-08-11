import React,{useEffect} from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"
import { useSelector } from 'react-redux';





const UserDashboardDefault = () => {
const userdetails = useSelector(state=>state.login)
console.log(userdetails);
 
  return (
    <>



<div className="container-fluid">
   
        <div className="col-auto col-md-3 col-xl-12 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center pt-2 text-white min-vh-100">
              
               <h2>hai {userdetails.name} Welcome to your Dashboard page</h2>
               
            </div>
        </div>
       

</div>
    </>
  )
}

export default UserDashboardDefault