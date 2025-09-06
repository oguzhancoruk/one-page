import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign5.css';

const HomeDesign5: React.FC = () => {
  return (
    <div className="home-design5">
      {/* Medical Hero */}
      <section className="hero-medical">
        <div className="container">
          <div className="medical-header">
            <div className="doctor-credentials">
              <div className="credential-badge">
                <span className="badge-title">Dr.</span>
                <span className="badge-name">Aleyna Didem Aydın</span>
              </div>
              <div className="medical-titles">
                <span>Uzman Klinik Psikolog</span>
                <span>•</span>
                <span>TPD Üyesi</span>
                <span>•</span>
                <span>EMDR Sertifikalı</span>
              </div>
            </div>
            
            <div className="appointment-quick">
              <Link to="/randevu" className="btn-medical primary">
                Randevu Al
              </Link>
              <Link to="/iletisim" className="btn-medical secondary">
                İletişim
              </Link>
            </div>
          </div>
          
          <div className="hero-medical-content">
            <div className="medical-info">
              <h1 className="medical-title">
                Profesyonel Ruh Sağlığı 
                <span className="title-highlight">Danışmanlığı</span>
              </h1>
              
              <p className="medical-description">
                10+ yıllık klinik deneyimim ile bireysel terapi, çift danışmanlığı 
                ve travma tedavisi alanlarında kanıta dayalı yaklaşımlar uyguluyorum. 
                Her danışanıma özel tedavi planları ile iyileşme sürecinde destek oluyorum.
              </p>
              
              <div className="medical-specialties">
                <h3>Uzmanlık Alanları:</h3>
                <ul>
                  <li>Anksiyete Bozuklukları</li>
                  <li>Depresyon Tedavisi</li>
                  <li>Travma ve PTSD</li>
                  <li>Çift ve Evlilik Danışmanlığı</li>
                  <li>Kişilik Bozuklukları</li>
                </ul>
              </div>
              
              <div className="medical-certifications">
                <div className="cert-item">
                  <div className="cert-icon">🎓</div>
                  <div className="cert-text">
                    <strong>İstanbul Üniversitesi</strong>
                    <span>Psikoloji Doktora</span>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">📜</div>
                  <div className="cert-text">
                    <strong>EMDR Sertifikası</strong>
                    <span>Travma Terapisi Uzmanı</span>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🏥</div>
                  <div className="cert-text">
                    <strong>CBT Sertifikası</strong>
                    <span>Bilişsel Davranışçı Terapi</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="medical-stats">
              <div className="stats-card">
                <h3>Klinik İstatistikler</h3>
                <div className="stats-grid">
                  <div className="stat-medical">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Tedavi Edilen Hasta</span>
                  </div>
                  <div className="stat-medical">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Yıl Klinik Deneyim</span>
                  </div>
                  <div className="stat-medical">
                    <span className="stat-number">%95</span>
                    <span className="stat-label">Tedavi Başarı Oranı</span>
                  </div>
                  <div className="stat-medical">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Acil Destek</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="treatment-approaches">
        <div className="container">
          <div className="section-medical-header">
            <h2>Tedavi Yaklaşımları</h2>
            <p>Kanıta dayalı modern psikoterapi yöntemleri</p>
          </div>
          
          <div className="treatments-grid">
            <div className="treatment-card">
              <div className="treatment-header">
                <div className="treatment-icon">🧠</div>
                <h3>Bilişsel Davranışçı Terapi (CBT)</h3>
              </div>
              <div className="treatment-content">
                <p>
                  Düşünce, duygu ve davranış arasındaki ilişkiyi anlamaya 
                  dayalı, kanıtlanmış etkili terapi yöntemi.
                </p>
                <div className="treatment-conditions">
                  <span>İdeal:</span> Anksiyete, Depresyon, OKB, Panik Bozukluk
                </div>
              </div>
            </div>

            <div className="treatment-card featured">
              <div className="treatment-header">
                <div className="treatment-icon">👁️</div>
                <h3>EMDR Travma Terapisi</h3>
              </div>
              <div className="treatment-content">
                <p>
                  Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme. 
                  Travmatik anıların işlenmesi için WHO onaylı yöntem.
                </p>
                <div className="treatment-conditions">
                  <span>İdeal:</span> PTSD, Travma, Fobiler, Kayıp
                </div>
              </div>
            </div>

            <div className="treatment-card">
              <div className="treatment-header">
                <div className="treatment-icon">💑</div>
                <h3>Gottman Çift Terapisi</h3>
              </div>
              <div className="treatment-content">
                <p>
                  40+ yıl araştırmaya dayalı, çiftlerin ilişki kalitesini 
                  artırmak için geliştirilmiş sistematik yaklaşım.
                </p>
                <div className="treatment-conditions">
                  <span>İdeal:</span> İletişim Sorunları, Çatışma, Evlilik
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Services */}
      <section className="clinical-services">
        <div className="container">
          <div className="services-medical-wrapper">
            <div className="services-info">
              <h2>Klinik Hizmetler</h2>
              <p>
                Hastalara özel tedavi planları ile kapsamlı ruh sağlığı 
                hizmetleri sunuyorum. Tüm seanslar güvenli ve konfora 
                ortamda gerçekleştirilir.
              </p>
              
              <div className="service-features">
                <div className="feature-medical">
                  <span className="feature-icon">✓</span>
                  <span>Kişiye özel tedavi planı</span>
                </div>
                <div className="feature-medical">
                  <span className="feature-icon">✓</span>
                  <span>Düzenli progress takibi</span>
                </div>
                <div className="feature-medical">
                  <span className="feature-icon">✓</span>
                  <span>24/7 acil durum desteği</span>
                </div>
                <div className="feature-medical">
                  <span className="feature-icon">✓</span>
                  <span>Tam gizlilik garantisi</span>
                </div>
              </div>
              
              <Link to="/hizmetler" className="btn-medical outline">
                Tüm Hizmetleri Görüntüle
              </Link>
            </div>
            
            <div className="services-types">
              <div className="service-type">
                <h4>Bireysel Terapi</h4>
                <div className="service-details">
                  <span>50 dakika/seans</span>
                  <span>•</span>
                  <span>Haftalık</span>
                  <span>•</span>
                  <span>₺800</span>
                </div>
              </div>
              
              <div className="service-type">
                <h4>Çift Terapisi</h4>
                <div className="service-details">
                  <span>60 dakika/seans</span>
                  <span>•</span>
                  <span>İki haftada bir</span>
                  <span>•</span>
                  <span>₺1200</span>
                </div>
              </div>
              
              <div className="service-type">
                <h4>Online Terapi</h4>
                <div className="service-details">
                  <span>50 dakika/seans</span>
                  <span>•</span>
                  <span>Esnek saatler</span>
                  <span>•</span>
                  <span>₺700</span>
                </div>
              </div>
              
              <div className="service-type">
                <h4>Acil Konsültasyon</h4>
                <div className="service-details">
                  <span>30 dakika</span>
                  <span>•</span>
                  <span>24 saat içinde</span>
                  <span>•</span>
                  <span>₺400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="patient-testimonial">
        <div className="container">
          <div className="testimonial-medical">
            <div className="testimonial-content">
              <h3>Hasta Yorumu</h3>
              <blockquote>
                "6 ay süren terapi sürecimde Dr. Aydın'ın profesyonel yaklaşımı 
                ve empatik desteği sayesinde panik atak problemimi tamamen çözdüm. 
                Artık günlük hayatımı çok daha kaliteli yaşıyorum."
              </blockquote>
              <div className="patient-info">
                <span className="patient-initials">M.K.</span>
                <div className="patient-details">
                  <span>35 yaş, Anksiyete Tedavisi</span>
                  <span>Tedavi süresi: 6 ay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="appointment-cta">
        <div className="container">
          <div className="cta-medical-wrapper">
            <div className="cta-medical-content">
              <h2>Randevu Talep Edin</h2>
              <p>
                İlk görüşme ücretsizdir. Size en uygun tedavi yaklaşımını 
                birlikte belirleyelim ve iyileşme sürecinize başlayalım.
              </p>
              
              <div className="appointment-info">
                <div className="info-medical">
                  <span className="info-label">Randevu Saatleri:</span>
                  <span>Pazartesi - Cuma: 09:00 - 17:00</span>
                </div>
                <div className="info-medical">
                  <span className="info-label">Acil Durumlar:</span>
                  <span>7/24 telefon desteği</span>
                </div>
              </div>
              
              <div className="cta-medical-buttons">
                <Link to="/randevu" className="btn-medical primary large">
                  Online Randevu Al
                </Link>
                <a href="tel:+905551234567" className="btn-medical secondary large">
                  Telefon: +90 555 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign5;