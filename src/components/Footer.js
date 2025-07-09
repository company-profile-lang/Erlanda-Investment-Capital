import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} PT Erlanda Investment Capital. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://linkedin.com" className="text-white me-3"><FaLinkedin size={24} /></a>
            <a href="https://twitter.com" className="text-white"><FaTwitter size={24} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;