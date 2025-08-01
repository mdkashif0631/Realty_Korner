import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FaBed, FaHome, FaCar } from "react-icons/fa";
import { BiSolidArea } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedProjectsCarousel.css';
import BHks, { SuperAreaDisplay } from '../component/BHks';

// 🔁 Custom hook to detect screen width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function Price({ max_price, min_price }) {
  return (
    <h2 className="fw" style={{ color: "black" }}>
      {max_price === "Onwards"
        ? `₹ ${(min_price / 10000000)?.toFixed(2).toString().slice(0, 4)} Cr ${max_price}`
        : `₹ ${(min_price / 10000000)?.toFixed(2).toString().slice(0, 4)} Cr - ₹ ${(max_price / 10000000)?.toFixed(2).toString().slice(0, 4)} Cr`}
    </h2>
  );
}

const BASE_URL = process.env.REACT_APP_API_URL;

const slugify = (name) => {
  return name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const FeaturedProjectsCarousel = () => {
  const [properties, setProperties] = useState([]);
  const width = useWindowWidth(); // ⬅️ Get screen width
  const descLimit = width < 700 ? 150 : 300;

  // Description formatter with word cutoff
  const getShortDescription = (desc) => {
    if (!desc) return 'No description available';
    return desc.length > descLimit
      ? desc.substring(0, desc.lastIndexOf(' ', descLimit)) + '...'
      : desc;
  };

  useEffect(() => {
    fetch(`${BASE_URL}/properties`)
      .then(res => res.json())
      .then(data => {
        setProperties(data);
      })
      .catch(err => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div className='FeaturedProjectsContainer'>
      <div className="featureBox">
        <div className='headingandName'>
          <h1><span>FEATURED&nbsp;</span> PROJECT</h1>
          <p className="textFeartureProject">
            Our projects are unique because they are opportunities specially created for Investment
          </p>
        </div>

        {properties.length > 0 ? (
          <Carousel interval={6000} className='feartureCard'>
            {properties.slice().reverse().map((proj, index) => (
              <Carousel.Item key={index} className='featureCarditem'>
                <div className="featuredProjtDetail">
                  <div className='featureimage'>
                    <img
                      className='logoimage'
                      src={proj.Developer_Logo ? `${proj.Developer_Logo}` : '/img/TrumpLogo.png'}
                      alt="logo"
                      onError={(e) => e.target.src = '/img/elaanlogo.png'}
                    />
                    <img
                      className="d-block projectimg"
                      src={proj.Main_Image ? `${proj.Main_Image}` : '/img/img1.jpg'}
                      alt={proj.Project_Name || "Project"}
                      style={{ objectFit: 'cover' }}
                      onError={(e) => e.target.src = '../img/elaanlogo.png'}
                    />
                    <p className='reranumber'>
                      RERA No. : {proj.Developer_Rera_No || "N/A"}
                    </p>
                  </div>

                  <div className='featuredDetailcontainer'>
                    <div className='projectNameContainer'>
                      <div className="projectName">
                        <h1>{proj?.Project_Name
                                            ? proj.Project_Name.split(" ").map((word, index) => (
                                                <span key={index} style={{ marginRight: "8px", fontSize:'24px' }}>
                                                    <span style={{fontSize:'34px'}}>{word.charAt(0)}</span>
                                                    {word.slice(1)}
                                                </span>
                                            ))
                                            : "N/A"}</h1>
                        <h5>{`${proj.Localities}, ${proj.Location}, ${proj.City}` || "Unknown Location"}</h5>
                      </div>
                    </div>

                    <Price
                      min_price={proj.Start_price || "N/A"}
                      max_price={proj.End_price || "Onwards"}
                    />

                    <p className="text-justify">
                      {getShortDescription(proj.Description)}
                    </p>

                    <div className='moredetail'>
                      <div className='LeftDetail'>
                        <p><FaBed className='uniticon' /> Unit Type : <BHks property={proj} /></p>
                        <p><BiSolidArea className='uniticon' /> Project Size : {proj.Built || "N/A"} Acre</p>
                        <p><MdPhotoSizeSelectSmall className='uniticon' /> Unit Sizes : <SuperAreaDisplay property={proj} /></p>
                      </div>
                      <div className='rightDetail'>
                        <p><FaCar className='uniticon' /> Parking : {(proj.Garages || "3 Level Basement").slice(0, 14)}...</p>
                        <p><SlGraph className='uniticon' /> Curr. Status : {(proj.Mode || "New launch").slice(0,10)}...</p>
                        <p><FaHome className='uniticon' /> Possession : {(proj.Possession || "TBD").slice(0,3)}... {(proj.Possession || "TBD").slice(-4)}</p>
                      </div>
                    </div>

                    <div className='readmorebutton'>
                      <Button>
                        <a
                          href={`/${proj.Project_type === "Residential" ? "projects" : "commercialproject"}/${slugify(proj.Project_Name || "property")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          READ MORE
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectsCarousel;
