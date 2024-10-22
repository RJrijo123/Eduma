import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing arrow icon from react-icons

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={handleBackToTop}
          style={styles.button}
          aria-label="Back to Top" // Accessibility improvement
        >
          <FaArrowUp style={styles.icon} />
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '50%', // Makes the button round
    padding: '15px', // Adjust size
    cursor: 'pointer',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Optional shadow for better visibility
  },
  icon: {
    fontSize: '20px', // Adjust icon size
  },
};

export default BackToTop;
