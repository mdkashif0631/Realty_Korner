import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import ProjectHeader from "./projects_component/ProjectHeader";
import LuxuryProject from "./projects_component/LuxuryProject";
import Footer from "../component/Footer";
import SimilarBudgetProject from "./projects_component/SimilarBudgetProject";
import { FaBed } from "react-icons/fa";
// import { MdPhotoSizeSelectSmall } from "react-icons/md";
import TrendingProperties from "./projects_component/TrendingProperties";


const BASE_URL = process.env.REACT_APP_API_URL;


const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [index, setIndex] = useState(0);

  // Convert project name to URL slug
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim().replace(/[\s_]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-");

  useEffect(() => {

    fetch(`${BASE_URL}/properties`)
      .then((res) => res.json())
      .then((data) => {
        const matchedProject = data.find(
          (property) => slugify(property.Project_Name || "") === slug
        );
        setProject(matchedProject);
      })
      .catch((err) => console.error("Error fetching property:", err));
  }, [slug]);

  if (!project) return <div>Loading...</div>;

  const images = [
    project?.Main_Image
      ? `${project.Main_Image}`
      : "/img/placeholder-image.jpg",
    project?.Image
      ? `${project.Image}`
      : "/img/placeholder-image.jpg",
    project?.Image01
      ? `${project.Image01}`
      : "/img/placeholder-image.jpg",
    project?.Image02
      ? `${project.Image02}`
      : "/img/placeholder-image.jpg",
    project?.Image03
      ? `${project.Image03}`
      : "/img/placeholder-image.jpg",
    project?.Image04
      ? `${project.Image04}`
      : "/img/placeholder-image.jpg",
  ];

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);




  return (
    <>
      <div className="page-of-project">
        {/* Hero Section */}
        <div className="hero-container">
          <div className="project-hero-left">
            <div className="company-logo">
              <img
                src={
                  project?.Developer_Logo
                    ? `${project.Developer_Logo}`
                    : "/img/placeholder-image.jpg"
                }
                alt="logo"
              />
            </div>
            <img src={images[index]} alt="Project" className="hero-img" />
            <button className="arrow left" onClick={prevImage}>
              ❮
            </button>
            <button className="arrow right" onClick={nextImage}>
              ❯
            </button>
          </div>

          <div className="project-hero-right">
            <img
              src={images[(index + 1) % images.length]}
              alt="Project"
              className="hero-img-t"
            />
            <div className="project-hero-right-botom">
              <img
                src={images[(index + 2) % images.length]}
                alt="Project"
                className="hero-img-b"
              />
              <img
                src={images[(index + 3) % images.length]}
                alt="Project"
                className="hero-img-b"
              />
            </div>
          </div>

          <div className="rera_btn">
            <p className="rera-tooltip">
              RERA Verified 
              <span className="tooltip-text">
                { project?.Developer_Rera_No || "Not Available"}
              </span>
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="project-status">
          <div className="stat-box">
            <div className="start-inner-box">
              <p>📐</p>
              <p>Project Size</p>
            </div>
            <h3>{project?.Built || "N/A"} Acre</h3>
          </div>

          <div className="stat-box width_563">
            <div className="start-inner-box">
              <p>
                <FaBed />
              </p>
              <p>Type of Units</p>
            </div>
            {(() => {
              const bhkMap = [
                [project.Beds_2bhk, 2],
                [project.Beds_3bhk, 3],
                [project.Beds_4bhk, 4],
                [project.Beds_5bhk, 5],
              ];
              const bhkValues = bhkMap
                .filter(([value]) => value)
                .map(([, bhk]) => bhk);
              const hasPenthouse = !!project.Penthouse;

              if (bhkValues.length === 0 && !hasPenthouse) return <h3>N/A</h3>;

              const min = Math.min(...bhkValues);
              const max = Math.max(...bhkValues);
              const bhkText =
                min === max ? `${min} BHK` : `${min} BHK - ${max} BHK`;
              const displayText = hasPenthouse
                ? bhkText
                  ? `${bhkText} & Penthouse`
                  : "Penthouse"
                : bhkText;

              return <h3>{displayText}</h3>;
            })()}
          </div>

          <div className="stat-box width_749">
            <div className="start-inner-box">
              <p>🆕</p>
              <p>Size of Units:</p>
            </div>
            {(() => {
              const builtUpMap = [
                project.Super_Area_2bhk,
                project.Super_Area_3bhk,
                project.Super_Area_4bhk,
                project.Super_Area_5bhk,
                project.Super__Area_Penthouse,
              ];
              const builtUpValues = builtUpMap
                .filter((area) => area && area !== "")
                .map((area) => parseFloat(area))
                .filter((area) => !isNaN(area));
              if (builtUpValues.length === 0) return <h3>N/A</h3>;
              const min = Math.min(...builtUpValues);
              const max = Math.max(...builtUpValues);
              const displayBuiltUpArea =
                min === max ? `${min} sq.ft` : `${min} - ${max} sq.ft`;
              return <h3>{displayBuiltUpArea}</h3>;
            })()}
          </div>

          <div className="stat-box width_937">
            <div className="start-inner-box">
              <p>₹</p>
              <p>Price of Units</p>
            </div>
            <h3>
              {`${(project?.Start_price / 10000000)?.toFixed(2).toString().slice(0, 4) || "N/A"}Cr 
              - 
              ${(project?.End_price / 10000000)?.toFixed(2).toString().slice(0, 4) || "N/A"} Cr`}
            </h3>
          </div>

          <div className="stat-box width_1125">
            <div className="start-inner-box">
              <p>🏡</p>
              <p>Total No. of Units</p>
            </div>
            <h3>{project?.Number_of_unit || "N/A"} units</h3>
          </div>

          <div className="stat-box last-box">
            <div className="start-inner-box">
              <p>🏡</p>
              <p>Possession</p>
            </div>
            <h3>{project?.Possession || "N/A"}</h3>
          </div>
        </div>

        {/* Additional Sections */}
        <ProjectHeader project={project} />
        <SimilarBudgetProject project={project} />
        <TrendingProperties project={project} />
        <LuxuryProject project={project} />
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
