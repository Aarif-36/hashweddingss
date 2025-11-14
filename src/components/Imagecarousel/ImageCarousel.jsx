import React, { useState } from "react";
import './ImageCarousel.css'

const slides = [
  {
    leftTop: "/images/img2.jpg",
    leftBottom: "/images/img3.jpg",
    right: "/images/img2.jpg",
  },
  {
    leftTop: "/images/img4.jpg",
    leftBottom: "/images/img5.jpg",
    right: "/images/img6.jpg",
  },
  {
    leftTop: "/images/img7.jpg",
    leftBottom: "/images/img8.jpg",
    right: "/images/img9.jpg",
  },
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left-btn" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel">
        <div className="image-layout">
          <div className="left-column">
            <img
              src={slides[current].leftTop}
              alt="Top Left"
              className="img-small"
            />
            <img
              src={slides[current].leftBottom}
              alt="Bottom Left"
              className="img-small"
            />
          </div>
          <div className="right-column">
            <img
              src={slides[current].right}
              alt="Right Large"
              className="img-large"
            />
          </div>
        </div>
      </div>

      <button className="nav-btn right-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageCarousel;
