import React from 'react'
import './searchpannel.css'
import { IoSearch } from "react-icons/io5";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const SearchPannel = () => {
    return (
        <div className='hero_container'>
            <div className='hero_box'>
                <div className="left_hero_part">
                    <div className="top_hero">
                        <div className='tagLine'>
                            <h2>EXPERTLY CURATED HOMES.</h2>
                            <h1>JUST A SEARCH AWAY.</h1>
                            <p>Looking for luxury homes that grow your wealth? Realty Korner curates investment-worthy projects in Gurgaon’s fastest-growing sectors. From launch offers to expert advice — we’ve got you covered. Search below to explore your next high-potential investment.</p>
                        </div>
                    </div>
                    <div className="bottom_hero">
                        <div className='searchBarBox'>
                            <div className='searchOption'>
                                <ul>
                                    <li>BUY</li>
                                    <li>RENT</li>
                                    <li className='newLaunch' style={{ width: "24%" }}>NEW LAUNCH</li>
                                    <li style={{ width: "28%" }} >COMMERCIAL</li>
                                    <li>PLOTS</li>
                                </ul>
                            </div>
                            <div className='searchBar'>
                                <form style={{marginLeft: "5px"}} action="/search" method="GET">
                                    <input style={{border: "none"}} type="text" name="query" placeholder="Search here..." required />
                                    <button type="submit"><IoSearch/></button>
                                </form>
                            </div>
                            <div className='topLocation'>
                                <p>TOP LOCATION : </p>
                                <div>
                                    <button>MG Road</button>
                                    <button>Sohna Road</button>
                                    <button>MG Road</button>
                                    <button>MG Road</button>
                                    <button>MG Road</button>
                                    <button>Golf Course Road</button>
                                    <button>Dwarka Expressway</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_hero_part">
                    <div className='hero_ads'>
                        <div className='adsBox'>
                            <p>Curated Urban Spaces</p>
                            <video className="img_ads" 
                                autoPlay
                                muted
                                loop
                                playsInline controls>
                                <source src='../img/video1.mp4' type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchPannel
