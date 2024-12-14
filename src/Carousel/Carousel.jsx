import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

// Desktop images
import desktopImage1 from './Images/img1.jpg';
import desktopImage2 from './Images/img2.jpg';
import desktopImage3 from './Images/img3.jpg';
import desktopImage4 from './Images/img4.jpg';

// Mobile images
import mobileImage1 from './Imginmobile/download.jpg';
import mobileImage2 from './Imginmobile/2.jpg';
import mobileImage3 from './Imginmobile/3.jpg';
import mobileImage4 from './Imginmobile/4.jpg';

function DarkVariantExample() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view using media query
  const checkMobileView = () => {
    const isMobileScreen = window.matchMedia('(max-width: 576px)').matches;
    setIsMobile(isMobileScreen);
  };

  // Add a listener to detect screen resize
  useEffect(() => {
    checkMobileView(); // Initial check
    window.addEventListener('resize', checkMobileView);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  return (
    <Carousel data-bs-theme="dark" id="home">
      <Carousel.Item>
        <img
          className="d-block"
          src={isMobile ? mobileImage1 : desktopImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Experience beauty everywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={isMobile ? mobileImage2 : desktopImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Enjoy every moment with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={isMobile ? mobileImage3 : desktopImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Nature and you, in harmony.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={isMobile ? mobileImage4 : desktopImage4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Fourth slide label</h5>
          <p>Discover the beauty of simplicity.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
