import React, { useState, useEffect, useRef } from 'react';
import './Carousel2.css';
import 'bootstrap'

const teslaCards = [
  {
    id: 'card1',
    image: 'images/Bottom Carousel/Panels-Desktop Slide 1.avif',
    title: 'Solar Panels',
    subtitle: 'Use Solar Energy to Power Your Home and Charge Your Tesla',
  },
  {
    id: 'card2',
    image: 'images/Bottom Carousel/Powerwall-Desktop Slide 2.avif',
    title: 'Power Wall',
    subtitle: 'Keep Your Lights On During Outages',
  },
  {
    id: 'card3',
    image: 'images/Bottom Carousel/Roof-Desktop Slide 3.avif',
    title: 'Solar Roof',
    subtitle: 'Generate Clean Energy With Your Roof',
  },
  {
    id: 'card4',
    image: 'images/Bottom Carousel/Megapack-Desktop Slide 4.avif',
    title: 'Megapack',
    subtitle: 'Massive Batteries for Massive Energy Support',
  }
];

export default function Carousel2() {
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
