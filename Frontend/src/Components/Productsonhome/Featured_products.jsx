import React from 'react'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
import './Featured_products.css'
const Featured_products = () => {
  return (
    <div className='featuredproducts'>
      <h1>Featured Products</h1>
      <div className="cards">
            <div className="card1">
              <img src={assets.wheat} alt="" />
                <h3><Link to='./wheat'>Grains</Link></h3>
            </div>
            <div className="card2">
              <img src={assets.rice} alt="" />
                <h3><Link to='./rice'>Pulses</Link></h3>
            </div>
            <div className="card3">
              <img src={assets.dairy} alt="" />
                <h3><Link to='./dairy'>Spices</Link></h3>
            </div>
            <div className="card4">
              <img src={assets.fruits} alt="" />
                <h3><Link to='./fruits'>Fruits</Link></h3>
            </div>
            <div className="card5">
              <img src={assets.vegetables} alt="" />
                <h3><Link to='./vegetable'>Vegetables</Link></h3>
            </div>
      </div>
    </div>
  )
}

export default Featured_products
