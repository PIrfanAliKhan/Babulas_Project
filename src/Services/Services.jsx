import React from 'react'
import Image1 from './serviceimages/img1.jpg'
import Image2 from './serviceimages/img2.jpg'
import './Service.css'

function Services() {
  return (
    <div>
        <div className="servises" id="services">
        <h2 style={{color:"navy"}}>Service-1</h2>
            <div className="service1">
    
            <div className="serviceimage1"><img src={Image1} alt="sample_image" /></div>
            <div className="servicetext1"><h3>write about services</h3></div>
            </div>
            <h2 style={{color:"navy"}}>Service-2</h2>
            <div className="service2">
              
            <div className="servicetext2"><h3>write about services</h3></div>
            <div className="serviceimage2"><img src={Image2} alt="sample_image" /></div>
            
            </div>
        </div>
    </div>
  )
}

export default Services