import React, { useState } from 'react';
import './FAQItem.css'; // Link to the CSS

const FAQs = [
  { question: "What is Artificial Intelligence (AI)?", answer: "AI is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction." },
  { question: "What are the different types of AI?", answer: "The main types of AI are Reactive Machines, Limited Memory, Theory of Mind, and Self-aware AI." },
  { question: "What is Machine Learning?", answer: "Machine learning is a subset of AI that enables a system to learn from data rather than through explicit programming." },
  { question: "How is AI used in everyday life?", answer: "AI is used in various ways, including virtual assistants like Siri, recommendation systems, self-driving cars, and chatbots." },
  { question: "What are neural networks?", answer: "Neural networks are a series of algorithms that attempt to recognize underlying relationships in data through a process that mimics the way the human brain operates." },
  { question: "What is Deep Learning?", answer: "Deep learning is a subset of machine learning that involves neural networks with many layers to analyze complex patterns in data." },
  { question: "What is Natural Language Processing (NLP)?", answer: "NLP is a branch of AI that helps computers understand, interpret, and respond to human language." },
  { question: "How does AI impact job automation?", answer: "AI can automate repetitive tasks, allowing employees to focus on more complex and creative tasks, but it may also replace some jobs." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same index is clicked
  };

  return (
    <div className="faq-container">
      <h2>Find the answers to your questions here</h2>
      <div className="faq-grid">
        {FAQs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
