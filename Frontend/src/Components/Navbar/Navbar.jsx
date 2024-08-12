import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom' 
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home");

    return (
      <div className='navbar'>
          <img src={assets.logo} id='logo' />
          <ul className="navbar_menu">
            <li className={menu=="home"?"active":""}>
              <Link to="/" onClick={() => setMenu("home")}>Home</Link></li>
            <li className={menu=="categories"?"active":""}>
              <Link to="/categories" onClick={() => setMenu("categories")}>Categories</Link>
              </li>
            <li className={menu=="awareness"?"active":""}>
              <Link to="/awarness" onClick={() => setMenu("awarness")}>Awareness</Link>
              </li>
            <li className={menu=="contact-us"?"active":""}>
              <Link to="/contact-us" onClick={() => setMenu("contact-us")}>Contact us</Link></li>
            <li className={menu=="about-us"?"active":""}>
              <Link to="/about-us" onClick={() => setMenu("about-us")}>About us</Link>
              </li>
            
          </ul>
          <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-searchicon">
              <img src={assets.bag_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </div>
      </div>
    )
}

export default Navbar
