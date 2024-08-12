import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footercontent">
        <div className="footerleft">
            <img src={assets.logo} id="logo" />
            <p>Argricart is dedicated to bridging the gap between farmers and consumers by delivering fresh, naturally produced vegetables and daily use food items straight from the farm to your doorstep. We believe in supporting local farmers and promoting sustainable agricultural practices.</p>
            <div className="socialmediaicon">
                <img src={assets.facebook} alt="" id="image"/>
                <img src={assets.linkedin_icon} alt="" id="image" />
                <img src={assets.twitter} alt="" id="image" />
            </div>
        </div>
        <div className="footercenter">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Contat Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footerright">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>910004598</li>
            <li>agricart890@gmail.com</li>
        </ul>
        </div>
        </div>
      <hr />
        <p className='footercopyright'>Copyright 2024 Agricart.com.All rights Reserved</p>
    </div>
  )
}

export default Footer
