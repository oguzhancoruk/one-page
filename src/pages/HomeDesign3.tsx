import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign3.css';

const HomeDesign3: React.FC = () => {
  return (
    <div className="home-design3">
      {/* Hero Card */}
      <section className="hero-modern">
        <div className="container">
          <div className="hero-card">
            <div className="hero-card-content">
              <div className="doctor-info">
                <div className="doctor-avatar"></div>
                <div className="doctor-details">
                  <h1>Dr. Aleyna Didem Aydın</h1>
                  <p className="title">Uzman Klinik Psikolog</p>
                  <div className="rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-text">4.9/5 (127 değerlendirme)</span>
                  </div>
                </div>
              </div>
              
              <p className="hero-description">
                Anksiyete, depresyon ve ilişki sorunlarında uzman. EMDR ve CBT 
                sertifikalı terapist olarak 10+ yıl deneyimle hizmet veriyorum.
              </p>
              
              <div className="quick-info">
                <div className="info-item">
                  <span className="icon">🎓</span>
                  <span>İ.Ü. Doktora</span>
                </div>
                <div className="info-item">
                  <span className="icon">📍</span>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <div className="info-item">
                  <span className="icon">⏰</span>
                  <span>Online/Yüz yüze</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <Link to="/randevu" className="btn-modern primary">
                  <span>Randevu Al</span>
                  <span className="btn-arrow">→</span>
                </Link>
                <Link to="/iletisim" className="btn-modern secondary">
                  Ücretsiz Danışma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-modern">
        <div className="container">
          <h2 className="section-title">Hizmetlerim</h2>
          
          <div className="services-card-grid">
            <div className="service-modern-card">
              <div className="service-header">
                <div className="service-badge">Popüler</div>
                <h3>Bireysel Terapi</h3>
                <div className="price">₺800/seans</div>
              </div>
              <div className="service-features">
                <div className="feature">✓ 50 dakika seans</div>
                <div className="feature">✓ CBT & EMDR</div>
                <div className="feature">✓ Online/Yüz yüze</div>
                <div className="feature">✓ İlk görüşme ücretsiz</div>
              </div>
              <Link to="/randevu" className="service-btn">Seç</Link>
            </div>

            <div className="service-modern-card featured">
              <div className="service-header">
                <div className="service-badge special">Önerilen</div>
                <h3>Çift Terapisi</h3>
                <div className="price">₺1200/seans</div>
              </div>
              <div className="service-features">
                <div className="feature">✓ 60 dakika seans</div>
                <div className="feature">✓ Gottman Yöntemi</div>
                <div className="feature">✓ İletişim becerileri</div>
                <div className="feature">✓ Ön görüşme ücretsiz</div>
              </div>
              <Link to="/randevu" className="service-btn">Seç</Link>
            </div>

            <div className="service-modern-card">
              <div className="service-header">
                <div className="service-badge">Esnek</div>
                <h3>Online Terapi</h3>
                <div className="price">₺700/seans</div>
              </div>
              <div className="service-features">
                <div className="feature">✓ 50 dakika seans</div>
                <div className="feature">✓ Güvenli platform</div>
                <div className="feature">✓ Esnek saatler</div>
                <div className="feature">✓ Kayıt imkanı</div>
              </div>
              <Link to="/randevu" className="service-btn">Seç</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="stats-summary">
        <div className="container">
          <div className="summary-card">
            <h2>Performans Özeti</h2>
            <div className="stats-modern-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-details">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Danışan</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-details">
                  <div className="stat-number">4.9</div>
                  <div className="stat-label">Ortalama Puan</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-details">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Yıl Deneyim</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-details">
                  <div className="stat-number">%95</div>
                  <div className="stat-label">Başarı Oranı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Card */}
      <section className="reviews-modern">
        <div className="container">
          <div className="reviews-card">
            <h2>Son Değerlendirmeler</h2>
            <div className="reviews-list">
              <div className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">M</div>
                    <div>
                      <div className="reviewer-name">Mehmet K.</div>
                      <div className="review-stars">★★★★★</div>
                    </div>
                  </div>
                  <div className="review-date">2 gün önce</div>
                </div>
                <p className="review-text">
                  "Anksiyete problemimde çok yardımcı oldu. Profesyonel yaklaşımı sayesinde 
                  kendimi çok daha iyi hissediyorum."
                </p>
              </div>
              
              <div className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">A</div>
                    <div>
                      <div className="reviewer-name">Ayşe D.</div>
                      <div className="review-stars">★★★★★</div>
                    </div>
                  </div>
                  <div className="review-date">1 hafta önce</div>
                </div>
                <p className="review-text">
                  "Çift terapisi seansları ilişkimizi kurtardı. Eşimle iletişimimiz 
                  çok daha iyi artık."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="cta-modern">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>İlk Adımı Atmaya Hazır mısınız?</h2>
              <p>Ücretsiz ön görüşme ile başlayın. Size en uygun tedavi planını birlikte oluşturalım.</p>
              <div className="cta-actions">
                <Link to="/randevu" className="btn-modern primary large">
                  Hemen Başla
                </Link>
                <Link to="/iletisim" className="btn-modern outline large">
                  Daha Fazla Bilgi
                </Link>
              </div>
            </div>
            <div className="cta-visual">
              <div className="success-indicator">
                <div className="indicator-item">
                  <span className="indicator-dot active"></span>
                  <span>Randevu Al</span>
                </div>
                <div className="indicator-item">
                  <span className="indicator-dot"></span>
                  <span>İlk Görüşme</span>
                </div>
                <div className="indicator-item">
                  <span className="indicator-dot"></span>
                  <span>Tedavi Başla</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign3;
