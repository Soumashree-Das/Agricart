import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
const About = () => {
  return (
    <div className='about'>
      <h1>About Our Market</h1>
      <div className="imgcontainer">
        <img src={assets.about} alt="" />
      </div>
      <div className="aboutcontents">
        <p>Welcome to Agricart, your trusted partner in bringing fresh, naturally produced food items straight from the farm to your doorstep. Our mission is to empower farmers by providing them with fair prices for their produce while minimizing costs for consumers by eliminating middlemen.</p>

        <p>At Agricart, we believe in the power of education and fast, efficient transactions. By educating farmers and ensuring they receive timely payments, we aim to support their growth and development. Our commitment is further emphasized by reinvesting our profits back into the farming community, ensuring sustainable and long-term development.</p>

        <p>Founded by a passionate group of second-year college students, Agricart is a labor of love and dedication. Each team member brings their unique skills and expertise to the table, working together to build a platform that bridges the gap between farmers and consumers. Although we are currently in the prototype stage and have no partners yet, our vision is clear, and our resolve is strong.</p>

        <p>We are committed to maintaining the highest standards of quality and freshness. Our farmers are certified based on customer feedback and their adherence to sustainable agricultural practices. This ensures that every product you receive from Agricart is not only fresh but also produced with care and responsibility.</p>

        <p>Our target audience is the new generation of citizens who seek convenience without compromising on quality. We understand the hassle of frequent market trips, and we are here to make your life easier by delivering farm-fresh produce right to your doorstep.</p>

        <p>Join us in our journey to revolutionize the way you buy food and support the hardworking farmers who make it all possible. With Agricart, you are not just buying produce; you are making a difference.</p>
      </div>    
      <h3>Team Members</h3>
    <div className="team">
        
        <div className="content">
        <img src={assets.deb} alt="" />
        <h4>Debargha Samanta</h4>
        </div>
        <div className="content">
        <img src={assets.deb} alt="" />
        <h4>Aniket Dey</h4>
        </div>
        <div className="content">
        <img src={assets.soumashree} alt="" />
        <h4>Soumashree Das</h4>
        </div>
        <div className="content">
        <img src={assets.deb} alt="" />
        <h4>Anubrata Mondal</h4>
        </div>
        <div className="content">
        <img src={assets.akash} alt="" />
        <h4>Akash Debnath</h4>
        </div>
    </div>
    </div>
  )
}

export default About
