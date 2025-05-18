import "./header.css"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom';
import Banner from "../component/Banner";





const Header = () => {


    const [nav_bar, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!nav_bar);
    };
const closeMenu = () => setShowMenu(false);    


    return (
        <>
        <Banner />
        <div className='headerContainer' >
            <div className={nav_bar ? "mobile_menu" : "web_menu"}>
                <div className='menu'>
                    <ul className='menu_list'>
                        <li><Link style={{color:"black", textDecoration: "none"}} to="/" onClick={closeMenu} >Home</Link></li>
                        <li><Link style={{color:"black", textDecoration: "none"}} to="/project" onClick={closeMenu} >Project</Link></li>
                        <li><Link style={{color:"black", textDecoration: "none"}} to="/about" onClick={closeMenu} >About</Link></li>
                        <li><Link style={{color:"black", textDecoration: "none"}} to="/contacts" onClick={closeMenu} >Contacts</Link></li>
                    </ul>
                </div>
                <div className='user_btn'>
                    <button className='login'>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className='menu_icon'>
                <button onClick={handleButtonToggle}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
        </>
    )
}

export default Header
