import React from 'react'
import Image1 from './serviceimages/img1.jpg'
import Image2 from './serviceimages/img2.jpg'
import './Service.css'

function Services() {
  return (
    <div>
        <div className="servises">
            <div className="service1">
            <div className="serviceimage1"><img src={Image1} alt="sample_image" /></div>
            <div className="servicetext1"><h3>write about services</h3></div>
            </div>
            <div className="service2">
            <div className="serviceimage2"><img src={Image2} alt="sample_image" /></div>
            <div className="servicetext2"><h3>write about services</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Services