import React from 'react'
import './Calltoaction.css'
import { LuPhoneCall } from "react-icons/lu";

const CallToAction = () => {
    return (
        <div className='callToActiontext'>
            <div className='actionDetailContainer'>
                <div className='actionDetail'>
                    <h2 className='feelFree'>Feel Free to Contact Our Agents</h2>
                    <p>Fusce rutrum auctor odio vel sodales maecenas sit amet dignissim ex. Sed volutpat hendrerit nisl eget at mattis praesent maximus lectus in nulla fringilla, id euismod libero consequat etiam tellus justo, hendrerit amet.</p>
                    <div className='contactNumber'>
                        <div className='contactDetail'>
                            <img
                                className='contactimg'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHoDpxI7y7V_IUuzDSSPDsHkaj97kxqgJ_Q&s'
                                alt="logo"
                            />
                            <div className='nameNumber'>
                                <p>Team Realty Korner</p>
                                <h5><LuPhoneCall style={{color:"rgb(33, 28, 132"}} /> 620-089-2605</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='callToActionimg'>
                <img
                    className='mainimg'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHoDpxI7y7V_IUuzDSSPDsHkaj97kxqgJ_Q&s'
                    alt="logo"
                />
            </div>
        </div>
    )
}

export default CallToAction
