import React from 'react'
import './navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {

// const name = useSelector(state=>state.user.name)
// {name}
  return (
    <>
      <div className="section1">
        <div className="navBar">
          <h1 className="Data">User Data Collection</h1>
         
          <img src={'/logo.png'} alt="Logo" />
        </div>
      </div>
    
    
    
    </>
  )
}

export default Navbar