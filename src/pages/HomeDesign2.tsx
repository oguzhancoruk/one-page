import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign2.css';

const HomeDesign2: React.FC = () => {
  return (
    <div className="home-design2">
      {/* Hero Section */}
      <section className="hero-classic">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-badge">
              <span>Dr. Aleyna Didem Aydın - Klinik Psikolog</span>
            </div>
            
            <h1 className="hero-main-title">
              Profesyonel Ruh Sağlığı<br />
              <span className="title-accent">Danışmanlığı</span>
            </h1>
            
            <p className="hero-lead">
              10 yılı aşkın deneyim ile bireysel terapi, çift danışmanlığı ve 
              travma tedavisi alanlarında size özel çözümler sunuyorum.
            </p>
            
            <div className="credentials-row">
              <div className="credential">
                <span className="cred-label">Eğitim:</span>
                <span>İstanbul Üniversitesi Doktora</span>
              </div>
              <div className="credential">
                <span className="cred-label">Üyelik:</span>
                <span>Türk Psikologlar Derneği</span>
              </div>
              <div className="credential">
                <span className="cred-label">Uzmanlık:</span>
                <span>EMDR & CBT Sertifikalı</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <Link to="/randevu" className="btn-classic btn-primary">
                Randevu Talebi
              </Link>
              <Link to="/hakkimda" className="btn-classic btn-secondary">
                Hakkımda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-classic">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-text">Başarılı Tedavi</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-text">Yıl Deneyim</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">%98</div>
              <div className="stat-text">Hasta Memnuniyeti</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-text">Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-intro">
            <h2>Uzmanlık Alanlarım</h2>
            <p>Kanıta dayalı modern terapi yaklaşımları</p>
          </div>
          
          <div className="services-classic-grid">
            <div className="service-classic-card">
              <div className="service-icon">👤</div>
              <h3>Bireysel Terapi</h3>
              <p>Anksiyete, depresyon ve kişisel gelişim</p>
              <ul>
                <li>Bilişsel Davranışçı Terapi</li>
                <li>EMDR Travma Terapisi</li>
                <li>Psikanalitik Yaklaşım</li>
              </ul>
            </div>
            
            <div className="service-classic-card">
              <div className="service-icon">💑</div>
              <h3>Çift Terapisi</h3>
              <p>İlişki sorunları ve evlilik danışmanlığı</p>
              <ul>
                <li>Gottman Yöntemi</li>
                <li>İletişim Becerileri</li>
                <li>Çatışma Çözümü</li>
              </ul>
            </div>
            
            <div className="service-classic-card">
              <div className="service-icon">🌐</div>
              <h3>Online Terapi</h3>
              <p>Güvenli uzaktan terapi hizmeti</p>
              <ul>
                <li>Video Konferans</li>
                <li>Esnek Saat Seçenekleri</li>
                <li>Gizlilik Garantisi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-classic">
        <div className="container">
          <div className="testimonial-content">
            <blockquote>
              "Dr. Aydın'ın profesyonel yaklaşımı ve empatik desteği sayesinde 
              yaşadığım anksiyete sorununu büyük ölçüde aştım. Kendimi çok daha 
              güçlü ve pozitif hissediyorum."
            </blockquote>
            <cite>- M. K., Bireysel Terapi Danışanı</cite>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta-classic">
        <div className="container">
          <div className="cta-classic-content">
            <h2>İlk Görüşme Ücretsiz</h2>
            <p>Size en uygun terapi yaklaşımını birlikte belirleyelim</p>
            <div className="contact-options">
              <Link to="/randevu" className="btn-classic btn-large btn-primary">
                Randevu Al
              </Link>
              <Link to="/iletisim" className="btn-classic btn-large btn-outline">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign2;