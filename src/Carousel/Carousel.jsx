import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import image1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'

function DarkVariantExample() {
  return (
    
    <Carousel data-bs-theme="dark" id="home">
  <Carousel.Item>
    <img className="d-block" src={image1} alt="First slide" />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block" src={img2} alt="Second slide" />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block" src={img3} alt="Third slide" />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block" src={img4} alt="Fourth slide" />
    <Carousel.Caption>
      <h5>Fourth slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  );
}


export default DarkVariantExample