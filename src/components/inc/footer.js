import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer
  className="footer-section text-light py-5"
  style={{
    background: "#111",
    borderTop: "1px solid #d4af37",
  }}
>
  <div className="container">

    <div className="row">

      {/* Brand */}
      <div className="col-lg-4 mb-4">
        <h2
          style={{
            color: "#d4af37",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          SAIR
        </h2>

        <p className="text-light mt-3">
          Premium Hair Bundles, Frontals, Wigs,
          Hair Care Products and Beauty Essentials.
          Luxury quality designed to help you
          look and feel your best.
        </p>
      </div>

      {/* Shop */}
      <div className="col-lg-4 mb-4">
        <h5 style={{ color: "#d4af37" }}>
          Shop
        </h5>

        <ul className="list-unstyled mt-3">

          <li className="mb-2">
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/shop-all" className="footer-link">
              Shop All
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/wig" className="footer-link">
              Wigs
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/bundle" className="footer-link">
              Hair Bundles
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/products" className="footer-link">
              Hair Products
            </Link>
          </li>

        </ul>
      </div>

      {/* Customer Care */}
      <div className="col-lg-4 mb-4">

        <h5 style={{ color: "#d4af37" }}>
          Customer Care
        </h5>

        <ul className="list-unstyled mt-3">

          <li className="mb-2">
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/faq" className="footer-link">
              FAQ
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/terms-and-policy" className="footer-link">
              Terms & Privacy
            </Link>
          </li>

          <li className="mt-3">
            <strong>Email</strong><br />
            support@sairhair.com
          </li>

          <li className="mt-2">
            <strong>Phone</strong><br />
            (***) ***-****
          </li>

        </ul>

      </div>

    </div>

    <hr style={{ borderColor: "#444" }} />

    <div className="text-center">
      <small style={{ color: "#aaa" }}>
        © {new Date().getFullYear()} SAIR Hair Bundles & Products.
        All Rights Reserved.
      </small>
    </div>

  </div>
</footer>
  );
};