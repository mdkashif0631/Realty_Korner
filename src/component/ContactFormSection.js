// ContactFormSection.jsx
// import React from 'react';
import './ContactFormSection.css'; // Import the CSS
import EnquiryForm from './EnquiryForm';



const ContactFormSection = () => {

  return (
    <div className="contact-section">
      <div className="contact-container">

        {/* Left Section */}
        <div className="contact-left">
          <h2>Contact Us and Find Your Home!</h2>
          <div className="underline"></div>
          <p>
            Our broker centers are located throughout the entire country ensuring you get our assistance in every state.
            Our professional real estate team made sure you get the highest level of help with your property quests.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="contact-form-container">
          <EnquiryForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
