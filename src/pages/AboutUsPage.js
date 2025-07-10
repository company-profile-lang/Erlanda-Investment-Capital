import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Link is not directly used in this version but kept for potential future use
import '../App.css'; // Untuk styling kustom

const AboutUsPage = () => {
  return (
    <>
      {/* Hero Section Halaman Tentang Kami - Tambahkan Animasi */}
      <div className="page-hero-section about-hero-bg text-white text-center d-flex align-items-center animate__animated animate__fadeIn">
        <Container>
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Dedikasi Kami untuk Keamanan Nasional</h1>
          <p className="lead my-3 animate__animated animate__fadeInUp animate__delay-0.5s">Membentuk masa depan pertahanan melalui inovasi dan kemitraan strategis.</p>
        </Container>
      </div>

      {/* Bagian Visi & Misi - Desain Kartu Lebih Dinamis */}
      <Container className="my-5 py-3"> {/* Tambahkan padding vertikal */}
        <Row className="justify-content-center text-center">
          <Col md={10} className="animate__animated animate__fadeInUp">
            <h2 className="mb-5 fw-bold text-primary">Visi & Misi Kami</h2> {/* Judul lebih menonjol */}
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 shadow-lg p-4 border-0 rounded-4 card-zoom-effect"> {/* Shadow lebih kuat, sudut lebih bulat, efek hover */}
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold text-dark">Visi</Card.Title>
                    <Card.Text className="text-muted">
                      Menjadi akselerator utama inovasi teknologi pertahanan yang berkontribusi pada kekuatan dan kemandirian keamanan nasional Indonesia.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 shadow-lg p-4 border-0 rounded-4 card-zoom-effect"> {/* Shadow lebih kuat, sudut lebih bulat, efek hover */}
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold text-dark">Misi</Card.Title>
                    <Card.Text className="text-muted text-start"> {/* Teks misi rata kiri */}
                      <ul className="list-unstyled"> {/* Hapus bullet bawaan */}
                        <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Mengidentifikasi dan mendanai proyek teknologi militer paling prospektif.</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Membangun ekosistem kolaboratif antara inovator, industri, dan pemerintah.</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Menyediakan keahlian strategis dan dukungan untuk percepatan pengembangan.</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-success"></i>Berkomitmen pada standar etika tertinggi dalam setiap investasi.</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Bagian Sejarah Perusahaan - Diperbaiki untuk Mobile & Lebih Dinamis */}
      <Container className="py-5 bg-light-blue-gradient"> {/* Ganti background */}
        <h2 className="text-center mb-5 fw-bold text-dark animate__animated animate__fadeInUp">Perjalanan Kami</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="lead text-center mb-5 text-muted animate__animated animate__fadeInUp animate__delay-0.3s">
              PT Erlanda Investment Capital didirikan dengan visi yang jelas: untuk mengisi celah pendanaan dalam pengembangan teknologi pertahanan di Indonesia. Sejak awal, kami telah berkomitmen untuk mendukung inovasi yang esensial bagi keamanan dan kemandirian bangsa.
            </p>
            {/* Timeline Baru yang Lebih Responsif */}
            <ul className="responsive-timeline animate__animated animate__fadeInUp animate__delay-0.5s">
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <div className="timeline-badge">2015</div>
                    <h4 className="timeline-title fw-bold text-primary">Pendirian PT Erlanda Investment Capital</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Fokus awal pada investasi strategis di sektor teknologi umum.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <div className="timeline-badge">2018</div>
                    <h4 className="timeline-title fw-bold text-primary">Pergeseran Fokus ke Teknologi Pertahanan</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Melihat potensi besar dan kebutuhan mendesak akan inovasi di sektor militer.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <div className="timeline-badge">2022</div>
                    <h4 className="timeline-title fw-bold text-primary">Pendanaan Proyek Drone Otonom Pertama</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Menandai tonggak penting dalam portofolio teknologi militer kami.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <div className="timeline-badge">Sekarang</div>
                    <h4 className="timeline-title fw-bold text-primary">Memimpin Investasi untuk Pertahanan Masa Depan</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Terus berinovasi dan mencari talenta terbaik untuk kemajuan teknologi pertahanan nasional.</p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Bagian Nilai Perusahaan - Desain Kartu Lebih Modern */}
      <Container className="py-5 bg-light-blue-gradient"> {/* Ganti background */}
        <h2 className="text-center mb-5 fw-bold text-dark animate__animated animate__fadeInUp">Nilai-Nilai Inti Kami</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="lead text-center mb-4 text-muted animate__animated animate__fadeInUp animate__delay-0.3s">
              Nilai-nilai ini menjadi panduan setiap keputusan dan tindakan kami di PT Erlanda Investment Capital.
            </p>
            <Row>
              <Col md={6} className="mb-4 animate__animated animate__zoomIn animate__delay-0.1s">
                <Card className="h-100 p-4 shadow-lg border-0 rounded-4 card-zoom-effect">
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold text-primary"><i className="bi bi-lightbulb-fill me-2"></i>Inovasi Tiada Henti</Card.Title>
                    <Card.Text className="text-muted">
                      Kami secara aktif mencari dan mendanai ide-ide disruptif yang akan membentuk masa depan pertahanan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4 animate__animated animate__zoomIn animate__delay-0.2s">
                <Card className="h-100 p-4 shadow-lg border-0 rounded-4 card-zoom-effect">
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold text-primary"><i className="bi bi-shield-fill-check me-2"></i>Integritas & Keamanan</Card.Title>
                    <Card.Text className="text-muted">
                      Setiap investasi kami menjunjung tinggi etika, transparansi, dan prioritas keamanan nasional.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4 animate__animated animate__zoomIn animate__delay-0.3s">
                <Card className="h-100 p-4 shadow-lg border-0 rounded-4 card-zoom-effect">
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold text-primary"><i className="bi bi-handshake-fill me-2"></i>Kemitraan Strategis</Card.Title>
                    <Card.Text className="text-muted">
                      Membangun hubungan kuat dengan para pemangku kepentingan untuk mencapai tujuan bersama.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4 animate__animated animate__zoomIn animate__delay-0.4s">
                <Card className="h-100 p-4 shadow-lg border-0 rounded-4 card-zoom-effect">
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold text-primary"><i className="bi bi-graph-up-arrow me-2"></i>Keunggulan Teknis</Card.Title>
                    <Card.Text className="text-muted">
                      Kami berinvestasi pada teknologi yang terbukti dan berpotensi memberikan dampak signifikan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUsPage;