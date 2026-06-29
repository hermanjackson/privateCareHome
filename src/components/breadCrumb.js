import React from 'react';
import '../styles/breadcrum.css';
import { FaInstagramSquare, FaFacebook, FaTwitter } from 'react-icons/fa';

export const Breadcrumb = () => {
  return (
    <nav className="breadcrumb-bar">
      <div className="breadcrumb-container">
    
        <span className="breadcrumb-text">Call us: 561-318-9189</span>
        <div className="breadcrumb-socials">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};
