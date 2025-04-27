import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold">Company Information</h6>
            <hr className="bg-light" />
            <p>
              Okeechobee Blvd Suite 100<br />
              Store Hours: MON - SUN / 8AM - 8PM
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <hr className="bg-light" />
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/aboutsus" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-bold">Contact Information</h6>
            <hr className="bg-light" />
            <p className="mb-1">Lambe Academy</p>
            <p className="mb-1">561-225-0443</p>
          </div>

        </div>

        <div className="text-center mt-4 text-secondary small">
          &copy; {new Date().getFullYear()} Lambe Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};