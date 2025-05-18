import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FaBed } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedProjectsCarousel.css';
import TrumpLogo from '../img/TrumpLogo.jpg';
import Trump01 from '../img/Trump01.png';
import TRG_Hero01 from '../img/TRG_Hero01.jpg';
import TRG_Hero02 from '../img/TRG_Hero02.jpg';
const projects = [
    {
        image: TRG_Hero01,
        logoimg: TrumpLogo,
        title: 'TRUMP TOWER 2.0',
        location: 'Sector 69, Golf Course Extn, Gurgaon',
        description:
            'Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health. Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health.',
        possession: 'Sep 2026',
        security: 'Secured Community',
        price: '₹ 3.00 cr - 6.80 cr',
    },
    {
        image: TRG_Hero02,
        logoimg: Trump01,
        title: 'THE PRESIDENTIAL',
        location: 'Sector 106, Gurgaon',
        description:
            'Elan Presidential offers smart and premium apartments with futuristic amenities, catering to luxury living in Gurgaon. Designed for modern families.Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health. Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health.',
        possession: 'Dec 2025',
        security: '24x7 Security',
        price: '₹ 2.90 cr - 5.50 cr',
    },
    {
        image: 'https://img.freepik.com/free-photo/low-view-modern-skyscrapers-office-buildings_23-2148836791.jpg?ga=GA1.1.862814551.1746440523&semt=ais_hybrid&w=740',
        logoimg: TrumpLogo,
        title: 'THE ARBOUR',
        location: 'Sector 63, Gurgaon',
        description:
            'DLF Arbour features world-class infrastructure with premium 4BHK apartments. Live surrounded by lush greenery and elite living spaces.Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health. Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health Whiteland has launched lavish Residential Group Housing Apartments in sector 76, Gurgaon called "The Aspen". It provides ultra-luxury 3BHK and 4BHK apartments designed to cater to every need of a modern family from leisure to health.',
        possession: 'Mar 2027',
        security: 'Gated Society',
        price: '₹ 4.00 cr - 7.00 cr',
    }
];

const FeaturedProjectsCarousel = () => {
    return (
        <div className='FeaturedProjectsContainer '>
            <div className="featureBox ">
                <div className='headingandName'>
                    <h1>
                        <span>FEATURED&nbsp;</span> PROJECT
                    </h1>
                    <p className="textFeartureProject">
                        Our projects are unique because they are opportunities specially created for Investment
                    </p>
                </div>
                <Carousel interval={null} className='feartureCard'>
                    {projects.map((proj, index) =>(
                        <Carousel.Item key={index} className='featureCarditem'>
                            <div className="featuredProjtDetail">
                                <div className='featureimage'>
                                    <img className='logoimage'
                                        src={proj.logoimg}
                                        alt="logo"
                                    />
                                    <img
                                        className="d-block projectimg rounded"
                                        src={proj.image}
                                        alt={proj.title}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <p className='reranumber'>RERA No. : RC/REP/HARERA/GGM/925/657/2025/28</p>
                                </div>
                                <div className='featuredDetailcontainer'>
                                    <div className='projectNameContainer'>
                                        <div className="projectName">
                                            <h1>
                                                {proj.title}
                                            </h1>
                                            <h5>
                                                {proj.location}
                                            </h5>
                                        </div>
                                    </div>
                                    <h2 className="fw" style={{ color: "#EFD7A1" }}>{proj.price}</h2>
                                    <p className="text-justify">
                                        {proj.description.length > 300 ? proj.description.substring(0, 300) + '...' : proj.description}
                                    </p>
                                    <div className='moredetail'>
                                        <div className='LeftDetail'>
                                            <p> <FaBed className='uniticon' /> Unit Type : 4 BHK, 5BHK & Penthouse</p>
                                            <p> <BiSolidArea className='uniticon' /> Project Size : 05 Acre</p>
                                            <p> <MdPhotoSizeSelectSmall className='uniticon' /> Unit Size : 3100 - 8000 sq ft</p>
                                        </div>
                                        <div className='rightDetail'>
                                            <p> <FaCar className='uniticon' /> Parking : 3 Level Basement</p>
                                            <p> <SlGraph className='uniticon' /> Current Status : New launche</p>
                                            <p> <FaHome className='uniticon' /> Possession : Oct 2029</p>
                                        </div>

                                    </div>
                                    <div className='readmorebutton'>
                                        <Button className="">
                                            READ MORE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
export default FeaturedProjectsCarousel;
