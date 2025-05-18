import React from 'react'
import './searchpannel.css'
import Img4 from '../img/Img4.png';
import { IoSearch } from "react-icons/io5";



const SearchPannel = () => {
    return (
        <div className='searchContainer'>
            <img
                className="img_size w-100"
                src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg"
                alt="First slide"
            />
            <div className='searchBoxItems'>
                <div className='adsBox'>
                    <img
                        className="img_size"
                        src={Img4}
                        alt="First slide"
                    />
                </div>
                <div className='searchBox'>
                    <div className='tagLine'>
                        <h2>Tag Line.....</h2>
                    </div>
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
                        <form action="/search" method="GET">
                            <input type="text" name="query" placeholder="Search here..." required />
                            <button type="submit"><IoSearch /></button>
                        </form>
                    </div>
                    <div className='topLocation'>
                        <p>Top Location : </p>
                        <button>Sohna Road</button>
                        <button>Golf Course Road</button>
                        <button>MG Road</button>
                        <button>Dwarka Expressway</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPannel
