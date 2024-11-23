import React from 'react'
import logo from "../assets/reactRouter.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Get Started</button>
      
      </div>
  )
}

export default Navbar