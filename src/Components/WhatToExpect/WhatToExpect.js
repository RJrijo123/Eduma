import React from 'react';
import './WhatToExpect.css';

const WhatToExpect = () => {
  return (
    <div className="expect-section">
      <h2 className="section-title">What to expect from this course</h2>
      <div className="expect-cards-container">
        <div className="expect-card">
          <h3>Understanding about AI</h3>
          <ul>
            <li>Understand core concepts like machine learning, deep learning, and algorithms in a clear and practical way.</li>
            <li>Speak confidently about AI topics with colleagues, friends, and even potential employers.</li>
          </ul>
        </div>
        <div className="expect-card">
          <h3>Take advantage of AI</h3>
          <ul>
            <li>Apply your newly acquired knowledge by creating a simple project like an image classifier or a chatbot.</li>
            <li>Identify real-world challenges in your field and explore how AI can be used to address them.</li>
            <li>Learn industry-recognized skills to list on your resume and shine out in job applications.</li>
          </ul>
        </div>
        <div className="expect-card">
          <h3>Make more, work less</h3>
          <ul>
            <li>Learn how to use popular AI frameworks like TensorFlow or PyTorch to build more complex projects.</li>
            <li>Learn how to use AI to automate repetitive tasks and free up valuable time for more strategic work.</li>
            <li>Apply AI to enhance your current projects, optimizing marketing campaigns, improving customer service, or streamlining supply chains.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
