import React from 'react';
import './HoverCard.css';
import main1 from '../Assets/large1.png';
import main2 from '../Assets/large2.png';
import main3 from '../Assets/large3.png';
import sub1 from '../Assets/small1.png';
import sub2 from '../Assets/small2.png';
import sub3 from '../Assets/small3.png';

function HoverCard() {
  const cards = [
    {
      imageUrl: main1,
      hoverImageUrl: sub1,
      title: "Amazing Destination",
      description: "Explore the most beautiful places with experienced guides, offering a seamless travel experience.",
      name: "John Doe",
      designation: "Travel Guide",
    },
    {
      imageUrl: main2,
      hoverImageUrl: sub2,
      title: "Beautiful Sunset",
      description: "Capture breathtaking moments as the sun sets over scenic landscapes with our professional team.",
      name: "Mentor Thomas Winsley",
      designation: "Director at AI Company",
    },
    {
      imageUrl: main3,
      hoverImageUrl: sub3,
      title: "Mountain Adventure",
      description: "Embark on thrilling adventures across mountain trails with seasoned experts to guide you.",
      name: "Mentor Kate Green",
      designation: "Founder of AI Community",
    },
  ];

  return (
    <div>
      <h2 className="heading">Our Excellent Mentors</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card-wrapper" key={index}>
            <div className="image-hover-card">
              <div className="card">
                <img className="main-image" src={card.imageUrl} alt={card.title} />
                <div className="overlay">
                  <img className="hover-image" src={card.hoverImageUrl} alt="hover" />
                  <h3 className="card-titles">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h4 className="card-name">{card.name}</h4>
              <p className="card-designation">{card.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverCard;
