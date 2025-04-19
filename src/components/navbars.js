import React from 'react'
import { Link } from "react-router-dom";
import "../styles/nav.css"
import { Navbar, Nav, Container } from 'react-bootstrap';



export const Navbars = () => {
    return (
        <>
   <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="text-dark">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="text-dark">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
    )
}