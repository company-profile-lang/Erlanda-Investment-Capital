import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Uncomment jika punya logo

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          {/* <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" /> */}
          {' '}PT Erlanda Investment Capital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>Beranda</Nav.Link>
            <Nav.Link as={NavLink} to="/tentang-kami">Tentang Kami</Nav.Link>
            <Nav.Link as={NavLink} to="/layanan">Layanan</Nav.Link>
            <Nav.Link as={NavLink} to="/portofolio">Portofolio</Nav.Link>
            <Nav.Link as={NavLink} to="/kontak">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;