import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => (
  <Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home"><Image src="/logo.svg"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features" className="navi">Products</Nav.Link>
      <NavDropdown title="Resources" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#docs">Documentation</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#support">Support</Nav.Link>
      <Nav.Link href="#career">Careers</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className="nav_signup_btn btn">Create Account</Nav.Link>
      <Nav.Link href="#memes" className="nav_login_btn btn">
       Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  {/* <style jsx>{`
     .dropdown-toggle:after{
      display:none;
     }
  `}</style> */}
      
</Navbar>
);

export default Header;