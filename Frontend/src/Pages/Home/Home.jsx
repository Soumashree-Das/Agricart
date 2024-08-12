import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Featured_products from '../../Components/Productsonhome/Featured_products'

const Home = () => {
  return (
    <div>
      <Header/>
      <Featured_products/>
    </div>
  )
}

export default Home
