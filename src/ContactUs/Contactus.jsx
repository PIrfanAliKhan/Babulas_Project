// Contactus.js
import React from 'react';
import './Contact.css';

function Contactus() {
  return (
    <div className='contact' id="contact">
      <div className="contact-left">
        <h2 className="contact-brand">AISLIN</h2>
        <h4 className="contact-slogan">Dream to Reality</h4>
      </div>
      <div className="contact-right">
        <div className="contact-detail">
          <span className="contact-label">WhatsApp:</span>
          <span className="contact-info">9154328747</span>
        </div>
        <div className="contact-detail">
          <span className="contact-label">Email:</span>
          <span className="contact-info">irfanalikhanp9@gmail.com</span>
        </div>
        <div className="contact-detail">
          <span className="contact-label">Facebook:</span>
          <span className="contact-info">irfanalikhan</span>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
