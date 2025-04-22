import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../front/images1/school1.jpg';
import image2 from '../../front/images1/school2.jpg';
import image3 from '../../front/images1/school3.jpg';

export const Slider = () => {
  const slides = [
    { image: image1, title: 'Lambe Academy' },
    { image: image2, title: 'Lambe Academy' },
    { image: image3, title: 'Lambe Academy' }
  ];

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  };

  const captionStyle = {
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
    textAlign: 'center',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ position: 'relative' }}>
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx} style={{ position: 'relative' }}>
            <img src={slide.image} className="d-block w-100" alt="School slide" style={{ objectFit: 'cover', height: '80vh' }} />
            <div style={overlayStyle}></div>
            <div className="carousel-caption " style={captionStyle}>
              <h1>{slide.title}</h1>
              <Link to="/Contact">
                <button
                  className="enroll-button"
                  style={buttonStyle}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};