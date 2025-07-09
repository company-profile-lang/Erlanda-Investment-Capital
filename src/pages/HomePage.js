import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Untuk styling kustom

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold">Mitra Strategis Anda dalam Investasi Inovatif</h1>
          <p className="lead my-3">Mendorong pertumbuhan berkelanjutan dengan mendanai masa depan.</p>
          <Button as={Link} to="/layanan" variant="primary" size="lg" className="me-2">Pelajari Layanan Kami</Button>
          <Button as={Link} to="/kontak" variant="outline-light" size="lg">Hubungi Tim Ahli Kami</Button>
        </Container>
      </div>

      {/* Highlights Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Fokus Investasi Kami</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm rounded h-100">
              <h3 className="h4">Teknologi Keuangan (FinTech)</h3>
              <p>Mendanai inovasi yang mentransformasi layanan keuangan.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm rounded h-100">
              <h3 className="h4">Ekonomi Berkelanjutan</h3>
              <p>Berinvestasi pada solusi ramah lingkungan dan bisnis yang berdampak sosial.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm rounded h-100">
              <h3 className="h4">Perangkat Lunak (SaaS)</h3>
              <p>Mendukung platform digital yang menciptakan efisiensi dan skalabilitas.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;