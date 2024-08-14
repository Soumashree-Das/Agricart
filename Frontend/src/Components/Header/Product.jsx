import React from 'react'
import './Header.css'
const Product = (props) => {
  return (
    <div className="card">
      
    <img className="product--image" src={props.url} alt="product image" />
    <div className="product_content">
    <h2>{props.name}</h2>
    
    <p className="price">{props.price}</p>
    
      <button>{props.description}</button>
    
    </div>
  </div>
  )
}

export default Product
