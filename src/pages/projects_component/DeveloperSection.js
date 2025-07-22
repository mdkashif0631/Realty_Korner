import React from 'react';
import './DeveloperSection.css'; // Renamed CSS file for clarity

const DeveloperSection = ({ project }) => {
  return (
    <div className="developer-container">
      <div className="developer-card">
        <img src={project.Developer_Logo ? `${project.Developer_Logo}` : '../img/RealtyKornerLogo.png'} alt="Developer Logo" className="developer-logo" />
        <h3 className="developer-title">{project.Developer_Name}</h3>
        <a href="http://localhost:3000/projectpage" className="developer-link">View all Projects <span>→</span></a>
      </div>
      <div className="developer-info">
        <div className="developer-stats">
          <div><strong>18</strong><div>Total Projects</div></div>
          <div><strong>9</strong><div>Ongoing Projects</div></div>
          <div><strong>0</strong><div>Upcoming Projects</div></div>
        </div>
        <p className="developer-description">
          {project.Description
            ? (project.Description.length > 200
              ? project.Description.substring(0, 200) + '...'
              : project.Description)
            : 'No description available'}
          <span className="read-more">Read more</span>
        </p>
      </div>
    </div>
  );
};

export default DeveloperSection;
