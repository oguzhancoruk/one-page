import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign6.css';

const HomeDesign6: React.FC = () => {
  return (
    <div className="home-design6">
      {/* Magazine Hero */}
      <section className="hero-magazine">
        <div className="container">
          <div className="magazine-layout">
            <div className="main-story">
              <div className="story-label">ÖZEL RÖPORTAJ</div>
              <h1 className="magazine-headline">
                "Ruh Sağlığı Herkesin
                <span className="highlight-text">Temel Hakkıdır"</span>
              </h1>
              <div className="story-meta">
                <div className="author-info">
                  <div className="author-photo"></div>
                  <div className="author-details">
                    <span className="author-name">Dr. Aleyna Didem Aydın</span>
                    <span className="author-title">Uzman Klinik Psikolog</span>
                    <div className="story-stats">
                      <span>📚 500+ Başarılı Terapi</span>
                      <span>⭐ 10 Yıl Deneyim</span>
                      <span>🎯 %98 Memnuniyet</span>
                    </div>
                  </div>
                </div>
                <div className="read-time">5 dk okuma</div>
              </div>
            </div>
            
            <div className="sidebar-stories">
              <div className="side-story featured">
                <div className="story-number">01</div>
                <h3>Anksiyete ile Başa Çıkma</h3>
                <p>Modern yaşamın stresine karşı etkili stratejiler</p>
                <Link to="/blog">Devamını Oku →</Link>
              </div>
              
              <div className="side-story">
                <div className="story-number">02</div>
                <h3>Çift Terapisi Rehberi</h3>
                <p>İlişkilerde iletişimi güçlendirme yolları</p>
                <Link to="/blog">Devamını Oku →</Link>
              </div>
              
              <div className="side-story">
                <div className="story-number">03</div>
                <h3>EMDR Nedir?</h3>
                <p>Travma tedavisinde çığır açan yöntem</p>
                <Link to="/blog">Devamını Oku →</Link>
              </div>
            </div>
          </div>
          
          <div className="magazine-cta">
            <div className="cta-magazine-content">
              <h2>Ücretsiz İlk Konsültasyon</h2>
              <p>Profesyonel destek almaya bugün başlayın</p>
              <Link to="/randevu" className="btn-magazine primary">
                Hemen Başla
              </Link>
            </div>
            <div className="magazine-visual">
              <div className="visual-grid">
                <div className="visual-item">📞</div>
                <div className="visual-item">💬</div>
                <div className="visual-item">🎯</div>
                <div className="visual-item">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Magazine */}
      <section className="services-magazine">
        <div className="container">
          <div className="section-magazine-header">
            <div className="section-tag">HİZMETLER</div>
            <h2>Uzman Terapi Hizmetlerim</h2>
          </div>
          
          <div className="services-magazine-grid">
            <div className="service-magazine large">
              <div className="service-image-placeholder"></div>
              <div className="service-content">
                <div className="service-category">BİREYSEL</div>
                <h3>Kişisel Gelişim & Terapi</h3>
                <p>Anksiyete, depresyon ve yaşam kalitesi sorunlarında profesyonel destek. CBT ve EMDR yöntemleriyle etkili tedavi.</p>
                <div className="service-features-mag">
                  <span>✓ 50 dk seans</span>
                  <span>✓ CBT & EMDR</span>
                  <span>✓ Kişiye özel plan</span>
                </div>
                <Link to="/hizmetler" className="service-link-mag">Detaylar</Link>
              </div>
            </div>
            
            <div className="service-magazine">
              <div className="service-content">
                <div className="service-category">ÇİFT</div>
                <h3>İlişki Danışmanlığı</h3>
                <p>Gottman yöntemi ile çift terapisi</p>
                <Link to="/hizmetler" className="service-link-mag">Detaylar</Link>
              </div>
            </div>
            
            <div className="service-magazine">
              <div className="service-content">
                <div className="service-category">TRAVMA</div>
                <h3>EMDR Terapisi</h3>
                <p>Travmatik yaşantıların iyileştirilmesi</p>
                <Link to="/hizmetler" className="service-link-mag">Detaylar</Link>
              </div>
            </div>
            
            <div className="service-magazine">
              <div className="service-content">
                <div className="service-category">ONLİNE</div>
                <h3>Uzaktan Terapi</h3>
                <p>Güvenli video konferans ile</p>
                <Link to="/hizmetler" className="service-link-mag">Detaylar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <div className="stories-header">
            <div className="section-tag">BAŞARI HİKAYELERI</div>
            <h2>Danışanlarımızın Deneyimleri</h2>
          </div>
          
          <div className="stories-grid">
            <div className="story-card featured-story">
              <div className="story-quote">"</div>
              <h3>Hayatımı Değiştiren 6 Ay</h3>
              <p>Dr. Aydın ile geçirdiğim terapi sürecinde kendimi tanımayı öğrendim. Panik atak sorunu tamamen çözüldü ve artık çok daha mutluyum.</p>
              <div className="story-author">
                <div className="author-avatar">M</div>
                <div className="author-info-story">
                  <span>Mehmet K.</span>
                  <span>Anksiyete Tedavisi - 6 ay</span>
                </div>
              </div>
              <div className="story-rating">
                <span className="stars">★★★★★</span>
                <span>5.0</span>
              </div>
            </div>
            
            <div className="story-card">
              <div className="story-quote">"</div>
              <p>Evliliğimizi kurtaran profesyonel yaklaşım. İletişimimiz çok daha güçlendi.</p>
              <div className="story-author">
                <div className="author-avatar">A</div>
                <div className="author-info-story">
                  <span>Ayşe & Can D.</span>
                  <span>Çift Terapisi - 4 ay</span>
                </div>
              </div>
            </div>
            
            <div className="story-card">
              <div className="story-quote">"</div>
              <p>EMDR seansları travmatik anılarımı iyileştirdi. Kendimi güçlü hissediyorum.</p>
              <div className="story-author">
                <div className="author-avatar">S</div>
                <div className="author-info-story">
                  <span>Selin M.</span>
                  <span>Travma Terapisi - 8 ay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <section className="newsletter-contact">
        <div className="container">
          <div className="newsletter-layout">
            <div className="newsletter-content">
              <div className="section-tag">HAFTALIK BÜLTEN</div>
              <h2>Ruh Sağlığı İpuçları</h2>
              <p>Her hafta size özel ruh sağlığı tavsiyeleri, egzersizler ve bilgiler göndereceğim.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="E-posta adresiniz" />
                <button className="btn-magazine primary">Abone Ol</button>
              </div>
              <div className="newsletter-stats">
                <span>📧 2500+ Abone</span>
                <span>⭐ 4.9/5 Puan</span>
                <span>🔒 Spam Yok</span>
              </div>
            </div>
            
            <div className="quick-contact">
              <h3>Hızlı İletişim</h3>
              <div className="contact-options-mag">
                <a href="tel:+905551234567" className="contact-option">
                  <div className="contact-icon">📞</div>
                  <div>
                    <span>Telefon</span>
                    <span>+90 555 123 45 67</span>
                  </div>
                </a>
                
                <a href="https://wa.me/905551234567" className="contact-option">
                  <div className="contact-icon">💬</div>
                  <div>
                    <span>WhatsApp</span>
                    <span>Anında yanıt</span>
                  </div>
                </a>
                
                <Link to="/randevu" className="contact-option">
                  <div className="contact-icon">📅</div>
                  <div>
                    <span>Online Randevu</span>
                    <span>7/24 rezervasyon</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign6;