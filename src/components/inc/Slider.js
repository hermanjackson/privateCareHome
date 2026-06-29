import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import image1 from "../../front/images1/carousel1.png";
import image2 from "../../front/images1/caorusel2.png"; // if that's really the filename
import image3 from "../../front/images1/carousel3.png";
import "../../styles/slider.css";

export const Slider = () => {
  const slides = [
    { image: image1, title: 'Learn More' },
    { image: image2, title: 'Learn More' },
    { image: image3, title: 'Learn More' }
  ];

  const overlayStyle = {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  zIndex: 1,
};

const captionStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
};


return (
  <Carousel
  fade
  controls
  indicators
  interval={2500}
  pause={false}
  className="hero-carousel"
>
  {slides.map((slide, idx) => (
    <Carousel.Item key={idx}>
      <div style={{ position: "relative", height: "80vh" }}>
        <img
          src={slide.image}
          className="d-block w-100"
          alt={slide.title}
          style={{
            objectFit: "cover",
            height: "80vh",
          }}
        />

        <div style={overlayStyle}></div>

        <div style={captionStyle}>
          <h1 className="hero-title">{slide.title}</h1>

          <Link to="/Contact">
            <button className="hero-shop-btn">
              learn more
            </button>
          </Link>
        </div>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
);
};