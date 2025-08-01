import React, { useState, useEffect, useCallback } from 'react';
import './RecommendedProperties.css';
import BHks from './BHks';



const BASE_URL = process.env.REACT_APP_API_URL;

const RecommendedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/properties`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item =>
          item.Project_tag?.includes("Recommended")
        );
        setProperties(filtered); // ← use filtered here
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load properties:", err);
        setError("Error loading projects.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 736) setCardsToShow(1);
      else if (width < 992) setCardsToShow(2);
      // else if (width < 1101) setCardsToShow(3);
      else setCardsToShow(3);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setStartIndex((prevIndex) => {
      if (prevIndex < properties.length - cardsToShow) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  }, [properties.length, cardsToShow]);

  const handlePrev = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  }, []);

  const visibleCards = properties.slice(startIndex, startIndex + cardsToShow);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="recommended-container">
      <h2><span>Recommended</span> Properties</h2>
      <p>Curated especially for you</p>
      <div className="slider-wrapper">
        <button className="nav-button left" onClick={handlePrev} disabled={startIndex === 0}>
          &#8249;
        </button>
        <div className="card-container">
          {visibleCards.map((property, i) => (
            <div className="property-card" key={i}>
              <div className='property-card-image'>
                <img src={
                  property.Main_Image
                    ? `${property.Main_Image}`
                    : "../img/elaanlogo.png"
                } alt={property.title} />
              </div>
              <div className='property-card-details'>
                <div className="property-title">{property.Project_Name}</div>
                <div className="price-tag"> ₹{(property.Start_price / 10000000)?.toFixed(2).toString().slice(0, 4)} - ₹{(property.End_price / 10000000)?.toFixed(2).toString().slice(0, 4)} Cr</div>
                <div className="property-location">In {property.Location}</div>
                <div className="property-posted"><BHks property={property} /></div>
                <div className="property-posted">{property.posted}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="nav-button right"
          onClick={handleNext}
          disabled={startIndex >= properties.length - cardsToShow}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default RecommendedProperties;
