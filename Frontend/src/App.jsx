import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import LoginPopup from './Components/LoginPage/LoginPopup'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/Contact'
import About from './Components/AboutUs/About'
import Wheat from './Components/display_pages/Wheat'
import Fruits from './Components/display_pages/Fruits'
import Rice from './Components/display_pages/Rice'
import Vegetable from './Components/display_pages/Vegetable'
import Dairy from './Components/display_pages/Dairy'
function App() {
  const [ShowLogin,setShowLogin]=useState(false)
  return (
    <>
    {ShowLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div  className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/wheat' element={<Wheat/>}/>
        <Route path='/rice' element={<Rice/>}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/vegetable' element={<Vegetable/>}/>
        <Route path='/dairy' element={<Dairy/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
