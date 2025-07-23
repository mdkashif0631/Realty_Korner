import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCardTemplate from './PropertyCardTemplate';
import axios from 'axios';

// 🔄 Utility to chunk based on screen size
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
const BASE_URL = process.env.REACT_APP_API_URL;

const PropertySticker = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chunkSize, setChunkSize] = useState(4); // default 4 per slide


  useEffect(() => {
    axios.get(`${BASE_URL}/properties`)
      .then(response => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties.");
        setLoading(false);
      });
  }, []);

  // 🔁 Adjust chunk size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 568) {
        setChunkSize(1); // Mobile
      } else if (width < 942) {
        setChunkSize(2); // Tablet
      } else if (width < 1300) {
        setChunkSize(3); // Tablet
      } else {
        setChunkSize(4); // Desktop
      }
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const grouped = chunkArray(properties, chunkSize);

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>{error}</div>;
  if (properties.length === 0) return <div>No properties available.</div>;

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Carousel controls={grouped.length > 1} indicators={false} interval={null}>
          {grouped.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Container className="my-1 p-1">
                <Row>
                  {group.slice().reverse().map((property, i) => (
                    <Col key={i} xs={12} sm={6} md={12 / chunkSize}>
                      <PropertyCardTemplate property={property}/>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PropertySticker;
