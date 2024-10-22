import React from 'react';
import './Enroll.css'; // Import external CSS
import backgroundImage from '../Assets/Enroll.png'; // Import the image

const Enroll = () => {
  return (
    <div className="waitlist-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlays">
        <div className="content">
          <h1>By far, the greatest danger of Artificial Intelligence is that  </h1>
          <h1 className='hy'>people conclude too early that they understand it.</h1>
          
          <p>— Eliezer Yudkowsky —</p>
          <div className="input-container">
            <input
              type="email"
              placeholder="Fill your email"
              className="email-input"
            />
            <button className="waitlist-button">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
