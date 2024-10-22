import React from 'react';
import './AiBanner.css'; 
import image from '../Assets/AiImage.png';
import { Link } from 'react-scroll';
const AiBanner = () => {
  return (
    <div className="ai-banner">
      <div className="ai-overlay">
        <h1>AI is no longer science fiction.</h1>
        <p>
          This course will show you what exactly AI is, how it works, and more importantly, 
          how you can harness its power to make a difference!
        </p>
        <Link to="curriculum-section" smooth={true} duration={50} offset={-20}>
        <button to className="start-learning-button">Start Learning</button>
        </Link>
      </div>
      <img className="ai-image" src={image} alt="AI" />
    </div>
  );
};
export default AiBanner;
