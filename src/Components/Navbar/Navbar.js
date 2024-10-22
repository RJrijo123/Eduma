import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../Assets/Logo.png';
// import AI from '../Assets/ai.webp';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="nav">
      <div className="navbar-brand">
        <a href="/">
          <img src={logo} alt="Brand Logo" className="logo" />
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuActive ? <FaTimes size={24} className="close-icon" /> : <FaBars size={24} color="white" />} 
      </div>
      <div className={`navbar-overlay ${menuActive ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="goals-section" 
              smooth={true} 
              duration={50} 
              className="navbar-link" 
              onClick={toggleMenu}
              offset={-30}
            >
              Goals
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="curriculum-section" 
              smooth={true} 
              duration={50} 
              className="navbar-link" 
              onClick={toggleMenu} 
              offset={-40}
            >
              Curriculum
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="testimonials-section" 
              smooth={true} 
              duration={50} 
              className="navbar-link" 
              onClick={toggleMenu}  
            >
              Testimonials
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="instructors-section" 
              smooth={true} 
              duration={50} 
              className="navbar-link" 
              onClick={toggleMenu}  
              offset={-80}
            >
              Instructors
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="FAQ-section" 
              smooth={true} 
              duration={50} 
              className="navbar-link" 
              onClick={toggleMenu}  
              offset={-80}
            >
              FAQs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="enrollment-section" smooth={true} duration={50} offset={-100}>
            <button className="start-button">
              Start Learning</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
