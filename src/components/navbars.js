import React from "react";
import "../styles/nav.css"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import carousel1 from "../front/images1/carousel1.png";
import carousel2 from "../front/images1/caorusel2.png";
import carousel3 from "../front/images1/carousel3.png";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

export const Navbars = () => {
  return (
    <div className="navbar-carousel-wrapper">
      <Carousel controls={false} indicators={false} fade interval={3000}>
        {[carousel1, carousel2, carousel3].map((img, index) => (
          <Carousel.Item key={index}>
            <img src={img} alt="" className="navbar-bg-img" />
          </Carousel.Item>
        ))}
      </Carousel>

       <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            EOLPCH
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto nav-center">
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/hair-products">All Services</Nav.Link>
              <Nav.Link as={Link} to="/terms-and-policy">Terms & Policy</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/Apply">Apply</Nav.Link>
            </Nav>

            <Nav className="nav-icons">
              <Nav.Link as={Link} to="/search">
                <FaSearch />
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart />
              </Nav.Link>

              <Nav.Link as={Link} to="/Login">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};