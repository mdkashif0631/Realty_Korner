import React from 'react';
import './PropertyCardTemplate.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaRupeeSign } from 'react-icons/fa';
import { FaBed } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import BHks, { SuperAreaDisplay } from '../component/BHks';
// import { Link } from 'react-router-dom';

// Define the backend base URL for image path


// Slugify function to convert propertyect name to URL-friendly slug
const slugify = (name) => {
  return name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const PropertyCardTemplate = ({ property }) => (
  <Card className="cardContainer mb-4">
    <div className='stickerimages' style={{ height: '200px', position: 'relative' }}>
      <Card.Img
        className='h-100 w-100'
        variant="top"
        src={property.Main_Image ? `${property.Main_Image}` : '../img/img1.jpg'}
        alt="Property"
        onError={(e) => e.target.src = '../img/img1.jpg'}
      />
      <div className="reraWrapper">
        <p className="rera-tooltip" style={{ color: 'white', fontWeight: '400', fontSize: '10px' }}>
          RERA Verified
          <span className="tooltip-text">
            {property?.Developer_Rera_No || "Not Available"}
          </span>
        </p>
      </div>
      <div className='logoImage'>
        <img
          src={property.Developer_Logo ? `${property.Developer_Logo}` : '../img/img1.png'}
          alt="logo"
          onError={(e) => e.target.src = '../img/elaanlogo.png'}
        />
      </div>
    </div>

    <Card.Body>
      <Card.Title style={{ color: "black", fontSize: "20px", textTransform: "capitalize" }}>
        {property.Project_Name || "No Name"}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>
        {property.Localities || property.Location || property.City ?
          `${property.Localities}, ${property.Location}, ${property.City}`.slice(0, 35) + '...'
          : "No Address"}
      </Card.Subtitle>


      <h4 className="text" style={{ color: "black", fontSize: "20px" }}>
        <FaRupeeSign style={{ color: "#2763ff" }} />{`${(property.Start_price / 10000000)?.toFixed(2).toString().slice(0, 4)}Cr - ` || ""}<FaRupeeSign style={{ color: "#2763ff" }} />{`${(property.End_price / 10000000)?.toFixed(2).toString().slice(0, 4)}Cr` || ""}
      </h4>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <FaBed style={{ color: "#2763ff", fontSize: "16px", marginBottom:'2px' }} />: <BHks property={property}/>
      </p>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <BiSolidArea style={{ color: "#2763ff", fontSize: "16px", marginBottom:'2px' }} />: <SuperAreaDisplay property={property}/>
      </p>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <FaHome style={{ color: "#2763ff", fontSize: "16px", marginBottom:'2px' }} />: {property.Built || "N/A"} Acre
      </p>

      <div className="d-flex justify-content-end align-items-center mt-2">
        <span className='viewOfferButton'>
          <a
            href={`/${property.Project_type === "Residential" ? "projects" : "commercialproject"}/${slugify(property.Project_Name || "property")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW OFFER
          </a>
        </span>
      </div>
    </Card.Body>
  </Card>
);

export default PropertyCardTemplate;
