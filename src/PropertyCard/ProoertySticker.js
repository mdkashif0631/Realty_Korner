import React from 'react';
import { Carousel, Card, Button, Row, Col, Container } from 'react-bootstrap';
import { FaHome, FaRupeeSign } from 'react-icons/fa';
import { FaBed } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PropertySticker.css';

import TrumpLogo from '../img/TrumpLogo.jpg';
import Elan from '../img/elaan.png';
import Elan01 from '../img/elaan01.png';
import Elanlogo from '../img/elaanlogo.png';
import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
const properties = [
  {
    image: Elan,
    logoimg: Elanlogo,
    name: 'The Emperor',
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    price: '10 cr-20 cr ',
    built: 'New Launch',
    area: '4200-8000 sqft',
    beds: "4 BHK, 5BHK & Penthouse",
    garages: 'Oct 2029',
    mode: 'Sale',
  },
  {
    image: Elan01,
    logoimg: Elanlogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, Loft',
    price: '1 050',
    built: 2014,
    area: '180 sq ft',
    beds: 2,
    garages: 'Oct 2029',
    mode: 'Rent',
  },
  {
    image: Img1,
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: Img2,
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, 200 sq ft',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: Img3,
    logoimg: Elanlogo,
    name: 'The Emperor',
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    price: '10 cr-20 cr ',
    built: 'New Launch',
    area: '4200-8000 sqft',
    beds: "4 BHK, 5BHK & Penthouse",
    garages: 'Oct 2029',
    mode: 'Sale',
  },
  {
    image: Elan01,
    logoimg: Elanlogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, Loft',
    price: '1 050',
    built: 2014,
    area: '180 sq ft',
    beds: 2,
    garages: 'Oct 2029',
    mode: 'Rent',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg',
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg',
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, 200 sq ft',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: Elan01,
    logoimg: Elanlogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, Loft',
    price: '1 050',
    built: 2014,
    area: '180 sq ft',
    beds: 2,
    garages: 'Oct 2029',
    mode: 'Rent',
  },
  {
    image: Img1,
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: Img2,
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, 200 sq ft',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: Img3,
    logoimg: Elanlogo,
    name: 'The Emperor',
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    price: '10 cr-20 cr ',
    built: 'New Launch',
    area: '4200-8000 sqft',
    beds: "4 BHK, 5BHK & Penthouse",
    garages: 'Oct 2029',
    mode: 'Sale',
  },
{
  image: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg',
  logoimg: TrumpLogo,
  address: 'Sector 106, Dwarka Expressway, Gurgaon',
  name: 'Apartment, 200 sq ft',
  price: '1 350',
  built: 2012,
  area: '200 sq ft',
  beds: 2,
  garages: '1 (2 auto)',
  mode: 'Rent',
},
  {
    image: Elan01,
    logoimg: Elanlogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, Loft',
    price: '1 050',
    built: 2014,
    area: '180 sq ft',
    beds: 2,
    garages: 'Oct 2029',
    mode: 'Rent',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg',
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg',
    logoimg: TrumpLogo,
    address: 'Sector 106, Dwarka Expressway, Gurgaon',
    name: 'Apartment, 200 sq ft',
    price: '1 350',
    built: 2012,
    area: '200 sq ft',
    beds: 2,
    garages: '1 (2 auto)',
    mode: 'Rent',
  }
];

// Helper to chunk properties into groups of 8
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const PropertyCard = ({ property }) => (
  <Card className="shadow-sm cardContainer mb-4">
    <div className='stickerimages' style={{ height: '200px' }}>
      <Card.Img className='CardImg h-100 w-100' variant="top" src={property.image} />
      <p>RERA No: RC/REP/HARERA/GGM/925/657/2025/28</p>
      <div className='logoImage'>
        <img src={property.logoimg} alt="logo" />
      </div>
    </div>
    <Card.Body>
      <Card.Title style={{ color: "rgb(33, 28, 132)", fontSize: "20px" }}>{property.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>{property.address}</Card.Subtitle>
      <h4 className="text" style={{ color: "rgb(33, 28, 132)" }}>
        <FaRupeeSign />{property.price} {property.mode === 'Rent' && <small>/month</small>}
      </h4>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <FaBed style={{ color: "rgb(33, 28, 132)", fontSize: "16px" }} />: {property.beds}
      </p>
      <p className='mb-1 text-muted' style={{ fontSize: "12px", fontWeight: "600" }}>
        <BiSolidArea style={{ color: "rgb(33, 28, 132)", fontSize: "16px" }} />: {property.area}
      </p>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <FaHome style={{ color: "rgb(33, 28, 132)", fontSize: "16px" }} />: {property.garages}
      </p>
      <div className="d-flex justify-content-end align-items-center mt-2">
        <Button className='viewOfferButton'>
          VIEW OFFER
        </Button>
      </div>
    </Card.Body>
  </Card>
);

const PropertySticker = () => {
  const grouped = chunkArray(properties, 4);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Carousel controls={grouped.length > 1} indicators={false} interval={6000}>
          {grouped.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Container className="my-1 stickerback p-4">
                <Row>
                  {group.map((property, i) => (
                    <Col key={i} xs={12} sm={6} md={3}>
                      <PropertyCard property={property} />
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
