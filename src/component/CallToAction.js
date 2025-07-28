import React from 'react'
import './Calltoaction.css'
import { LuPhoneCall } from "react-icons/lu";

const CallToAction = () => {
    return (
        <div className='callToActiontext'>
            <div className='callto_action_box'>
                <div className='actionDetailContainer'>
                    <div className='actionDetail'>
                        <div className='feelFree'>
                            <h2 >Feel Free to Contact Our Agents</h2>
                        </div>
                        <p>Fusce rutrum auctor odio vel sodales maecenas sit amet dignissim ex. Sed volutpat hendrerit nisl eget at mattis praesent maximus lectus in nulla fringilla, id euismod libero consequat etiam tellus justo, hendrerit amet.</p>
                        <div className='contactNumber'>
                            <div className='contactDetail'>
                                <img
                                    className='contactimg'
                                    src='../img/customer_support_rk.jpg'
                                    alt="logo"
                                />
                                <div className='nameNumber'>
                                    <p>Team Realty Korner</p>
                                    <h5><LuPhoneCall style={{ color: "#2763ff" }} /> 620-089-2605</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='callToActionimg'>
                    <img
                        className='mainimg'
                        src='../img/Support_img.jpeg'
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToAction
