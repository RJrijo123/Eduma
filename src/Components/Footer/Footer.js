import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';  // Import the relevant icons
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Eduma. All rights reserved</p>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTiktok className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
