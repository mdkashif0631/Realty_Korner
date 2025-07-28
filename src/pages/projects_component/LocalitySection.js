import React from 'react'
import './Localitysection.css';



const LocalitySection = ({project}) => {
  return (
    <div className='locality-container'>
        <div className='locality-items'>
            <img className='area-image' src={project.Location_Map ? `${project.Location_Map}`: '../img/RealtyKornerLogo.png'}  alt="Floor Plan" />
            <img className='google-map' src={project.Google_Map ? `${project.Google_Map}`: '../img/RealtyKornerLogo.png'} alt="Floor Plan" />
        </div>
        <div className='locality-btn'>
            <button className='land-mark'>School</button>
            <button className='land-mark'>College</button>
            <button className='land-mark'>Hospital</button>
            <button className='land-mark'>Hotel</button>
            <button className='land-mark'>Mall</button>
            <button className='land-mark'>Restaurant</button>
        </div>
    </div>
  )
}

export default LocalitySection
