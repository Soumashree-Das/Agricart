import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState("Sign Up")
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/signup', formData);
          console.log('Signup successful', response.data);
        } catch (error) {
          console.error('There was an error signing up!', error);
        }
      };
    
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
            {currentState==='Login'?<></>:<input type="text" name="name" value={formData.name} onChange={handleChange}placeholder='Your name' required/>}
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your email' required />
            <input type="password" name="password" value={formData.password} onChange={handleChange}placeholder='password' required />
        </div>
        <button type="submit" onClick={handleSubmit}>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"?
        <p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:
        <p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
        </form>
    </div>
  )
}

export default LoginPopup
