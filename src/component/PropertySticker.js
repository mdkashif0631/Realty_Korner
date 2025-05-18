import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CarouselComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    const slides = [
      { id: 1, title: "Slide 1", image: "https://via.placeholder.com/800x400?text=Slide+1" },
      { id: 2, title: "Slide 2", image: "https://via.placeholder.com/800x400?text=Slide+2" },
      { id: 3, title: "Slide 3", image: "https://via.placeholder.com/800x400?text=Slide+3" },
    ];

  return (
    <div className="carousel-container" style={{ width: "80%", margin: "0 auto", paddingTop: "50px" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.title} style={{ width: "100%", borderRadius: "10px" }} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PropertySticker
