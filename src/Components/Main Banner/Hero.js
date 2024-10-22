import React from 'react';
import './Hero.css';
import image from '../Assets/background.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <img src={image} alt="Background" className="hero-image" />
        <div className="hero-box">
          <h2>AI ON THE JOB</h2>
          <h1>Boost Your Skills And Get Ahead</h1>
          <div className="hero-buttons">
            <button>Industry Connected</button>
            <button>Supported Community</button>
            <button>Real World Skills</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
