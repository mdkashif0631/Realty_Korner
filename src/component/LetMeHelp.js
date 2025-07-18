import React from 'react'
import './letmehelp.css'
// import { IoMdArrowDropup } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdHouse } from "react-icons/md";

const LetMeHelp = () => {
    return (
        <div className='letMeHelpContainer'>
            <div className='let_me_help_content_part1'>
                <div className='helpLeft'>
                    <div className='help_left_content'>
                        <div className='top_square'></div>
                        <h1>LET US HLEP YOU FIND<br /><span>YOUR DREAMS</span>.</h1>
                        <div className='bottom_square'></div>
                    </div>
                </div>
                <div className='helpRight'>
                    <div className='help_right_content'>
                        <h2>YOUR PROPERTY.<br /> <span style={{ color: "#2763ff" }}>OUR PRECISION.</span></h2>
                        <p>WMC is a leading real estate advisory and sales firm specializing in premium residential and commercial properties in Gurgaon. With a strong network and deep market insights, we assist both investors and end-users in making well-informed real estate decisions. Our expertise lies in delivering high-quality, data-driven sales and advisory services, ensuring maximum value for our clients.</p>

                    </div>
                </div>
            </div>
            <div className='let_me_help_content_part2'>
                <div className='btn_heading'>
                    <h1>WE MAKE YOUR LIFE EASY&nbsp;<span style={{ color: "#2763ff" }}>HERE's HOW.</span></h1>
                </div>
                <div className='btn_container'>
                    <div className='btn_box_detail'>
                        <div className='s_p_btn'>
                            <button className='s_p'>STRATEGIC PLANNING <FaRegHandshake className='popup_icon' /></button>
                            <p className='dropdown_s_p'>We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study the evolving market trends and suggest customized solutions pertaining to the chosen location for investment. What differentiates us is the way we adapt and change our real estate investment strategies according to the fluctuating market trends.</p>
                        </div>
                        <div className='s_p_btn'>
                            <button className='s_p'>TRUSTED PARTNER<MdHouse className='popup_icon' /></button>
                            <p className='dropdown_s_p'>With our years of experience in real estate investments we guide our customers in making the right decision while making their investments. We ensure that our customers’ investment objectives are fully met by helping them choose the right property and making sure that the investments are made at the right price.</p>
                        </div>
                        <div className='s_p_btn'>
                            <button>DELIVER RESULTS<BsFillBuildingsFill className='popup_icon' /></button>
                            <p className='dropdown_s_p'>Our projects are unique because they are opportunities specially created for investment. Usually, your real estate investment options are limited to plots, villas and apartments etc. But our properties are specially picked for investment. You get a chance to invest in a range of properties and over years, these can turn out to be great assets for you and your family.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LetMeHelp
