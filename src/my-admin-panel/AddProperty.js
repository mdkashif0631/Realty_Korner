import React, { useState } from 'react';
import axios from 'axios';
import './AddProperty.css';
// import { useNavigate } from 'react-router-dom';


import { groupAmenitiesByCategory } from '../utils/groupAmenities';

const AddProperty = () => {

  const initialState = {
    // type
    Project_type: '',
    Project_category: '',
    Project_status: '',
    Project_tag: [],


    // About Project
    // Id: '',
    Project_File_Name: '',
    Project_Name: '',
    Developer_Name: '',
    Developer_Logo: null,
    Description: '',
    Developer_Rera_No: '',
    Our_Rera_Number: '',

    // Address
    State: '',
    City: '',
    Location: '',
    Localities: '',
    Pin_Code: '',

    // Feature of Project
    // ( For 2 BHK )
    Beds_2bhk: '',
    Super_Area_2bhk: '',
    Carpet_Area_2bhk: '',
    Built_Up_Area_2bhk: '',
    Price_per_sq_2bhk: '',
    Total_Price_2bhk: '',
    Floor_Plan_2bhk: null,

    // ( For 3 BHK )
    Beds_3bhk: '',
    Super_Area_3bhk: '',
    Carpet_Area_3bhk: '',
    Built_Up_Area_3bhk: '',
    Price_per_sq_3bhk: '',
    Total_Price_3bhk: '',
    Floor_Plan_3bhk: null,

    // ( For 4 BHK )
    Beds_4bhk: '',
    Super_Area_4bhk: '',
    Carpet_Area_4bhk: '',
    Built_Up_Area_4bhk: '',
    Price_per_sq_4bhk: '',
    Total_Price_4bhk: '',
    Floor_Plan_4bhk: null,

    // ( For 5 BHK )
    Beds_5bhk: '',
    Super_Area_5bhk: '',
    Carpet_Area_5bhk: '',
    Built_Up_Area_5bhk: '',
    Price_per_sq_5bhk: '',
    Total_Price_5bhk: '',
    Floor_Plan_5bhk: null,

    // ( For Penthouse )
    Penthouse: '',
    Super_Area_Penthouse: '',
    Carpet_Area_Penthouse: '',
    Built_Up_Area_Penthouse: '',
    Price_per_sq_Penthouse: '',
    Total_Price_Penthouse: '',
    Floor_Plan_Penthouse: null,

    // Max & Min Price
    Master_Paln: null,
    Location_Map: null,
    Google_Map: null,
    End_price: '',
    Start_price: '',

    // Project Related Image
    Main_Image: null,
    Image: null,
    Image01: null,
    Image02: null,
    Image03: null,
    Image04: null,

    // Project Status
    Built: '',
    Garages: '',
    Mode: '',
    Possession: '',
    Number_of_unit: '',

    // Other Data
    Security: '',
    Link: '',

    // Amenities
    Amenities: []
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  // const navigate = useNavigate();


  const iconMap = {
    "Project Highlights": "🏗️",
    "Tower/Building Amenities": "🏢",
    "Security & Technology": "🔐",
    "Outdoor Amenities": "🌳",
    "Clubhouse & Wellness Amenities": "💆",
    "Interior Features": "🛋️",
    "Lifestyle & Convenience": "🛒",
    "Educational & Healthcare Proximity": "🏥"
  };

  const featuresByCategory = {
    "Project Highlights": [
      "Gated Community", "IGBC Certified Green Building", "Earthquake-Resistant Structure",
      "Premium Location Advantage", "Signature Clubhouse", "High-Speed Elevators",
      "Grand Entrance Lobby", "High Street Retail Zone (if applicable)",
      "Smart Home Automation (where applicable)", "Designed by Renowned Architects"
    ],
    "Tower/Building Amenities": [
      "Double-Height Lobby", "Concierge Services", "Valet Parking", "Separate Service Lifts",
      "Basement Parking", "EV Charging Stations"
    ],
    "Security & Technology": [
      "3-Tier Security System", "CCTV Surveillance", "Video Door Phone",
      "Boom Barrier Entry/Exit", "Access Card Entry to Towers", "Fire Detection and Sprinkler System"
    ],
    "Outdoor Amenities": [
      "Landscaped Central Greens", "Jogging Track", "Water Features & Fountains",
      "Outdoor Gym", "Kids' Play Area", "Pet Zone", "Amphitheatre", "Yoga & Meditation Lawn"
    ],
    "Clubhouse & Wellness Amenities": [
      "Swimming Pool with Deck", "Kids Pool", "Indoor Gymnasium", "Spa & Sauna",
      "Indoor Games Room (Pool, Table Tennis)", "Mini Theatre", "Multipurpose Hall", "Co-Working Lounge"
    ],
    "Interior Features": [
      "VRV/VRF Air Conditioning", "Modular Kitchen with Appliances", "Italian Marble Flooring in Living/Dining",
      "Wooden Flooring in Bedrooms", "Branded Fittings & Fixtures", "False Ceiling with LED Lighting",
      "Spacious Balconies", "Walk-In Wardrobes (Select Units)"
    ],
    "Lifestyle & Convenience": [
      "Grocery Store / Convenience Store", "Malls", "Cafeteria / Coffee Lounge", "Business Center / Conference Room",
      "Laundry Services", "ATM/Banking Kiosk", "Daycare / Crèche Facility"
    ],
    "Educational & Healthcare Proximity": [
      "Close to Reputed Schools", "Close to Reputed Universitys", "Near Major Hospitals", "Walking Distance from Metro Station (if applicable)"
    ]
  };

  const featureIconMap = {
    "Gated Community": "🔒",
    "IGBC Certified Green Building": "🌿",
    "Earthquake-Resistant Structure": "🏢",
    "Premium Location Advantage": "📍",
    "Signature Clubhouse": "🏛️",
    "High-Speed Elevators": "⬆️",
    "Grand Entrance Lobby": "🚪",
    "High Street Retail Zone (if applicable)": "🛍️",
    "Smart Home Automation (where applicable)": "📲",
    "Designed by Renowned Architects": "✏️",
    "Double-Height Lobby": "🏢",
    "Concierge Services": "🧑‍💼",
    "Valet Parking": "🚗",
    "Separate Service Lifts": "🛗",
    "Basement Parking": "🅿️",
    "EV Charging Stations": "🔌",
    "3-Tier Security System": "🛡️",
    "CCTV Surveillance": "📹",
    "Video Door Phone": "📞",
    "Boom Barrier Entry/Exit": "🚧",
    "Access Card Entry to Towers": "🔑",
    "Fire Detection and Sprinkler System": "🔥",
    "Landscaped Central Greens": "🌼",
    "Jogging Track": "🏃",
    "Water Features & Fountains": "⛲",
    "Outdoor Gym": "🏋️",
    "Kids' Play Area": "👶",
    "Pet Zone": "🐶",
    "Amphitheatre": "🎭",
    "Yoga & Meditation Lawn": "🧘",
    "Swimming Pool with Deck": "🏊",
    "Kids Pool": "👧",
    "Indoor Gymnasium": "🏋️‍♂️",
    "Spa & Sauna": "🧖",
    "Indoor Games Room (Pool, Table Tennis)": "🎮",
    "Mini Theatre": "🎬",
    "Multipurpose Hall": "🏟️",
    "Co-Working Lounge": "💼",
    "VRV/VRF Air Conditioning": "💨",
    "Modular Kitchen with Appliances": "🍽️",
    "Italian Marble Flooring in Living/Dining": "🧱",
    "Wooden Flooring in Bedrooms": "🪵",
    "Branded Fittings & Fixtures": "🛠️",
    "False Ceiling with LED Lighting": "💡",
    "Spacious Balconies": "🧱",
    "Walk-In Wardrobes (Select Units)": "👗",
    "Grocery Store / Convenience Store": "🛒",
    "Malls": "🏬",
    "Cafeteria / Coffee Lounge": "☕",
    "Business Center / Conference Room": "📊",
    "Laundry Services": "🧺",
    "ATM/Banking Kiosk": "🏧",
    "Daycare / Crèche Facility": "👶",
    "Close to Reputed Schools": "🏫",
    "Close to Reputed Universitys": "🎓",
    "Near Major Hospitals": "🏥",
    "Walking Distance from Metro Station (if applicable)": "🚇"
  };


  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (name === "Project_type") {
      if (value === "Commercial") {
        setFormData({
          ...formData,
          Project_type: "Commercial",
          Meeting_Room: '',
          Cabins: '',
          Work_Station: '',
          No_Seat_WS: '',
          Private_Pantry: '',
          Wash_Rooms: '',
          Super_Area_Commercial: '',
          Carpet_Area_Commercial: '',
          Built_Up_Area_Commercial: '',
          Price_per_sq_Commercial: '',
          Total_Price_Commercial: '',
          Floor_Plan_Commercial: null,
        });
      } else if (value === "Plot") {
        setFormData({
          ...formData,
          Project_type: "Plot",
          Super_Area_Plot: '',
          Price_per_sq_Plot: '',
          Total_Price_Plot: '',
          Floor_Plan_Plot: null,
        });
      } else {
        setFormData({
          ...initialState,
          Project_type: "Residential"
        });
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'file' ? files[0] : value,
      }));
    }
  };



  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prevData) => {
      const updatedTags = checked
        ? [...prevData.Project_tag, value]       // add tag
        : prevData.Project_tag.filter((tag) => tag !== value);  // remove tag

      return {
        ...prevData,
        Project_tag: updatedTags,
      };
    });
  };


  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      Amenities: checked
        ? [...prev.Amenities, value]
        : prev.Amenities.filter((a) => a !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();

    // Group amenities
    const groupedAmenities = groupAmenitiesByCategory(formData.Amenities);
    data.append("Amenities", JSON.stringify(groupedAmenities));

    // Append other formData entries
    Object.entries(formData).forEach(([key, val]) => {
      if (key === "Amenities") return;
      if (val instanceof File) {
        data.append(key, val);
      } else if (Array.isArray(val)) {
        val.forEach((item) => data.append(key, item));
      } else if (val !== null && val !== undefined) {
        data.append(key, val);
      }
    });

    // Set endpoint
    const BASE_URL = process.env.REACT_APP_API_URL;
    let endpoint = '';
    if (formData.Project_type === 'Commercial') {
      endpoint = '/commercialproperties';
    } else if (formData.Project_type === 'Plot') {
      endpoint = '/plotproperties';
    } else {
      endpoint = '/properties';
    }

    try {
      await axios.post(`${BASE_URL}${endpoint}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('✅ Project submitted successfully!');
      setFormData(initialState);
      window.location.reload('/');
    } catch (err) {
      console.error('❌ Submission error:', err);
      alert('❌ Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label>Project Type:</label>
            <select name="Project_type" onChange={handleChange} value={formData.Project_type}>
              <option value="">Select Option</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Plot</option>
            </select>
            <label>Project Category:</label>
            <select name="Project_category" onChange={handleChange} value={formData.Project_category}>
              <option value="">Select Option</option>
              <option>High-Rise Apartment</option>
              <option>Independent/Builder Floor</option>
              <option>Villas</option>
              <option>Residential Land</option>
              <option>Studio Apartment</option>
              <option>Row Houses</option>
              <option>Penthouse</option>
            </select>
            <label>Project Status:</label>
            <select name="Project_status" onChange={handleChange} value={formData.Project_status}>
              <option value="">Select Option</option>
              <option>New Launch</option>
              <option>Upcoming Project</option>
              <option>Under Constrution</option>
              <option>Ready to Move-in</option>
            </select>
            <label>Project Tag:</label>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {["Treanding", "Luxuray", "Recommended", "Budget", "Premium"].map((tag) => (
                <div key={tag}>
                  <label>
                    <input
                      type="checkbox"
                      name="Project_tag"
                      value={tag}
                      checked={formData.Project_tag.includes(tag)}
                      onChange={handleCheckboxChange}
                    />
                    {tag}
                  </label>
                </div>
              ))}
            </div>

          </div>
        );
      case 2:
        return (
          <div>

            <label>Project File Name:</label>
            <input placeholder='Enter ' type="text" name="Project_File_Name" onChange={handleChange} value={formData.Project_File_Name} />
            <label>Project Name:</label>
            <input placeholder='Enter ' type="text" name="Project_Name" onChange={handleChange} value={formData.Project_Name} />
            <label>Developer Name:</label>
            <input placeholder='Enter ' type="text" name="Developer_Name" onChange={handleChange} value={formData.Developer_Name} />
            <label>Developer Logo:</label>
            <input placeholder='Enter ' type="file" name="Developer_Logo" onChange={handleChange} />
            <label>Project Description:</label>
            <textarea placeholder='Enter Description......... ' rows="5" style={{ width: '100%' }} type="text" name="Description" onChange={handleChange} value={formData.Description} ></textarea>
            <label>Project Rera Number:</label>
            <input placeholder='Enter ' type="text" name="Developer_Rera_No" onChange={handleChange} value={formData.Developer_Rera_No} />
          </div>
        );
      case 3:
        return (
          <div>
            <label>State:</label>
            <input placeholder='Enter ' type="text" name="State" onChange={handleChange} value={formData.State} />
            <label>City:</label>
            <input placeholder='Enter ' type="text" name="City" onChange={handleChange} value={formData.City} />
            <label>Location:</label>
            <input placeholder='Enter ' type="text" name="Location" onChange={handleChange} value={formData.Location} />
            <label>Localities:</label>
            <input placeholder='Enter ' type="text" name="Localities" onChange={handleChange} value={formData.Localities} />
            <label>Pin_Code:</label>
            <input placeholder='Enter ' type="text" name="Pin_Code" onChange={handleChange} value={formData.Pin_Code} />
          </div>
        );
      case 4:
        // Feacture of Project
        if (formData.Project_type === 'Residential') {
          return (
            <div>
              <div className='beds_box'>
                <h3>Configuration(2 BHK)</h3>
                <div className='beds_category'>
                  <label>2 BHK :</label>
                  <input placeholder='Enter ' className='beds_input' type="checkbox" name="Beds_2bhk"
                    onChange={(e) => setFormData({
                      ...formData,
                      Beds_2bhk: e.target.checked ? "2" : "",
                    })} />
                </div>
                <div className='beds_category' >
                  <label>Super Area :</label>
                  <input placeholder='Enter ' type="text" name="Super_Area_2bhk" onChange={handleChange} value={formData.Super_Area_2bhk} />
                </div>
                <div className='beds_category'>
                  <label>Carpet Area :</label>
                  <input placeholder='Enter ' type="text" name="Carpet_Area_2bhk" onChange={handleChange} value={formData.Carpet_Area_2bhk} />
                </div>
                <div className='beds_category' >
                  <label>Built Up Area :</label>
                  <input placeholder='Enter ' type="text" name="Built_Up_Area_2bhk" onChange={handleChange} value={formData.Built_Up_Area_2bhk} />
                </div>
                <div className='beds_category' >
                  <label>Price (sq/fit):</label>
                  <input placeholder='Enter ' type="text" name="Price_per_sq_2bhk" onChange={handleChange} value={formData.Price_per_sq_2bhk} />
                </div>
                <div className='beds_category'>
                  <label>Total Price :</label>
                  <input placeholder='Enter ' type="text" name="Total_Price_2bhk" onChange={handleChange} value={formData.Price_per_sq_2bhk * formData.Super_Area_2bhk} />
                </div>
                <div className='beds_category'>
                  <label>Floor Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Floor_Plan_2bhk" onChange={handleChange} />
                </div>
              </div>
              <div className='beds_box'>
                <h3>Configuration(3 BHK)</h3>
                <div className='beds_category'>
                  <label>3 BHK :</label>
                  <input placeholder='Enter ' className='beds_input' type="checkbox" name="Beds_3bhk" onChange={(e) => setFormData({
                    ...formData,
                    Beds_3bhk: e.target.checked ? "3" : "",
                  })} />
                </div>
                <div className='beds_category'>
                  <label>Super Area :</label>
                  <input placeholder='Enter ' type="text" name="Super_Area_3bhk" onChange={handleChange} value={formData.Super_Area_3bhk} />
                </div>
                <div className='beds_category'>
                  <label>Carpet Area :</label>
                  <input placeholder='Enter ' type="text" name="Carpet_Area_3bhk" onChange={handleChange} value={formData.Carpet_Area_3bhk} />
                </div>
                <div className='beds_category'>
                  <label>Built Up Area :</label>
                  <input placeholder='Enter ' type="text" name="Built_Up_Area_3bhk" onChange={handleChange} value={formData.Built_Up_Area_3bhk} />
                </div>
                <div className='beds_category'>
                  <label>Price (sq/fit):</label>
                  <input placeholder='Enter ' type="text" name="Price_per_sq_3bhk" onChange={handleChange} value={formData.Price_per_sq_3bhk} />
                </div>
                <div className='beds_category'>
                  <label>Total Price :</label>
                  <input placeholder='Enter ' type="text" name="Total_Price_3bhk" onChange={handleChange} value={formData.Price_per_sq_3bhk * formData.Super_Area_3bhk} />
                </div>
                <div className='beds_category'>
                  <label>Floor Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Floor_Plan_3bhk" onChange={handleChange} />
                </div>
              </div>
              <div className='beds_box'>
                <h3>Configuration(4 BHK)</h3>
                <div className='beds_category'>
                  <label>4 BHK :</label>
                  <input placeholder='Enter ' className='beds_input' type="checkbox" name="Beds_4bhk" onChange={(e) => setFormData({
                    ...formData,
                    Beds_4bhk: e.target.checked ? "4" : "",
                  })} />
                </div>
                <div className='beds_category'>
                  <label>Super Area :</label>
                  <input placeholder='Enter ' type="text" name="Super_Area_4bhk" onChange={handleChange} value={formData.Super_Area_4bhk} />
                </div>
                <div className='beds_category'>
                  <label>Carpet Area :</label>
                  <input placeholder='Enter ' type="text" name="Carpet_Area_4bhk" onChange={handleChange} value={formData.Carpet_Area_4bhk} />
                </div>
                <div className='beds_category'>
                  <label>Built Up Area :</label>
                  <input placeholder='Enter ' type="text" name="Built_Up_Area_4bhk" onChange={handleChange} value={formData.Built_Up_Area_4bhk} />
                </div>
                <div className='beds_category'>
                  <label>Price (/sq fit) :</label>
                  <input placeholder='Enter ' type="text" name="Price_per_sq_4bhk" onChange={handleChange} value={formData.Price_per_sq_4bhk} />
                </div>
                <div className='beds_category'>
                  <label>Total Price :</label>
                  <input placeholder='Enter ' type="text" name="Total_Price_4bhk" onChange={handleChange} value={formData.Price_per_sq_4bhk * formData.Super_Area_4bhk} />
                </div>
                <div className='beds_category'>
                  <label>Floor Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Floor_Plan_4bhk" onChange={handleChange} />
                </div>
              </div>
              <div className='beds_box'>
                <h3>Configuration(5 BHK)</h3>
                <div className='beds_category'>
                  <label>5 BHK :</label>
                  <input placeholder='Enter ' className='beds_input' type="checkbox" name="Beds_5bhk" onChange={(e) => setFormData({
                    ...formData,
                    Beds_5bhk: e.target.checked ? "5" : "",
                  })} />
                </div>
                <div className='beds_category'>
                  <label>Super Area :</label>
                  <input placeholder='Enter ' type="text" name="Super_Area_5bhk" onChange={handleChange} value={formData.Super_Area_5bhk} />
                </div>
                <div className='beds_category'>
                  <label>Carpet Area :</label>
                  <input placeholder='Enter ' type="text" name="Carpet_Area_5bhk" onChange={handleChange} value={formData.Carpet_Area_5bhk} />
                </div>
                <div className='beds_category'>
                  <label>Built Up Area :</label>
                  <input placeholder='Enter ' type="text" name="Built_Up_Area_5bhk" onChange={handleChange} value={formData.Built_Up_Area_5bhk} />
                </div>
                <div className='beds_category'>
                  <label>Price (/sq fit) :</label>
                  <input placeholder='Enter ' type="text" name="Price_per_sq_5bhk" onChange={handleChange} value={formData.Price_per_sq_5bhk} />
                </div>
                <div className='beds_category'>
                  <label>Total Price :</label>
                  <input placeholder='Enter ' type="text" name="Total_Price_5bhk" onChange={handleChange} value={formData.Price_per_sq_5bhk * formData.Super_Area_5bhk} />
                </div>
                <div className='beds_category'>
                  <label>Floor Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Floor_Plan_5bhk" onChange={handleChange} />
                </div>
              </div>
              <div className='beds_box'>
                <h3>Configuration(Penthouse)</h3>
                <div className='beds_category'>
                  <label>Penthouse :</label>
                  <input placeholder='Enter ' className='beds_input' type='checkbox' name="Penthouse" onChange={(e) => setFormData({
                    ...formData,
                    Penthouse: e.target.checked ? "Penthouse" : "",
                  })} />
                </div>
                <div className='beds_category'>
                  <label>Super Area :</label>
                  <input placeholder='Enter ' type="text" name="Super_Area_Penthouse" onChange={handleChange} value={formData.Super_Area_Penthouse} />
                </div>
                <div className='beds_category'>
                  <label>Carpet Area :</label>
                  <input placeholder='Enter ' type="text" name="Carpet_Area_Penthouse" onChange={handleChange} value={formData.Carpet_Area_Penthouse} />
                </div>
                <div className='beds_category'>
                  <label>Built Up Area :</label>
                  <input placeholder='Enter ' type="text" name="Built_Up_Area_Penthouse" onChange={handleChange} value={formData.Built_Up_Area_Penthouse} />
                </div>
                <div className='beds_category'>
                  <label>Price (/sq fit) :</label>
                  <input placeholder='Enter ' type="text" name="Price_per_sq_Penthouse" onChange={handleChange} value={formData.Price_per_sq_Penthouse} />
                </div>
                <div className='beds_category'>
                  <label>Total Price :</label>
                  <input placeholder='Enter ' type="text" name="Total_Price_Penthouse" onChange={handleChange} value={formData.Price_per_sq_Penthouse * formData.Super_Area_Penthouse} />
                </div>
                <div className='beds_category'>
                  <label>Floor Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Floor_Plan_Penthouse" onChange={handleChange} />
                </div>
              </div>
              <div className='beds_box'>
                <h3>Configuration</h3>
                <div className='beds_category'>
                  <label>Number Of Units :</label>
                  <input placeholder='Enter ' name="Number_of_unit" onChange={handleChange} value={formData.Number_of_unit} />
                </div>
                <div className='beds_category'>
                  <label>Built Area :</label>
                  <input placeholder='Enter ' name="Built" onChange={handleChange} value={formData.Built} />
                </div>
                <div className='beds_category'>
                  <label>Possession :</label>
                  <input placeholder='Enter ' type='date' name="Possession" onChange={handleChange} value={formData.Possession} />
                </div>
                <div className='beds_category'>
                  <label>Mode :</label>
                  <input placeholder='Enter ' type="text" name="Mode" onChange={handleChange} value={formData.Mode} />
                </div>
                <div className='beds_category'>
                  <label>Parking :</label>
                  <input placeholder='Enter ' type="text" name="Garages" onChange={handleChange} value={formData.Garages} />
                </div>
                <div className='beds_category'>
                  <label>Max Price :</label>
                  <input placeholder='Enter ' type="text" name="End_price" onChange={handleChange} value={formData.End_price} />
                </div>
                <div className='beds_category'>
                  <label>Min Price :</label>
                  <input placeholder='Enter ' type="text" name="Start_price" onChange={handleChange} value={formData.Start_price} />
                </div>
                <div className='beds_category'>
                  <label>Master Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Master_Plan" onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Location Map Image :</label>
                  <input placeholder='Enter ' type="file" name="Location_Map" onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Google Map Image :</label>
                  <input placeholder='Enter ' type="file" name="Google_Map" onChange={handleChange} />
                </div>
              </div>
            </div>
          );
        } else if (formData.Project_type === 'Commercial') {
          return (
            <div>
              <h4>Commercial Features</h4>
              <div className='beds_box'>
                <div className='beds_category'>
                  <label>Meeting Room:</label>
                  <input placeholder='Enter ' type="text" name="Meeting_Room" value={formData.Meeting_Room || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Cabins:</label>
                  <input placeholder='Enter ' type="text" name="Cabins" value={formData.Cabins || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Work_Station:</label>
                  <input placeholder='Enter ' type="text" name="Work_Station" value={formData.Work_Station || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>No_Seat_WS:</label>
                  <input placeholder='Enter ' type="text" name="No_Seat_WS" value={formData.No_Seat_WS || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Private_Pantry:</label>
                  <input placeholder='Enter ' type="text" name="Private_Pantry" value={formData.Private_Pantry || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Wash_Rooms:</label>
                  <input placeholder='Enter ' type="text" name="Wash_Rooms" value={formData.Wash_Rooms || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Super_Area_Commercial:</label>
                  <input placeholder='Enter ' type="text" name="Super_Area_Commercial" value={formData.Super_Area_Commercial || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Carpet_Area_Commercial:</label>
                  <input placeholder='Enter ' type="text" name="Carpet_Area_Commercial" value={formData.Carpet_Area_Commercial || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Built_Up_Area_Commercial:</label>
                  <input placeholder='Enter ' type="text" name="Built_Up_Area_Commercial" value={formData.Built_Up_Area_Commercial || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Price_per_sq_Commercial:</label>
                  <input placeholder='Enter ' type="text" name="Price_per_sq_Commercial" value={formData.Price_per_sq_Commercial || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Total_Price_Commercial:</label>
                  <input placeholder='Enter ' type="text" name="Total_Price_Commercial" value={formData.Price_per_sq_Commercial * formData.Super_Area_Commercial || ''} onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Floor Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Floor_Plan_Penthouse" onChange={handleChange} />
                </div>
              </div>
              <div className='beds_box'>
                <h3>Configuration</h3>
                <div className='beds_category'>
                  <label>Number Of Units :</label>
                  <input placeholder='Enter ' type="number" name="Number_of_unit" onChange={handleChange} value={formData.Number_of_unit} />
                </div>
                <div className='beds_category'>
                  <label>Built Area :</label>
                  <input placeholder='Enter ' type="text" name="Built" onChange={handleChange} value={formData.Built} />
                </div>
                <div className='beds_category'>
                  <label>Possession :</label>
                  <input placeholder='Enter ' type='date' name="Possession" onChange={handleChange} value={formData.Possession} />
                </div>
                <div className='beds_category'>
                  <label>Mode :</label>
                  <input placeholder='Enter ' type="text" name="Mode" onChange={handleChange} value={formData.Mode} />
                </div>
                <div className='beds_category'>
                  <label>Parking :</label>
                  <input placeholder='Enter ' type="text" name="Garages" onChange={handleChange} value={formData.Garages} />
                </div>
                <div className='beds_category'>
                  <label>Max Price :</label>
                  <input placeholder='Enter ' type="text" name="End_price" onChange={handleChange} value={formData.End_price} />
                </div>
                <div className='beds_category'>
                  <label>Min Price :</label>
                  <input placeholder='Enter ' type="text" name="Start_price" onChange={handleChange} value={formData.Start_price} />
                </div>
                <div className='beds_category'>
                  <label>Master Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Master_Plan" onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Location Map Image :</label>
                  <input placeholder='Enter ' type="file" name="Location_Map" onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Google Map Image :</label>
                  <input placeholder='Enter ' type="file" name="Google_Map" onChange={handleChange} />
                </div>
              </div>
            </div>
          );
        } else if (formData.Project_type === 'Plot') {
          return (
            <div>
              <div className='beds_box'>
                <h4>Plot Features</h4>
                <label>Super Area:</label>
                <input placeholder='Enter ' type="text" name="Super_Area_Plot" value={formData.Super_Area_Plot || ''} onChange={handleChange} />
                <label>Price per sq.ft:</label>
                <input placeholder='Enter ' type="text" name="Price_per_sq_Plot" value={formData.Price_per_sq_Plot || ''} onChange={handleChange} />
                <label>Total Price:</label>
                <input placeholder='Enter ' type="text" name="Total_Price_Plot" value={formData.Total_Price_Plot || ''} onChange={handleChange} />
                <label>Floor Plan:</label>
                <input placeholder='Enter ' type="file" name="Floor_Plan_Plot" onChange={handleChange} />
              </div>
              <div className='beds_box'>
                <h3>Configuration</h3>
                <div className='beds_category'>
                  <label>Number Of Units :</label>
                  <input placeholder='Enter ' type="number" name="Number_of_unit" onChange={handleChange} value={formData.Number_of_unit} />
                </div>
                <div className='beds_category'>
                  <label>Built Area :</label>
                  <input placeholder='Enter ' type="text" name="Built" onChange={handleChange} value={formData.Built} />
                </div>
                <div className='beds_category'>
                  <label>Possession :</label>
                  <input placeholder='Enter ' type='date' name="Possession" onChange={handleChange} value={formData.Possession} />
                </div>
                <div className='beds_category'>
                  <label>Mode :</label>
                  <input placeholder='Enter ' type="text" name="Mode" onChange={handleChange} value={formData.Mode} />
                </div>
                <div className='beds_category'>
                  <label>Parking :</label>
                  <input placeholder='Enter ' type="text" name="Garages" onChange={handleChange} value={formData.Garages} />
                </div>
                <div className='beds_category'>
                  <label>Max Price :</label>
                  <input placeholder='Enter ' type="text" name="End_price" onChange={handleChange} value={formData.End_price} />
                </div>
                <div className='beds_category'>
                  <label>Min Price :</label>
                  <input placeholder='Enter ' type="text" name="Start_price" onChange={handleChange} value={formData.Start_price} />
                </div>
                <div className='beds_category'>
                  <label>Master Plan Image :</label>
                  <input placeholder='Enter ' type="file" name="Master_Plan" onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Location Map Image :</label>
                  <input placeholder='Enter ' type="file" name="Location_Map" onChange={handleChange} />
                </div>
                <div className='beds_category'>
                  <label>Google Map Image :</label>
                  <input placeholder='Enter ' type="file" name="Google_Map" onChange={handleChange} />
                </div>
              </div>
            </div>
          );
        }
        break;
      case 5:
        return (
          <div className='project_images'>
            <div>
              <label>Project Main Image :</label>
              <input placeholder='Enter ' type="file" name="Main_Image" onChange={handleChange} />
            </div>
            <div>
              <label>Project Image 1:</label>
              <input placeholder='Enter ' type="file" name="Image" onChange={handleChange} />
            </div>
            <div>
              <label>Project Image 2:</label>
              <input placeholder='Enter ' type="file" name="Image01" onChange={handleChange} />
            </div>
            <div>
              <label>Project Image 3:</label>
              <input placeholder='Enter ' type="file" name="Image02" onChange={handleChange} />
            </div>
            <div>
              <label>Project Image 4:</label>
              <input placeholder='Enter ' type="file" name="Image03" onChange={handleChange} />
            </div>
            <div>
              <label>Project Image 5:</label>
              <input placeholder='Enter ' type="file" name="Image04" onChange={handleChange} />
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h3>Amenities</h3>
            {Object.entries(featuresByCategory).map(([category, features]) => (
              <div key={category}>
                <h4 className='amenities-add-category'><span>{iconMap[category] || "✅"}</span> {category}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {features.map((feature) => (
                    <label key={feature}>
                      <input
                        type="checkbox"
                        value={feature}
                        checked={formData.Amenities.includes(feature)}
                        onChange={handleAmenityChange}
                      />
                      <span>{featureIconMap[feature] || "✅"}</span> {feature}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="buttons">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}

          {step < 6 && (
            <button
              type="button"
              onClick={() => {
                const requiredFields = {
                  1: ['Project_type', 'Project_category', 'Project_status', 'Project_tag'],
                  2: ['Project_File_Name', 'Project_Name', 'Developer_Name', 'Developer_Rera_No'],
                  3: ['State', 'City', 'Location'],
                  // 4: Add step 4 required fields here later
                  5: ['Main_Image'],
                };

                const currentRequired = requiredFields[step] || [];
                const missing = currentRequired.filter(
                  (field) => !formData[field]
                );

                if (missing.length > 0) {
                  alert(`Please fill all required fields: ${missing.join(', ')}`);
                  return;
                }

                setStep((prev) => prev + 1);
              }}
            >
              Next
            </button>
          )}


          {step === 6 && (
            <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Submitting <span className="spinner" />
                </>
              ) : 'Submit'}
            </button>
          )}
        </div>

      </form>
    </div>
  );
};

export default AddProperty;
