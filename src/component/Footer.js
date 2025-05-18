import React from "react";
import "./footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* About Us */}
                <div className="aboutUsbox">
                    <h2 >ABOUT US</h2>
                    <p>
                        When it comes to professional real estate service, WMC believes in offering nothing but the very best.
                        Widely respected throughout the investment consulting community for our vast knowledge.
                    </p>
                    <div className="contact-info">
                        <div className="icon-row">
                            <FaMapMarkerAlt className="icons" />
                            <span>C-7/1043, Golf Course Road, DLF - V, Sector 54, Gurugram, Haryana 122001, India</span>
                        </div>
                        <div className="icon-row">
                            <FaPhoneAlt className="icons" />
                            <span>+91-8744966999</span>
                        </div>
                        <div className="icon-row">
                            <FaEnvelope className="icons" />
                            <span>info@wisemanindia.com</span>
                        </div>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="footerLinkBox">
                    <h2>USEFUL LINKS</h2>
                    <div className="footer-links">
                        <span>Whiteland The Aspen Sector 76</span>
                        <span>Elaan The Presidential - Sector 106</span>
                        <span>DLF The Arbour - Sector 63</span>
                        <span>Birla Navya</span>
                        <span>Puri The Aravalli - Sector 61</span>
                        <span>Trump Tower Delhi NCR</span>
                        <span>Signature Global City Sec 63 A</span>
                        <span>Tarc Tripundra - Delhi</span>
                    </div>
                </div>

                {/* Instagram */}
                <div className="instaPostBox">
                    <h2>INSTAGRAM</h2>
                    <div className="instagram-box">
                        <p>Posts</p>
                        <p>Posts</p>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="footer-social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaTwitter /></a>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                © 2025 WMC-India. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
