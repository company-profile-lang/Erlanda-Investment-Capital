import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import '../App.css'; // Untuk styling kustom

// Ganti dengan API Key Google Maps Anda yang sebenarnya
const Maps_API_KEY = 'AIzaSyA8feSAc8Ccdb3ywG0ggx6bvEqcJxMjjPw'; 

const ContactUsPage = () => {
  // Koordinat kantor PT Erlanda Investment Capital (Contoh: Jakarta Pusat)
  const center = {
    lat: -6.1753924, // Latitude contoh
    lng: 106.8271528  // Longitude contoh
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '15px', // Lebih bulat untuk tampilan modern
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)' // Shadow lebih menonjol
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: Maps_API_KEY
  });

  const renderMap = () => {
    if (loadError) {
      return <p className="text-danger text-center">Error memuat peta. Pastikan API Key valid.</p>;
    }
    if (!isLoaded) {
      return <p className="text-center text-muted">Memuat Peta...</p>;
    }

    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    // Di sini Anda bisa menambahkan logika untuk reset form
    event.target.reset(); // Mereset form setelah submit
  };

  return (
    <>
      {/* Hero Section Halaman Kontak - dengan background dinamis */}
      <div className="page-hero-section contact-hero-bg text-white text-center d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Hubungi Kami</h1>
          <p className="lead my-3 animate__animated animate__fadeInUp animate__delay-0.5s">Kami siap bermitra untuk masa depan teknologi pertahanan.</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center"> {/* Pusatkan baris */}
          {/* Bagian Formulir Kontak */}
          <Col lg={7} md={8} className="mb-4"> {/* Sesuaikan ukuran kolom */}
            <Card className="shadow-lg p-4 h-100 border-0 rounded-4 animate__animated animate__fadeInLeft"> {/* Shadow lebih kuat, sudut lebih bulat, tanpa border */}
              <Card.Body>
                <Card.Title className="h3 mb-4 text-primary fw-bold">Kirim Pesan kepada Kami</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formNama">
                    <Form.Label className="fw-bold">Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Cth: Budi Santoso" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="fw-bold">Alamat Email</Form.Label>
                    <Form.Control type="email" placeholder="Cth: nama@email.com" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubjek">
                    <Form.Label className="fw-bold">Subjek</Form.Label>
                    <Form.Control type="text" placeholder="Tujuan pesan Anda" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPesan">
                    <Form.Label className="fw-bold">Pesan Anda</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Tulis pesan Anda di sini secara detail..." required />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3 animate__animated animate__pulse animate__infinite">
                    Kirim Pesan
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Bagian Informasi Kontak & Peta */}
          <Col lg={5} md={8} className="mb-4"> {/* Sesuaikan ukuran kolom */}
            <Card className="shadow-lg p-4 h-100 border-0 rounded-4 animate__animated animate__fadeInRight"> {/* Shadow lebih kuat, sudut lebih bulat, tanpa border */}
              <Card.Body>
                <Card.Title className="h3 mb-4 text-primary fw-bold">Informasi Kontak</Card.Title>
                
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-geo-alt-fill me-3 fs-2 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Alamat Kami:</h6>
                    <p className="mb-0">Jl. Teknologi Pertahanan No. 17, Jakarta Pusat, Indonesia</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-telephone-fill me-3 fs-2 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Telepon:</h6>
                    <p className="mb-0">(021) 12345678</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-envelope-fill me-3 fs-2 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Email:</h6>
                    <p className="mb-0">info@erlandaic.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-clock-fill me-3 fs-2 text-secondary"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Jam Operasional:</h6>
                    <p className="mb-0">Senin - Jumat, 09.00 - 17.00 WIB</p>
                  </div>
                </div>
                
                <h5 className="mt-4 mb-3 text-primary fw-bold">Ikuti Kami</h5>
                <div className="d-flex social-icons">
                  <a href="https://www.linkedin.com/company/erlanda-investment-capital" target="_blank" rel="noopener noreferrer" className="me-3 fs-2 text-primary social-icon-hover">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/erlanda_ic" target="_blank" rel="noopener noreferrer" className="me-3 fs-2 text-info social-icon-hover">
                    <i className="bi bi-twitter"></i>
                  </a>
                  {/* Tambahkan ikon media sosial lainnya jika relevan */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="me-3 fs-2 text-danger social-icon-hover">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>

                <h5 className="mt-4 mb-3 text-primary fw-bold">Lokasi Kami</h5>
                {renderMap()} {/* Memanggil fungsi renderMap */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUsPage;