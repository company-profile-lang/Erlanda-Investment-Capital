import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // For custom styling

// Import gambar-gambar proyek
import heroSlide1 from '../assets/heroSlide1.png'; // Gambar untuk carousel slide 1 (umum)
import heroSlide2 from '../assets/siber.png'; // Gambar untuk carousel slide 2 (umum)
import heroSlide3 from '../assets/hero3.png'; // Gambar untuk carousel slide 3 (umum)

// Gambar thumbnail untuk proyek spesifik
import projectThumbAI from '../assets/AI_mili.jpg';       // Contoh: AI untuk Pertahanan
import projectThumbDrone from '../assets/drone.webp';    // Contoh: Drone Pengintai
import projectThumbAnoa from '../assets/anoa.webp';        // Contoh: Anoa (APC)
import projectThumbSmartCar from '../assets/smart_v.webp'; // Contoh: Sistem Kendaraan Terintegrasi

const Homepage = () => {
  return (
    <>
      {/* Hero Section dengan Carousel */}
      <Carousel className="hero-carousel">
        <Carousel.Item interval={5000}> {/* Interval 5 detik per slide */}
          <img
            className="d-block w-100 hero-carousel-img"
            src={heroSlide1}
            alt="Sistem Pertahanan Bertenaga AI"
          />
          <Carousel.Caption className="hero-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-4 fw-bold">Mendefinisikan Masa Depan Pertahanan Melalui Investasi Strategis</h1>
            <p className="lead my-3">Mendorong inovasi teknologi militer untuk keamanan dan kemandirian nasional.</p>
            <div className="mt-3">
              <Button as={Link} to="/proyek" variant="primary" size="lg" className="me-2">Jelajahi Proyek Kami</Button>
              <Button as={Link} to="/kontak" variant="outline-light" size="lg">Ajukan Proposal Teknologi</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 hero-carousel-img"
            src={heroSlide2}
            alt="Solusi Keamanan Siber Canggih"
          />
          <Carousel.Caption className="hero-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-4 fw-bold">Perkuat Keamanan Siber, Lindungi Data Nasional</h1>
            <p className="lead my-3">Investasi pada solusi pertahanan siber terdepan untuk infrastruktur kritis.</p>
            <div className="mt-3">
              <Button as={Link} to="/proyek" variant="primary" size="lg" className="me-2">Lihat Solusi Siber</Button>
              <Button as={Link} to="/tentang" variant="outline-light" size="lg">Tentang Kami</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 hero-carousel-img"
            src={heroSlide3}
            alt="Robotika & Otomasi untuk Pertahanan"
          />
          <Carousel.Caption className="hero-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-4 fw-bold">Robotika & Otomasi: Gardu Depan Pertahanan</h1>
            <p className="lead my-3">Mendukung pengembangan sistem otonom untuk efisiensi dan keamanan operasional.</p>
            <div className="mt-3">
              <Button as={Link} to="/investasi" variant="primary" size="lg" className="me-2">Proses Investasi</Button>
              <Button as={Link} to="/kontak" variant="outline-light" size="lg">Kontak Kami</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Highlights Section (unchanged, still relevant as categories) */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Area Fokus Inovasi Kami</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm rounded h-100">
              <h3 className="h4">Kecerdasan Buatan (AI) & Otomasi</h3>
              <p>Mendanai solusi AI untuk sistem pengawasan, analisis data, dan operasional otonom.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm rounded h-100">
              <h3 className="h4">Siber & Keamanan Jaringan</h3>
              <p>Berinvestasi pada teknologi perlindungan siber dan intelijen ancaman untuk infrastruktur vital.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm rounded h-100">
              <h3 className="h4">Material & Manufaktur Canggih</h3>
              <p>Mendukung pengembangan material baru dan teknik manufaktur untuk aplikasi pertahanan.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Featured Projects Section (Portfolio Mini) - Updated with specific projects */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-5">Proyek Unggulan Kami</h2>
        <Row className="justify-content-center">
          {/* Proyek 1: AI untuk Pertahanan */}
          <Col lg={3} md={6} className="mb-4"> {/* Menggunakan lg=3 untuk 4 kolom di layar besar */}
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={projectThumbAI} alt="AI for Defense Systems" />
              <Card.Body>
                <Card.Title className="h5">Sistem Pengambilan Keputusan AI</Card.Title>
                <Card.Text>
                  Pengembangan platform AI untuk analisis medan perang, prediksi ancaman, dan optimasi logistik.
                </Card.Text>
                {/* <Button as={Link} to="/proyek/sistem-ai-pertahanan" variant="outline-primary" size="sm">Lihat Detail</Button> */}
              </Card.Body>
            </Card>
          </Col>

          {/* Proyek 2: Drone */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={projectThumbDrone} alt="Advanced Reconnaissance Drone" />
              <Card.Body>
                <Card.Title className="h5">Drone Pengintai Generasi Terbaru</Card.Title>
                <Card.Text>
                  Investasi pada drone dengan kapabilitas penerbangan jarak jauh dan sensor pengumpul data resolusi tinggi.
                </Card.Text>
                {/* <Button as={Link} to="/proyek/drone-pengintai" variant="outline-primary" size="sm">Lihat Detail</Button> */}
              </Card.Body>
            </Card>
          </Col>

          {/* Proyek 3: Anoa APC */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={projectThumbAnoa} alt="Anoa Armored Personnel Carrier Upgrade" />
              <Card.Body>
                <Card.Title className="h5">Upgrade Kendaraan Tempur Anoa</Card.Title>
                <Card.Text>
                  Peningkatan sistem komunikasi, navigasi, dan *situational awareness* untuk Anoa APC.
                </Card.Text>
                {/* <Button as={Link} to="/proyek/upgrade-anoa" variant="outline-primary" size="sm">Lihat Detail</Button> */}
              </Card.Body>
            </Card>
          </Col>

          {/* Proyek 4: Kendaraan dengan Sistem Komputer Terintegrasi */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={projectThumbSmartCar} alt="Integrated Smart Vehicle System" />
              <Card.Body>
                <Card.Title className="h5">Sistem Kendaraan Taktis Terintegrasi</Card.Title>
                <Card.Text>
                  Mendukung pengembangan kendaraan darat dengan sistem komputer dan sensor canggih untuk misi khusus.
                </Card.Text>
                {/* <Button as={Link} to="/proyek/kendaraan-terintegrasi" variant="outline-primary" size="sm">Lihat Detail</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button as={Link} to="/proyek" variant="dark" size="lg">Lihat Semua Proyek Kami</Button>
        </div>
      </Container>
    </>
  );
};

export default Homepage;