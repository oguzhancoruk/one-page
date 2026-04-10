import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign7.css';

const HomeDesign7: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [liveStats, setLiveStats] = useState({
    onlineUsers: 127,
    todayAppointments: 8,
    thisWeekSessions: 23,
    availableSlots: 12
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        onlineUsers: Math.floor(Math.random() * 50) + 100,
        availableSlots: Math.floor(Math.random() * 8) + 8
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const therapyMethods = [
    {
      name: 'Bilişsel Davranışçı Terapi',
      effectiveness: 95,
      duration: '12-16 hafta',
      sessions: 342,
      color: '#9333ea'
    },
    {
      name: 'EMDR Travma Terapisi',
      effectiveness: 92,
      duration: '8-12 hafta',
      sessions: 156,
      color: '#7c3aed'
    },
    {
      name: 'Çift Danışmanlığı',
      effectiveness: 88,
      duration: '16-24 hafta',
      sessions: 89,
      color: '#a855f7'
    }
  ];

  return (
    <div className="home-design7">
      {/* Showcase Header */}
      <section className="showcase-header">
        <div className="container">
          <div className="header-showcase">
            <div className="doctor-showcase-info">
              <div className="doctor-status">
                <div className="status-indicator online"></div>
                <span>Şu an aktif</span>
              </div>
              <h1>Dr. Aleyna Didem Aydın</h1>
              <div className="doctor-credentials-dash">
                <span className="credential">Uzman Klinik Psikolog</span>
                <span className="separator">•</span>
                <span className="credential">TPD Üyesi</span>
                <span className="separator">•</span>
                <span className="credential">EMDR Sertifikalı</span>
              </div>
            </div>
            
            <div className="showcase-actions">
              <Link to="/randevu" className="btn-showcase primary pulse">
                <span className="btn-icon">📅</span>
                <span>Acil Randevu</span>
                <div className="btn-badge">Bugün müsait</div>
              </Link>
              <Link to="/iletisim" className="btn-showcase secondary">
                <span className="btn-icon">💬</span>
                <span>Hızlı Mesaj</span>
              </Link>
            </div>
          </div>
          
          <div className="live-overview">
            <div className="overview-card live-stats">
              <div className="card-header">
                <h3>📊 Canlı İstatistikler</h3>
                <div className="live-indicator"></div>
              </div>
              <div className="stats-overview-grid">
                <div className="stat-overview">
                  <div className="stat-value">{liveStats.onlineUsers}</div>
                  <div className="stat-label">Online Ziyaretçi</div>
                </div>
                <div className="stat-overview">
                  <div className="stat-value">{liveStats.todayAppointments}</div>
                  <div className="stat-label">Bugünkü Randevular</div>
                </div>
                <div className="stat-overview">
                  <div className="stat-value">{liveStats.thisWeekSessions}</div>
                  <div className="stat-label">Bu Hafta Seanslar</div>
                </div>
                <div className="stat-overview highlight">
                  <div className="stat-value">{liveStats.availableSlots}</div>
                  <div className="stat-label">Müsait Slot</div>
                </div>
              </div>
            </div>
            
            <div className="overview-card quick-access">
              <h3>⚡ Hızlı Erişim</h3>
              <div className="quick-buttons">
                <button className="quick-btn">
                  <div className="quick-icon">🎯</div>
                  <span>Anksiyete Testi</span>
                </button>
                <button className="quick-btn">
                  <div className="quick-icon">❤️</div>
                  <span>İlişki Değerlendirmesi</span>
                </button>
                <button className="quick-btn">
                  <div className="quick-icon">🧠</div>
                  <span>Ruh Hali Takibi</span>
                </button>
                <button className="quick-btn">
                  <div className="quick-icon">📚</div>
                  <span>Self-Help Rehberi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services */}
      <section className="interactive-services">
        <div className="container">
          <div className="services-showcase-header">
            <h2>🔬 Tedavi Yöntemleri & Başarı Oranları</h2>
            <p>Kanıta dayalı terapi yaklaşımlarımın detaylı analizi</p>
          </div>
          
          <div className="methods-overview">
            {therapyMethods.map((method, index) => (
              <div key={index} className="method-card" style={{'--accent-color': method.color} as React.CSSProperties}>
                <div className="method-header">
                  <h3>{method.name}</h3>
                  <div className="effectiveness-score">{method.effectiveness}%</div>
                </div>
                
                <div className="progress-container">
                  <div className="progress-label">Başarı Oranı</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${method.effectiveness}%`, backgroundColor: method.color}}
                    ></div>
                  </div>
                </div>
                
                <div className="method-details">
                  <div className="detail-item">
                    <span className="detail-label">Ortalama Süre:</span>
                    <span className="detail-value">{method.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Toplam Seans:</span>
                    <span className="detail-value">{method.sessions}</span>
                  </div>
                </div>
                
                <Link to="/hizmetler" className="method-link">
                  Detaylı Bilgi →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="tabbed-content">
        <div className="container">
          <div className="content-tabs-shell">
            <div className="tab-navigation">
              {['Başarı Hikayeleri', 'Tedavi Süreçleri', 'SSS', 'Blog Yazıları'].map((tab, index) => (
                <button
                  key={index}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="tab-content">
              {activeTab === 0 && (
                <div className="success-stories-tab">
                  <div className="stories-showcase-grid">
                    <div className="story-showcase featured">
                      <div className="story-rating">⭐ 5.0</div>
                      <h4>"Hayatım Tamamen Değişti"</h4>
                      <p>6 aylık CBT seansları sonunda panik atak problemim tamamen çözüldü. Dr. Aydın'ın profesyonel yaklaşımı sayesinde kendimi çok güçlü hissediyorum.</p>
                      <div className="story-meta">
                        <span>Mehmet K. - Anksiyete Tedavisi</span>
                        <span>6 ay önce</span>
                      </div>
                    </div>
                    
                    <div className="story-showcase">
                      <div className="story-rating">⭐ 5.0</div>
                      <h4>Evliliğimizi Kurtardı</h4>
                      <p>Çift terapisi seansları ilişkimizi güçlendirdi.</p>
                      <div className="story-meta">
                        <span>Ayşe & Can D.</span>
                        <span>3 ay önce</span>
                      </div>
                    </div>
                    
                    <div className="story-showcase">
                      <div className="story-rating">⭐ 5.0</div>
                      <h4>EMDR Mucizesi</h4>
                      <p>Travmatik anılarım artık beni etkilemiyor.</p>
                      <div className="story-meta">
                        <span>Selin M.</span>
                        <span>2 ay önce</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="treatment-process-tab">
                  <div className="process-timeline">
                    <div className="timeline-item">
                      <div className="timeline-number">1</div>
                      <div className="timeline-content">
                        <h4>İlk Değerlendirme</h4>
                        <p>Ücretsiz 30 dakikalık ön görüşme ile durumunuzu değerlendiriyoruz.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-number">2</div>
                      <div className="timeline-content">
                        <h4>Tedavi Planı</h4>
                        <p>Size özel terapi yaklaşımı ve tedavi planını birlikte oluşturuyoruz.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-number">3</div>
                      <div className="timeline-content">
                        <h4>Terapi Seansları</h4>
                        <p>Düzenli seanslarla iyileşme sürecinizi takip ediyoruz.</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-number">4</div>
                      <div className="timeline-content">
                        <h4>İyileşme & Takip</h4>
                        <p>Hedeflerinize ulaştıktan sonra düzenli kontroller yapıyoruz.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="faq-tab">
                  <div className="faq-showcase-grid">
                    <div className="faq-item">
                      <h4>❓ Terapi süreci nasıl işliyor?</h4>
                      <p>İlk görüşmede durumunuzu değerlendirip size özel tedavi planı oluşturuyoruz.</p>
                    </div>
                    <div className="faq-item">
                      <h4>❓ Seanslar ne kadar sürer?</h4>
                      <p>Bireysel terapi seansları 50 dakika, çift terapisi seansları 60 dakika sürmektedir.</p>
                    </div>
                    <div className="faq-item">
                      <h4>❓ Online terapi etkili mi?</h4>
                      <p>Evet, araştırmalar online terapinin yüz yüze terapi kadar etkili olduğunu gösteriyor.</p>
                    </div>
                    <div className="faq-item">
                      <h4>❓ Ne kadar sürede sonuç alırım?</h4>
                      <p>Çoğu danışan 4-6 hafta içinde olumlu değişiklikler yaşamaya başlar.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 3 && (
                <div className="blog-tab">
                  <div className="blog-showcase-grid">
                    <article className="blog-card-dash featured">
                      <div className="blog-category">PSİKOLOJİ</div>
                      <h4>Anksiyete ile Başa Çıkma Teknikleri</h4>
                      <p>Günlük yaşamda anksiyeteyi yönetmek için etkili stratejiler...</p>
                      <div className="blog-meta">
                        <span>5 dk okuma</span>
                        <span>2 gün önce</span>
                      </div>
                    </article>
                    
                    <article className="blog-card-dash">
                      <div className="blog-category">İLİŞKİLER</div>
                      <h4>Sağlıklı İletişim İpuçları</h4>
                      <p>Partnerinizle daha iyi iletişim kurmanın yolları...</p>
                    </article>
                    
                    <article className="blog-card-dash">
                      <div className="blog-category">TRAVMA</div>
                      <h4>EMDR Terapisi Nedir?</h4>
                      <p>Travma tedavisinde devrim yaratan bu yöntem...</p>
                    </article>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Action Showcase */}
      <section className="action-showcase">
        <div className="container">
          <div className="showcase-cta-card">
            <div className="cta-showcase-content">
              <div className="cta-badge">🚀 Hemen Başlayın</div>
              <h2>Daha İyi Bir Yaşam İçin İlk Adımı Atın</h2>
              <p>Profesyonel destek almak için geç kalmayın. Ücretsiz ön görüşme ile başlayalım.</p>
              
              <div className="cta-features-showcase">
                <div className="cta-feature">
                  <div className="feature-icon-dash">✅</div>
                  <span>Ücretsiz ilk görüşme</span>
                </div>
                <div className="cta-feature">
                  <div className="feature-icon-dash">⚡</div>
                  <span>24 saat içinde yanıt</span>
                </div>
                <div className="cta-feature">
                  <div className="feature-icon-dash">🔒</div>
                  <span>%100 gizlilik</span>
                </div>
              </div>
              
              <div className="cta-showcase-actions">
                <Link to="/randevu" className="btn-showcase primary large">
                  <span>Randevu Al</span>
                  <div className="btn-arrow">→</div>
                </Link>
                <a href="tel:+905551234567" className="btn-showcase secondary large">
                  <span>Hemen Ara</span>
                  <div className="phone-icon">📞</div>
                </a>
              </div>
            </div>
            
            <div className="cta-showcase-visual">
              <div className="success-metrics">
                <div className="metric-item">
                  <div className="metric-number">500+</div>
                  <div className="metric-label">Başarılı Terapi</div>
                </div>
                <div className="metric-item">
                  <div className="metric-number">%98</div>
                  <div className="metric-label">Memnuniyet</div>
                </div>
                <div className="metric-item">
                  <div className="metric-number">10+</div>
                  <div className="metric-label">Yıl Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign7;
