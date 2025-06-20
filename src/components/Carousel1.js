import React, { useState, useEffect, useRef } from 'react';
import './Carousel1.css';

const teslaCards = [
  {
    id: 'card1',
    image: 'images/Model S.avif',
    topText: 'Luxury Sedan',
    title: 'Model S',
    subtitle: 'From $84,990',
  },
  {
    id: 'card2',
    image: 'images/Model X.avif',
    topText: 'Luxury SUV',
    title: 'Model X',
    subtitle: 'From $89,990',
  },
  {
    id: 'card3',
    image: 'images/Cybertruck.png',
    topText: 'Utility Truck',
    logo: 'images/Cybertrucklogo Title.png',
    subtitle: '0% APR With Purchase of FSD (Supervised) Ending June 30',
  },
  {
    id: 'card4',
    image: 'images/Model 3 2.avif',
    topText: 'Sports Sedan',
    title: 'Model 3',
    subtitle: 'Lease From $349/mo With Zero Down',
  },
  {
    id: 'card5',
    image: 'images/Model Y 2.avif',
    topText: 'Midsize SUV',
    title: 'Model Y',
    subtitle: 'Lease From $399/mo With $1,000 Down',
  }
];

export default function Carousel1() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  const scrollToCard = (index) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    setActive(index);
  };

  return (
    <div className="tesla-carousel-wrapper p-3 m-3">
      <div className="tesla-card-container">
        {teslaCards.map((card, index) => (
          <div
            className="tesla-card"
            id={card.id}
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img src={card.image} alt={card.title || 'Tesla'} className="tesla-card-img" />
            <small className="overlay-top-text">
              {card.topText}
            </small>
            <div className="tesla-card-overlay">
              {card.logo ? (
                <img src={card.logo} alt="Cybertruck Logo" className="cybertruck-logo" />
              ) : (
                <h1>{card.title}</h1>
              )}
              <p>{card.subtitle}</p>
              <div className="tesla-card-btns">
                <button className="btn btn-primary btn-md">Order Now</button>
                <button className="btn btn-light btn-md">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tesla-indicators text-center mt-3">
        {teslaCards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`indicator-dot ${i === active ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
