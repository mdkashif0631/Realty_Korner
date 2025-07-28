import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroPage.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaPlay } from 'react-icons/fa';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
// import { FaHeadphonesAlt } from 'react-icons/fa';
import HeroComponent from './HeroComponent';


const locationOptions = ["San Jacinto, USA", "North Dakota, Canada", "West Virginia, Paris"];
const propertyOptions = ["Commercial", "Residential", "Plot"];
const unitOptions = ["2 BHK", "5BHK", "2 Meeting Rooms", "Penthouse"];


const HeroPage = () => {


    const [location, setLocation] = useState('');
    const [checkInOut, setCheckInOut] = useState('');
    const [guests, setGuests] = useState('');

    const [showLocationOptions, setShowLocationOptions] = useState(false);
    const [showPropertyOptions, setShowPropertyOptions] = useState(false);
    const [showGuestOptions, setShowGuestOptions] = useState(false);

    const handleSelect = (setter, value, closer) => {
        setter(value);
        closer(false);
    };

    const filterOptions = (options, input) =>
        options.filter(option => option.toLowerCase().includes(input.toLowerCase()));

    return (
        <div>
            <div className='h_s_container'>
                <div className="test-hero-container">
                    <h1 className="test-hero-title">
                        Find the top <br />
                        <span className="test-underline">Properties nearby.</span>
                    </h1>

                    <p className="test-hero-subtitle">
                        We bring you not only a stay option, but an experience in your budget to enjoy the luxury.
                    </p>

                    <div className="test-hero-buttons">
                        <button className="test-discover-btn">Discover Now</button>
                        <div className="watch-story">
                            <div className="play-circle">
                                <img src='./img/img1.jpg' alt="Thumbnail" />
                                <FaPlay className="play-icon" />
                            </div>
                            <span>Watch our story</span>
                        </div>
                    </div>
                </div>
                <div className="support-container">
                    {/* Floating Left Circles */}
                    <div className="floating-image top">
                        <img src='./img/img1.jpg' alt="Preview 1" />
                    </div>
                    <div className="floating-image bottom">
                        <img src='./img/img2.jpg' alt="Preview 2" />
                    </div>

                    {/* Background Image */}
                    <div className="background-img" >
                        <HeroComponent/>
                    </div>

                </div>
                <div className="test-check-availability-container">
                    <h3 className="check-title">Check Availability</h3>
                    <div className="test-search-bar">
                        {/* Location Input */}
                        <div className="test-search-field">
                            <FaMapMarkerAlt className="icon" />
                            <div className="test-input-group">
                                <label>Location</label>
                                <input
                                    type="text"
                                    value={location}
                                    placeholder="Select location"
                                    onChange={(e) => {
                                        setLocation(e.target.value);
                                        setShowLocationOptions(true);
                                    }}
                                    onBlur={() => setTimeout(() => setShowLocationOptions(false), 200)}
                                    onFocus={() => setShowLocationOptions(true)}
                                />
                                {showLocationOptions && (
                                    <ul className="test-dropdown">
                                        {filterOptions(locationOptions, location).map((option, index) => (
                                            <li key={index} onClick={() => handleSelect(setLocation, option, setShowLocationOptions)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Date Input */}
                        <div className="test-search-field">
                            <FaCalendarAlt className="icon" />
                            <div className="test-input-group">
                                <label>Property Type</label>
                                <input
                                    type="text"
                                    value={checkInOut}
                                    placeholder="Select"
                                    onChange={(e) => {
                                        setCheckInOut(e.target.value);
                                        setShowPropertyOptions(true);
                                    }}
                                    onBlur={() => setTimeout(() => setShowPropertyOptions(false), 200)}
                                    onFocus={() => setShowPropertyOptions(true)}
                                />
                                {showPropertyOptions && (
                                    <ul className="test-dropdown">
                                        {filterOptions(propertyOptions, checkInOut).map((option, index) => (
                                            <li key={index} onClick={() => handleSelect(setCheckInOut, option, setShowPropertyOptions)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Guests & Rooms Input */}
                        <div className="test-search-field">
                            <FaUser className="icon" />
                            <div className="test-input-group">
                                <label>Search Property</label>
                                <input
                                    type="text"
                                    value={guests}
                                    placeholder="Unit Type"
                                    onChange={(e) => {
                                        setGuests(e.target.value);
                                        setShowGuestOptions(true);
                                    }}
                                    onBlur={() => setTimeout(() => setShowGuestOptions(false), 200)}
                                    onFocus={() => setShowGuestOptions(true)}
                                />
                                {showGuestOptions && (
                                    <ul className="test-dropdown">
                                        {filterOptions(unitOptions, guests).map((option, index) => (
                                            <li key={index} onClick={() => handleSelect(setGuests, option, setShowGuestOptions)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className='test-search'>
                        <button className="test-search-button"><IoSearchSharp />
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
