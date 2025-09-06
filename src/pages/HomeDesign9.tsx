import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign9.css';

const HomeDesign9: React.FC = () => {
  return (
    <div className="home-design9">
      {/* Executive Header */}
      <section className="executive-header">
        <div className="container">
          <div className="executive-top">
            <div className="credentials-executive">
              <div className="exec-badge">
                <span className="badge-icon">🏆</span>
                <div className="badge-content">
                  <span className="badge-title">UZMAN KLİNİK PSİKOLOG</span>
                  <span className="badge-subtitle">TPD Üyesi • EMDR Sertifikalı</span>
                </div>
              </div>
              
              <div className="exec-contact">
                <Link to="/randevu" className="btn-executive primary">
                  RANDEVU TALEBİ
                </Link>
                <a href="tel:+905551234567" className="btn-executive secondary">
                  ACİL ARAMA
                </a>
              </div>
            </div>
          </div>
          
          <div className="executive-hero">
            <div className="hero-executive-content">
              <h1 className="executive-title">
                <span className="title-prefix">Dr.</span>
                <span className="title-name">Aleyna Didem Aydın</span>
              </h1>
              
              <div className="executive-subtitle">
                <span className="subtitle-main">Kurumsal Ruh Sağlığı Danışmanlığı</span>
                <span className="subtitle-desc">
                  Executive coaching ve yönetici gelişim programları ile 
                  liderlik potansiyelinizi ortaya çıkarın
                </span>
              </div>
              
              <div className="executive-metrics">
                <div className="metric-executive">
                  <div className="metric-number">500+</div>
                  <div className="metric-label">Başarılı Yönetici</div>
                  <div className="metric-desc">Liderlik koçluğu</div>
                </div>
                <div className="metric-executive">
                  <div className="metric-number">50+</div>
                  <div className="metric-label">Fortune 500</div>
                  <div className="metric-desc">Kurumsal danışmanlık</div>
                </div>
                <div className="metric-executive">
                  <div className="metric-number">98%</div>
                  <div className="metric-label">Performans Artışı</div>
                  <div className="metric-desc">Ölçülmüş başarı</div>
                </div>
              </div>
              
              <div className="executive-specialties">
                <div className="specialty-item">
                  <span className="specialty-icon">📈</span>
                  <span>Liderlik Gelişimi</span>
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">🎯</span>
                  <span>Performans Optimizasyonu</span>
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">⚖️</span>
                  <span>Stres Yönetimi</span>
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">🤝</span>
                  <span>Takım Dinamikleri</span>
                </div>
              </div>
            </div>
            
            <div className="hero-executive-visual">
              <div className="exec-photo-frame">
                <div className="exec-photo"></div>
                <div className="frame-decoration">
                  <div className="decoration-item">🏅</div>
                  <div className="decoration-item">📊</div>
                  <div className="decoration-item">⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Executive */}
      <section className="services-executive">
        <div className="container">
          <div className="services-exec-header">
            <div className="header-exec-badge">UZMANILIK ALANLARI</div>
            <h2>Kurumsal Psikoloji Hizmetleri</h2>
            <p>Fortune 500 şirketleri için geliştirilen premium danışmanlık programları</p>
          </div>
          
          <div className="services-exec-grid">
            <div className="service-exec-card premium">
              <div className="service-exec-header">
                <div className="service-exec-icon">👔</div>
                <div className="service-exec-badge">PREMIUM</div>
              </div>
              <h3>Executive Coaching</h3>
              <div className="service-exec-price">₺5,000/seans</div>
              <p>C-level yöneticiler için özel liderlik gelişim programı</p>
              <div className="service-exec-features">
                <div className="feature-exec">✓ 1:1 Özel Koçluk</div>
                <div className="feature-exec">✓ 360° Liderlik Değerlendirmesi</div>
                <div className="feature-exec">✓ Stratejik Karar Alma</div>
                <div className="feature-exec">✓ Krize Müdahale Desteği</div>
              </div>
              <Link to="/hizmetler" className="service-exec-btn">DETAYLAR</Link>
            </div>
            
            <div className="service-exec-card">
              <div className="service-exec-header">
                <div className="service-exec-icon">👥</div>
              </div>
              <h3>Takım Gelişimi</h3>
              <div className="service-exec-price">₺15,000/grup</div>
              <p>Yüksek performanslı takımlar için özel eğitim</p>
              <div className="service-exec-features">
                <div className="feature-exec">✓ Takım Dinamikleri</div>
                <div className="feature-exec">✓ Çatışma Yönetimi</div>
                <div className="feature-exec">✓ İletişim Optimizasyonu</div>
                <div className="feature-exec">✓ Performans İzleme</div>
              </div>
              <Link to="/hizmetler" className="service-exec-btn">DETAYLAR</Link>
            </div>
            
            <div className="service-exec-card">
              <div className="service-exec-header">
                <div className="service-exec-icon">🏢</div>
              </div>
              <h3>Kurumsal Danışmanlık</h3>
              <div className="service-exec-price">Özel Fiyat</div>
              <p>Şirket geneli ruh sağlığı ve verimlilik programları</p>
              <div className="service-exec-features">
                <div className="feature-exec">✓ Örgütsel Psikoloji</div>
                <div className="feature-exec">✓ Çalışan Memnuniyeti</div>
                <div className="feature-exec">✓ Burnout Önleme</div>
                <div className="feature-exec">✓ Kültür Dönüşümü</div>
              </div>
              <Link to="/hizmetler" className="service-exec-btn">DETAYLAR</Link>
            </div>
          </div>
          
          <div className="services-exec-cta">
            <div className="cta-exec-content">
              <h3>Kurumsal İhtiyaçlarınız İçin Özel Çözümler</h3>
              <p>Her organizasyonun benzersiz ihtiyaçları için tasarlanmış danışmanlık paketleri</p>
              <Link to="/iletisim" className="btn-executive outline">
                ÖZELLEŞTİRİLMİŞ TEKLİF ALIN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="corporate-clients">
        <div className="container">
          <div className="clients-header">
            <h2>Güvenilen Kurumsal Partner</h2>
            <p>Türkiye'nin önde gelen şirketleri ile çalışma deneyimi</p>
          </div>
          
          <div className="clients-showcase">
            <div className="client-category">
              <h4>Teknoloji</h4>
              <div className="client-logos">
                <div className="client-logo">TECH A</div>
                <div className="client-logo">TECH B</div>
                <div className="client-logo">TECH C</div>
              </div>
            </div>
            
            <div className="client-category">
              <h4>Finans</h4>
              <div className="client-logos">
                <div className="client-logo">BANK A</div>
                <div className="client-logo">BANK B</div>
                <div className="client-logo">INV C</div>
              </div>
            </div>
            
            <div className="client-category">
              <h4>Sanayi</h4>
              <div className="client-logos">
                <div className="client-logo">IND A</div>
                <div className="client-logo">IND B</div>
                <div className="client-logo">IND C</div>
              </div>
            </div>
          </div>
          
          <div className="clients-stats">
            <div className="client-stat">
              <div className="stat-exec-number">250+</div>
              <div className="stat-exec-label">Şirket Danışanı</div>
            </div>
            <div className="client-stat">
              <div className="stat-exec-number">5000+</div>
              <div className="stat-exec-label">Yönetici Koçluğu</div>
            </div>
            <div className="client-stat">
              <div className="stat-exec-number">%94</div>
              <div className="stat-exec-label">Performans Artışı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonials */}
      <section className="executive-testimonials">
        <div className="container">
          <div className="testimonials-exec-header">
            <h2>Yönetici Referansları</h2>
            <p>C-level yöneticilerinden gelen değerlendirmeler</p>
          </div>
          
          <div className="testimonials-exec-grid">
            <div className="testimonial-exec-card featured">
              <div className="testimonial-exec-content">
                <div className="testimonial-exec-rating">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Dr. Aydın'ın executive coaching programı liderlik becerilerimi 
                  bir üst seviyeye taşıdı. Şirket performansımız %35 arttı."
                </blockquote>
                <div className="testimonial-exec-author">
                  <div className="author-exec-info">
                    <span className="author-name">Mehmet Yılmaz</span>
                    <span className="author-title">CEO, Tech Innovations</span>
                    <span className="author-company">Fortune 500</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-exec-card">
              <div className="testimonial-exec-content">
                <div className="testimonial-exec-rating">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Takım dinamiklerini tamamen değiştiren bir danışmanlık deneyimi. 
                  Çalışan memnuniyeti rekor seviyeye ulaştı."
                </blockquote>
                <div className="testimonial-exec-author">
                  <div className="author-exec-info">
                    <span className="author-name">Ayşe Demir</span>
                    <span className="author-title">HR Director</span>
                    <span className="author-company">Global Finance</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-exec-card">
              <div className="testimonial-exec-content">
                <div className="testimonial-exec-rating">⭐⭐⭐⭐⭐</div>
                <blockquote>
                  "Stres yönetimi ve karar alma süreçlerinde aldığım destek 
                  kariyerimin dönüm noktası oldu."
                </blockquote>
                <div className="testimonial-exec-author">
                  <div className="author-exec-info">
                    <span className="author-name">Can Özkan</span>
                    <span className="author-title">CTO</span>
                    <span className="author-company">Industry Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive CTA */}
      <section className="executive-cta">
        <div className="container">
          <div className="cta-exec-wrapper">
            <div className="cta-exec-main">
              <div className="cta-exec-badge">PREMIUM DANIŞMANLIK</div>
              <h2>Liderlik Potansiyelinizi Ortaya Çıkarın</h2>
              <p>
                Fortune 500 şirketleri için geliştirilen premium coaching programları 
                ile rakiplerinizin önünde olun. İlk danışmanlık seansınız ücretsiz.
              </p>
              
              <div className="cta-exec-features">
                <div className="cta-exec-feature">
                  <span className="feature-exec-icon">🏆</span>
                  <span>Executive düzey uzmanlık</span>
                </div>
                <div className="cta-exec-feature">
                  <span className="feature-exec-icon">📊</span>
                  <span>Ölçülebilir sonuçlar</span>
                </div>
                <div className="cta-exec-feature">
                  <span className="feature-exec-icon">🤝</span>
                  <span>Gizlilik garantisi</span>
                </div>
                <div className="cta-exec-feature">
                  <span className="feature-exec-icon">⚡</span>
                  <span>Hızlı etki</span>
                </div>
              </div>
              
              <div className="cta-exec-actions">
                <Link to="/randevu" className="btn-executive primary large">
                  ÜCRETSİZ DANIŞMA RANDEVUSU
                </Link>
                <div className="cta-exec-contact">
                  <span>Acil durum için:</span>
                  <a href="tel:+905551234567" className="exec-phone">
                    +90 555 123 45 67
                  </a>
                </div>
              </div>
            </div>
            
            <div className="cta-exec-visual">
              <div className="exec-achievements">
                <div className="achievement">
                  <div className="achievement-icon">🏅</div>
                  <div className="achievement-text">
                    <span>ISO 27001</span>
                    <span>Sertifikalı</span>
                  </div>
                </div>
                <div className="achievement">
                  <div className="achievement-icon">🎖️</div>
                  <div className="achievement-text">
                    <span>Excellence</span>
                    <span>Award 2023</span>
                  </div>
                </div>
                <div className="achievement">
                  <div className="achievement-icon">⭐</div>
                  <div className="achievement-text">
                    <span>Top 1%</span>
                    <span>Executive Coach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign9;