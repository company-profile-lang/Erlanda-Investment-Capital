import React from 'react';

function Contact() {
  return (
    <section className="contact-page">
      <h1>Hubungi Kami</h1>
      <div className="contact-info">
        <p>Siap untuk berdiskusi tentang tujuan investasi Anda? Jangan ragu untuk menghubungi kami melalui informasi di bawah ini atau mengisi formulir kontak.</p>
        <h3>PT Erlanda Investment Capital</h3>
        <p>
          Jl. Merdeka No. 123,<br />
          Bandung, Jawa Barat 40111,<br />
          Indonesia
        </p>
        <p><strong>Telepon:</strong> +62 22 1234 5678</p>
        <p><strong>Email:</strong> info@erlandainvest.com</p>
        <p><strong>Jam Operasional:</strong> Senin - Jumat, 09.00 - 17.00 WIB</p>
      </div>

      <div className="contact-form">
        <h2>Kirim Pesan kepada Kami</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subjek:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan Anda:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
      </div>

      <div className="map-location">
        <h2>Lokasi Kami</h2>
        {/* Placeholder untuk Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.923896590242!2d107.6105432147728!3d-6.899479495034638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c1b1c2b5d%3A0x7d2b4f9d2d0b0a0!2sJl.%20Merdeka%20No.123%2C%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi PT Erlanda Investment Capital"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;