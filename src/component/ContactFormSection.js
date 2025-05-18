// ContactFormSection.jsx
import React from 'react';
import './ContactFormSection.css'; // Import the CSS

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

          <h3>Need Some Help?</h3>
          <div className="help-section">
            <div className="help-item">
              <div className="help-icon">🗑️</div>
              <div>
                <h4>Cleaning Service</h4>
                <p>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                <a href="#">Learn More &rsaquo;</a>
              </div>
            </div>

            <div className="help-item">
              <div className="help-icon">✏️</div>
              <div>
                <h4>Interior Design</h4>
                <p>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                <a href="#">Learn More &rsaquo;</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
