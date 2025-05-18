import React from 'react'
import "./carousel.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
// import Img4 from './img/Img4.png'


function Carousal() {
    return (
        <div className="carouselContainer">
            <Carousel className='carouselbox' data-bs-theme="dark w-100">
                <Carousel.Item className='carousalItem w-100'>
                    <img style={{ height: "80vh" }}
                        className="img_size w-100"
                        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='proj_dtl'>
                        <h1>First slide label...............</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousalItem'>
                    <img style={{ height: "80vh" }}
                        className="img_size w-100"
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='proj_dtl'>
                        <h1>Second slide label...............</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousalItem'>
                    <img style={{ height: "80vh" }}
                        className="img_size w-100"
                        src="https://img.freepik.com/free-photo/shiny-night-city_1127-8.jpg?semt=ais_hybrid&w=740"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='proj_dtl'>
                        <h1>Third slide label.......................</h1>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div className='adsBox'>
                <div className='ads'>
                    <img style={{ height: "120px" }}
                        className="img_size"
                        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg"
                        alt="First slide"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default Carousal;