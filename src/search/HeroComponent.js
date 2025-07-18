import React, { useState, useEffect, useCallback, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./HeroComponent.css";

const images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
];

const HeroComponent = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef(null);
  const intervalRef = useRef(null);

  const getSideImage = useCallback(
    (offset) => images[(index + offset + images.length) % images.length],
    [index]
  );

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setDirection("right");
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, 6000);
  }, [isHovered]);

  const prevSlide = useCallback(() => {
    setDirection("right");
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection("left");
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  // Preload side images
  useEffect(() => {
    [getSideImage(-1), getSideImage(1)].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [getSideImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevSlide, nextSlide]);

  // Auto-slide
  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, [resetTimer]);

  return (
    <div
      className="carousel-container_"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-slider">
        <img className="side-image left" src={getSideImage(-1)} alt="Previous slide preview" />

        <TransitionGroup className="carousel-center">
          <CSSTransition
            key={images[index]}
            classNames={`slide-${direction}`}
            timeout={500}
            nodeRef={nodeRef}
          >
            <div className="main-image-wrapper" ref={nodeRef}>
              <div className="carousel-controls-left">
                <button onClick={prevSlide} aria-label="Previous Slide">❮</button>
              </div>
              <img
                className="hero-main-image"
                src={images[index]}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-controls-right">
                <button onClick={nextSlide} aria-label="Next Slide">❯</button>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>

        <img className="side-image right" src={getSideImage(1)} alt="Next slide preview" />
      </div>
    </div>
  );
};

export default HeroComponent;
