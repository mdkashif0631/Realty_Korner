import React, { useState, useEffect } from 'react';
import './PropertyTypeSlider.css';

const propertyTypes = [
  {
    id: 1,
    title: 'Residential Apartment',
    count: '6,100+ Properties',
    img: '../img/Hero05.jpg',
  },
  {
    id: 2,
    title: 'Independent/Builder Floor',
    count: '680+ Properties',
    img: '../img/img3.jpg',
  },
  {
    id: 3,
    title: 'Residential Land',
    count: '170+ Properties',
    img: '../img/img2.jpg',
  },
  {
    id: 4,
    title: 'Villas',
    count: '90+ Properties',
    img: '../img/img3.jpg',
  },
  {
    id: 5,
    title: 'Studio Apartment',
    count: '200+ Properties',
    img: '../img/img2.jpg',
  },
  {
    id: 6,
    title: 'Row House',
    count: '80+ Properties',
    img: '../img/Hero05.jpg',
  },
  {
    id: 7,
    title: 'Serviced Apartment',
    count: '150+ Properties',
    img: '../img/img3.jpg',
  },
  {
    id: 8,
    title: 'Penthouse',
    count: '50+ Properties',
    img: '../img/img2.jpg',
  },
];

const PropertyTypeSlider = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 736) setCardsPerView(1);
      else if (width < 992) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView(); 
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const handleNext = () => {
    if (index < propertyTypes.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleCards = propertyTypes.slice(index, index + cardsPerView);

  return (
    <div className="type-slider-container">
      <h2><span>Apartments, Villas</span> and more</h2>
      <p>in Delhi South West</p>
      <div className="type-slider-wrapper">
        <button onClick={handlePrev} className="nav-btn">&#8249;</button>
        <div className="type-card-container">
          {visibleCards.map((item) => (
            <div key={item.id} className="type-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="nav-btn">&#8250;</button>
      </div>
    </div>
  );
};

export default PropertyTypeSlider;
