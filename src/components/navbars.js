import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Navbars = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
         
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="text-dark nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="text-dark nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="text-dark nav-link-custom">
              Contact
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/login"
              className="btn btn-outline-primary px-3 py-1 fw-semibold rounded-pill"
            >
              Login / Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};