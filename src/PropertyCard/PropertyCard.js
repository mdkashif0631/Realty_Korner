import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PropertyCard.css'


const properties = [
  {
    address: '215 Sunny St., Newport Beach',
    type: 'Apartment',
    price: '$800',
    beds: '4 beds, 2 three-quarter baths',
    homeSize: '1,850 sq ft',
    lotSize: '7,000 sq ft',
    year: 2010,
    parking: 2,
    days: 2976,
    img: 'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?t=st=1746443399~exp=1746446999~hmac=f6d034b22b14aa2aa3a8854753f3d9e3e2fdb9bfc8950e79ed8774d0f83f3d31&w=826',
  },
  {
    address: '981 Sunset Blvd, Beverly Hills',
    type: 'Condo',
    price: '$1,500',
    beds: '3 beds, 2 baths',
    homeSize: '2,100 sq ft',
    lotSize: '5,000 sq ft',
    year: 2015,
    parking: 1,
    days: 157,
    img: 'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?t=st=1746443399~exp=1746446999~hmac=f6d034b22b14aa2aa3a8854753f3d9e3e2fdb9bfc8950e79ed8774d0f83f3d31&w=826',  },
];

const PropertyCard = () => {
  return (
    <Container className="my-5 p-3 bg-light rounded containerBox">
      <Carousel className='sticker_pro' indicators={false}>
        {properties.map((property, index) => (
          <Carousel.Item key={index}>
            <Row>
              {/* Left Image Section */}
              <Col md={6}>
                <div className="position-relative">
                  <img
                    src={property.img}
                    alt="Property"
                    className="img-fluid rounded"
                  />
                </div>
              </Col>

              {/* Right Info Section */}
              <Col md={6}>
                <h4>{property.address}</h4>
                <p className="text-muted">{property.type}</p>
                <h3 className="text-danger">
                  {property.price} <small className="text-muted">/month</small>
                </h3>

                <Row className="mt-3">
                  <Col md={6}>
                    <p>{property.beds}</p>
                    <p>Home size: {property.homeSize}</p>
                    <p>Lot size: {property.lotSize}</p>
                  </Col>
                  <Col md={6}>
                    <p>Year built: {property.year}</p>
                    <p>Parking spots: {property.parking}</p>
                    <p>Days on market: {property.days}</p>
                  </Col>
                </Row>

                <Button variant="danger">
                  VIEW OFFER &nbsp; →
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default PropertyCard;
