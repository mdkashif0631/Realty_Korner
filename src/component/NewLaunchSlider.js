import React, { useState, useEffect, useCallback } from "react";
import "./NewLaunchSlider.css";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import axios from "axios";
import BHks from "./BHks";

const BASE_URL = process.env.REACT_APP_API_URL;

const slugify = (name) => {
  return name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const NewLaunchSlider = () => {
  const [properties, setProperties] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/properties`)
      .then((res) => {
        setProperties(res.data);
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
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setStartIndex((prevIndex) => {
      if (prevIndex < properties.length - cardsToShow) {
        return prevIndex + 1;
      } else {
        return 0; // loop back to beginning
      }
    });
  }, [properties.length, cardsToShow]);

  const prevSlide = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  }, []);

  // ✅ Auto slide every 6 seconds, including correct dependency
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]); // ✅ include nextSlide in dependency

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // const getBHKString = (project) => {
  //   const bhks = [];
  //   if (project.Beds_2bhk) bhks.push("2 BHK");
  //   if (project.Beds_3bhk) bhks.push("3 BHK");
  //   if (project.Beds_4bhk) bhks.push("4 BHK");
  //   if (project.Beds_5bhk) bhks.push("5 BHK");
  //   if (project.Penthouse) bhks.push("Penthouse");
  //   return bhks.join(", ");
  // };

  return (
    <div className="new-slider-container">
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <h3 style={{ fontSize: "30px" }}>🏢</h3>
        </div>
        <div>
          <h3>Newly launched projects</h3>
          <p>Just now launched in the market</p>
        </div>
      </div>

      <div className="new-slider">
        <button
          className="new-nav-button"
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          <FaCircleChevronLeft />
        </button>

        <div className="new-cards-wrapper">
          {properties.slice(startIndex, startIndex + cardsToShow).map((project, i) => (
            <div className="new-card" key={i}>
              <div className="ribbon-container">
                <h4 className="ribbon">NEW LAUNCH</h4>
              </div>

              <div className="new-launch-detail">
                <div className="new-card-img">
                  <img
                    src={
                      project.Main_Image
                        ? `${project.Developer_Logo}`
                        : "/default.png"
                    }
                    alt={project.Project_Name}
                    className="project-img"
                    onError={(e) => (e.target.src = "../img/elaanlogo.png")}
                  />
                </div>

                <div>
                  <h3 style={{ fontSize: "16px" }}>{project.Project_Name}</h3>
                  <p style={{ fontSize: "10px" }}>{project.Location}</p>
                  <p>
                    <strong>
                      ₹{(project.Start_price / 10000000)?.toFixed(2).toString().slice(0, 4)} - ₹{(project.End_price / 10000000)?.toFixed(2).toString().slice(0, 4)} Cr
                    </strong>{" "}
                  </p>
                   <p><BHks property={project}/></p>
                  <p className="increase">
                    {`${project.Price_Trend || "5%"} price increase in last 3 months`}
                  </p>
                </div>
              </div>

              <div className="new-footer">
                <p>Get preferred options @zero brokerage</p>
                <a
                className="new-view-btn"
                  href={`/${project.Project_type === "Residential" ? "projects" : "commercialproject"}/${slugify(project.Project_Name || "property")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW OFFER
                </a>              </div>
            </div>
          ))}
        </div>

        <button
          className="new-nav-button"
          onClick={nextSlide}
          disabled={startIndex >= properties.length - cardsToShow}
        >
          <FaCircleChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NewLaunchSlider;
