import React from 'react';
import './WaitlistBanner.css'; // Import external CSS
import backgroundImage from '../Assets/slide.png'; // Import the image

const WaitlistBanner = () => {
  return (
    <div className="waitlists-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlays">
        <div className="content">
          <h1>Looking for our upcoming courses?</h1>
          <p>Join the waitlist to be notified when dates for future courses become available</p>
          <div className="input-container">
            <input
              type="email"
              placeholder="Fill your email"
              className="email-input"
            />
            <button className="waitlists-button">Join Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBanner;
