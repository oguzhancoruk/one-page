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
            <h3>Dr. Aleyna Didem Aydın</h3>
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
              <li><Link to="/hizmetler">Hizmetler</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hizmetler</h4>
            <ul className="footer-links">
              <li><Link to="/hizmetler#bireysel">Bireysel Terapi</Link></li>
              <li><Link to="/hizmetler#cift">Çift Terapisi</Link></li>
              <li><Link to="/hizmetler#travma">Travma Tedavisi</Link></li>
              <li><Link to="/hizmetler#gelisim">Kişisel Gelişim</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:info@aleynaidemaydın.com">info@aleynaidemaydın.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+905551234567">+90 555 123 45 67</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-link">
                <span>💼</span>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <span>📷</span>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Dr. Aleyna Didem Aydın. Tüm hakları saklıdır.</p>
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