import React from 'react';
import './testimonials.css'
import image1 from '../Assets/Img1.png';
import image2 from '../Assets/img2.png';
import image3 from '../Assets/img3.png';
import image4 from '../Assets/img4.png';

const testimonials = [
  {
    name: 'David',
    age: 32,
    job: 'Software Developer',
    rating: 5,
    text: 'I always knew AI was the future, but I didn\'t know where to start. This course gave me the practical skills and knowledge I needed to transition from web development to AI development. I landed my dream job at a top tech company, and I\'m using AI to solve real-world problems every day.',
    image: image4,
  },
  {
    name: 'Abraham',
    age: 28,
    job: 'Data Analyst',
    rating: 5,
    text: 'The impact on my career has been incredible. My clients are blown away by the fresh, innovative designs I\'m producing. I\'m landing bigger projects, winning awards, and feeling more fulfilled than ever before. This course wasn\'t just about learning AI, it was about unlocking my own creative potential.',
    image: image3,
  },
  {
    name: 'Maria',
    age: 24,
    job: 'Marketing Specialist',
    rating: 5,
    text: 'I was stuck in a data analysis rut, just crunching numbers without any real impact. This course showed me how AI can unlock the power of data. Now, I\'m using AI to predict customer behavior, optimize business processes, and even identify fraud. My work is finally making a tangible difference, and it\'s incredibly rewarding.',
    image: image2,
  },
  {
    name: 'Sarah',
    age: 27,
    job: 'UX Designer',
    rating: 5,
    text: 'I love the experience! Before this course, AI was just a buzzword to me. Now, I\'m using it to personalize customer experiences, analyze campaign data, and even generate creative content. My boss is blown away by my results, and I\'m finally feeling challenged and fulfilled in my work.',
    image: image1,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-image">
      <img src={testimonial.image} alt={testimonial.name} />
    </div>
    <p className="author">
        {testimonial.name}, {testimonial.age}, {testimonial.job}
      </p>
    <div className="testimonial-content">
      <div className="rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
      <p className="text">{testimonial.text}</p>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2 className="section-title">Listen to real people, real results</h2>
    <div className="testimonials-grid">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;