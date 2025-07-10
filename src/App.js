import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
// Impor halaman lainnya (buat file kosong terlebih dahulu)
import About from './pages/AboutUsPage';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Tambahkan route untuk halaman lain di sini */}
          <Route path="/tentang-kami" element={<About />} />
          {/* <Route path="/layanan" element={<Services />} /> */}
          {/* <Route path="/portofolio" element={<Portfolio />} /> */}
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;