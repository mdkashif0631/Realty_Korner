import React from 'react'
import './banner.css'
// import RealtyKornerLogo from '../img/RealtyKornerLogo.png'; // Adjust the path as needed
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

const Banner = () => {
    return (

        <div className='bannerContainer'>
            <div className='banner'>
                <div className='rk_logo'>
                    <img src='../img/RealtyKornerLogo.png' alt="Logo" />
                </div>
                <div className='loca_mob'>
                    <div className='loca'>
                        <div className='loca_box'>
                            <div className='icon_loca'>
                                <MdOutlineLocationOn />
                            </div>
                            <div className='text_loca'>
                                <h3>Okhla</h3>
                                <p>New Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className='mob'>
                        <div className='mob_box'>
                            <div className='icon_mob'>
                                <IoIosPhonePortrait />
                            </div>
                            <div className='text_mob'>
                                <h4>Mobile</h4>
                                <p>+916200892605</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
