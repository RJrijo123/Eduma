import React from 'react';
import './Profile.css'; // Assuming you will add the CSS styles here.
import profile from '../Assets/img5.png'; // Replace with your profile image path
import br1 from '../Assets/lg1.png';
import br2 from '../Assets/lg2.png';
import br3 from '../Assets/lg3.png';
import br4 from '../Assets/lg4.png';
import br5 from '../Assets/lg5.png';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Hello, I'm Jose Callion</h1>
      <div className="profile-content">
        <div className="profile-picture">
          <img src={profile} alt="Jose Callion" />
        </div>
        <div className="profile-info">
          <div className="my-story">
            <h2>My Story</h2>
            <p>
              My story is one fueled by a deep passion for unraveling the mysteries of AI, leading me to contribute to groundbreaking research and advancements in the industry.
            </p>
            <p>
              Throughout my career, I've been at the forefront of shaping the future of technology, blending theoretical knowledge with practical insights. I am committed to making AI and machine learning accessible to learners at all levels, demystifying complex concepts in an engaging and collaborative learning environment.
            </p>
            <p>
              Beyond the classroom, I am a thought leader, continually pushing the boundaries of AI research. My dedication to ethical AI development and a forward-thinking approach sets the stage for you not only to understand the technology but also to contribute to its responsible and innovative growth.
            </p>
          </div>
          <div className="my-experience">
            <h2>My Experience</h2>
            <ul>
              <li>1998 - Machine Learning Researcher at XYZ Lab</li>
              <li>2005 - Founder Data Science Company</li>
              <li>2015 - Teaching at AI Center</li>
              <li>2020 - PhD on neural networks</li>
              <li>Now - Senior Director at ModernAI</li>
            </ul>
          </div>
          <div className="brands-worked-with">
            <h2>Brands I worked with</h2>
            <div className="brands">
              <img src={br1} alt="Brand 1" />
              <img src={br2} alt="Brand 2" />
              <img src={br3} alt="Brand 3" />
              <img src={br4} alt="Brand 4" />
              <img src={br5} alt="Brand 5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
