import React,{useEffect} from 'react'

import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginSection from '../Login/LoginSection';


const UserDashboard = () => {
const user = useSelector(state=>state.login)

const navigate =  useNavigate()

console.log(user);
  return (
    <>



<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ">
                    <span className=" fs-5 d-none d-lg-inline ">User Dashboard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to='/UserDashboard' className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="create" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-person-plus"></i> <span className="ms-1 d-none d-sm-inline">Profile</span>
                        </Link>
                    </li>
                
                </ul>
               
               
            </div>
        </div>
        <div className="col py-3 textcolor col p-0 m-0">
            <div className='p-2 d-flex justify-content-center shadow'>
              <h4>User Home</h4>
                         </div>
            {!user.login?navigate("/"):<Outlet/>}
        

        </div>
    </div>
</div>
    </>
  )
}

export default UserDashboard