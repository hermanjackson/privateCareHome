import React from 'react';
import '../styles/MarqueeSection.css';
import image21 from '../front/images1/faang4.png';
import image22 from '../front/images1/faang5.png';
import image23 from '../front/images1/faang6.png';
import image24 from '../front/images1/faang7.png';
import image25 from '../front/images1/faang8.png';
import image26 from '../front/images1/faang9.png';
import image27 from '../front/images1/faang10.png';
import image28 from '../front/images1/faang11.png';
import image29 from '../front/images1/faang12.png';
import image30 from '../front/images1/faang13.png';
import image31 from '../front/images1/faang14.png';
import image32 from '../front/images1/faang1.png';


const MarqueeSection = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <ul className="marquee-list">
          <li className="marquee-item">
            <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
              <img src={image21} alt="Microsoft" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image22} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image23} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image24} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image25} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image26} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image27} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image28} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image29} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image30} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image31} alt="Google" />
            </a>
          </li>
          <li className="marquee-item">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src={image32} alt="Google" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MarqueeSection;