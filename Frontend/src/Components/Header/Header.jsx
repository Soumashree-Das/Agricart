import React from 'react'
import './Header.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
const Header = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div className="header">
      <Carousel 
      showDots={false} responsive={responsive} 
      inifinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}>
        {product}
      </Carousel>
    </div>
  )
}

export default Header