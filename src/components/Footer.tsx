import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Uzm. Kl. Psk. Aleyna Didem Aydın</h3>
            <p>
              Ruh sağlığınız için güvenilir ve profesyonel psikolojik destek.
              Her bireyin eşsiz olduğuna inanıyor, kişiselleştirilmiş terapi yaklaşımları sunuyorum.
            </p>
          </div>

          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul className="footer-links">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/hakkimda">Hakkımda</Link></li>
              <li><Link to="/sss">SSS</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hizmetler</h4>
            <ul className="footer-links">
              <li>Bireysel Terapi</li>
              <li>Çift Terapisi</li>
              <li>Ergen Terapisi</li>
              <li>Online Terapi</li>
              <li>Kişisel Gelişim</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">E-posta:</span>
                <a href="mailto:psikologaleynadidemaydin@gmail.com">psikologaleynadidemaydin@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Telefon:</span>
                <span></span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Adres:</span>
                <span>Bahçeşehir 2. Kısım, Avni Akyol Bulvarı, 34488 Başakşehir/İstanbul</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/psk.aleynadidemaydin/" aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Uzm. Kl. Psk. Aleyna Didem Aydın. Tüm hakları saklıdır.</p>
            <div className="footer-bottom-links">
              <Link to="/gizlilik">Gizlilik Politikası</Link>
              <Link to="/kullanim">Kullanım Şartları</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;