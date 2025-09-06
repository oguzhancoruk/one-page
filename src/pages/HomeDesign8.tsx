import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign8.css';

const HomeDesign8: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portfolioItems = [
    {
      category: 'Başarı Hikayeleri',
      title: 'Anksiyete Yolculuğu',
      description: 'Mehmet\'in 6 aylık iyileşme sürecini keşfedin',
      image: '🌱',
      color: '#9333ea'
    },
    {
      category: 'Terapi Teknikleri',
      title: 'EMDR Süreci',
      description: 'Travma tedavisinde çığır açan yöntem',
      image: '🧠',
      color: '#7c3aed'
    },
    {
      category: 'İlişki Rehberi',
      title: 'Çift Harmonyası',
      description: 'Sağlıklı ilişkilerin 7 sırrı',
      image: '💕',
      color: '#a855f7'
    },
    {
      category: 'Kişisel Gelişim',
      title: 'İç Güç Keşfi',
      description: 'Potansiyelinizi ortaya çıkarın',
      image: '✨',
      color: '#c084fc'
    }
  ];

  return (
    <div className="home-design8">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      ></div>

      {/* Hero Portfolio */}
      <section className="hero-portfolio">
        <div className="container">
          <div className="portfolio-intro">
            <div className="intro-badge">
              <span className="badge-dot"></span>
              <span>Psikoloji & Yaşam Koçluğu</span>
            </div>
            
            <div className="hero-portfolio-content">
              <h1 className="portfolio-title">
                <span className="title-small">Merhaba, ben</span>
                <span className="title-main">Dr. Aleyna Didem</span>
                <span className="title-accent">Aydın</span>
                <span className="title-description">
                  Hayatınıza değer katacak profesyonel rehberlik
                </span>
              </h1>
            </div>
            
            <div className="hero-stats-portfolio">
              <div className="stat-portfolio" data-number="500+">
                <span className="stat-number-animated">500+</span>
                <span className="stat-label">Değiştirilen Hayat</span>
              </div>
              <div className="stat-portfolio" data-number="10+">
                <span className="stat-number-animated">10+</span>
                <span className="stat-label">Yıl Tecrübe</span>
              </div>
              <div className="stat-portfolio" data-number="98%">
                <span className="stat-number-animated">98%</span>
                <span className="stat-label">Memnuniyet</span>
              </div>
            </div>
            
            <div className="hero-portfolio-actions">
              <Link 
                to="/randevu" 
                className="btn-portfolio primary"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span>Hayatımı Değiştir</span>
                <div className="btn-ripple"></div>
              </Link>
              <Link 
                to="/hakkimda" 
                className="btn-portfolio secondary"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span>Hikayemi Dinle</span>
              </Link>
            </div>
          </div>
          
          <div className="portfolio-visual">
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="card-icon">💭</div>
                  <span>Düşünce Analizi</span>
                </div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="card-icon">❤️</div>
                  <span>Duygu Dengesi</span>
                </div>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="card-icon">🎯</div>
                  <span>Hedef Odaklı</span>
                </div>
              </div>
              
              <div className="main-visual">
                <div className="visual-circle"></div>
                <div className="visual-content">
                  <div className="visual-text">Uzman</div>
                  <div className="visual-subtext">Klinik Psikolog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Portfolio Grid */}
      <section className="portfolio-showcase">
        <div className="container">
          <div className="showcase-header">
            <h2 className="showcase-title">Yaratıcı Yaklaşımlarım</h2>
            <p className="showcase-subtitle">Her birey için özel tasarlanmış iyileşme deneyimleri</p>
          </div>
          
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="portfolio-item"
                style={{'--item-color': item.color} as React.CSSProperties}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="item-background">
                  <div className="item-gradient"></div>
                  <div className="item-pattern"></div>
                </div>
                
                <div className="item-content">
                  <div className="item-category">{item.category}</div>
                  <div className="item-image">{item.image}</div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                  
                  <div className="item-action">
                    <span className="action-text">Keşfet</span>
                    <div className="action-arrow">→</div>
                  </div>
                </div>
                
                <div className="item-overlay">
                  <div className="overlay-content">
                    <h4>Detaylı İnceleme</h4>
                    <p>Bu konuda daha derinlemesine bilgi ve örnekler için tıklayın.</p>
                    <Link to="/blog" className="overlay-link">Devamını Oku</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services */}
      <section className="services-creative">
        <div className="container">
          <div className="services-creative-layout">
            <div className="services-content">
              <div className="content-badge">🎨 Yaratıcı Terapi</div>
              <h2>Benzersiz Yaklaşımlarım</h2>
              <p>
                Geleneksel terapi yöntemlerini modern tekniklerle birleştirerek, 
                size özel iyileşme deneyimleri yaratıyorum. Her seans bir sanat 
                eseri gibi özenle tasarlanır.
              </p>
              
              <div className="approach-cards">
                <div className="approach-card">
                  <div className="approach-icon">🌊</div>
                  <div className="approach-info">
                    <h4>Flow Terapisi</h4>
                    <p>Zihin-beden bütünlüğü ile derin iyileşme</p>
                  </div>
                </div>
                
                <div className="approach-card">
                  <div className="approach-icon">🎭</div>
                  <div className="approach-info">
                    <h4>Drama Terapisi</h4>
                    <p>Yaratıcı ifade yoluyla kendini keşfet</p>
                  </div>
                </div>
                
                <div className="approach-card">
                  <div className="approach-icon">🎼</div>
                  <div className="approach-info">
                    <h4>Müzik Terapisi</h4>
                    <p>Ses ve ritimle duygusal dengelenme</p>
                  </div>
                </div>
              </div>
              
              <Link to="/hizmetler" className="btn-portfolio outline">
                Tüm Yöntemleri Keşfet
              </Link>
            </div>
            
            <div className="services-visual">
              <div className="visual-art">
                <div className="art-circle circle-1"></div>
                <div className="art-circle circle-2"></div>
                <div className="art-circle circle-3"></div>
                <div className="art-spiral"></div>
                <div className="art-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="testimonial-creative">
        <div className="container">
          <div className="testimonial-creative-wrapper">
            <div className="testimonial-art">
              <div className="art-shape shape-1"></div>
              <div className="art-shape shape-2"></div>
              <div className="art-shape shape-3"></div>
            </div>
            
            <div className="testimonial-content-creative">
              <div className="testimonial-badge">💝 Değerli Yorumlar</div>
              <h2>Danışanlarımın Sesi</h2>
              
              <div className="testimonial-card-creative">
                <div className="testimonial-quote">"</div>
                <blockquote>
                  Dr. Aydın'ın yaratıcı yaklaşımı sayesinde kendimle barışmayı öğrendim. 
                  Terapi seansları sanki bir sanat atölyesindeymiş gibi hissettirdi. 
                  Hayatımda hiç bu kadar huzurlu olmamıştım.
                </blockquote>
                
                <div className="testimonial-author-creative">
                  <div className="author-art">
                    <div className="author-circle">E</div>
                    <div className="author-glow"></div>
                  </div>
                  <div className="author-info-creative">
                    <span className="author-name">Elif M.</span>
                    <span className="author-detail">Yaratıcı Terapi • 8 Ay</span>
                    <div className="author-rating">
                      <span className="stars-creative">★★★★★</span>
                      <span className="rating-score">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-navigation">
                <button className="nav-dot active"></button>
                <button className="nav-dot"></button>
                <button className="nav-dot"></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative CTA */}
      <section className="cta-creative">
        <div className="container">
          <div className="cta-creative-card">
            <div className="cta-art-bg">
              <div className="bg-gradient"></div>
              <div className="bg-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>
            
            <div className="cta-creative-content">
              <div className="cta-badge-creative">🚀 Dönüşüm Zamanı</div>
              <h2>Hayalinizdeki Yaşamı Yaratın</h2>
              <p>
                Size özel tasarlanacak iyileşme yolculuğunuzda ilk adımı atmaya hazır mısınız? 
                Beraber yaratacağımız değişim sizi şaşırtacak.
              </p>
              
              <div className="cta-features-creative">
                <div className="cta-feature-creative">
                  <span className="feature-emoji">🎨</span>
                  <span>Yaratıcı Yaklaşım</span>
                </div>
                <div className="cta-feature-creative">
                  <span className="feature-emoji">⚡</span>
                  <span>Hızlı Sonuçlar</span>
                </div>
                <div className="cta-feature-creative">
                  <span className="feature-emoji">💫</span>
                  <span>Kalıcı Değişim</span>
                </div>
              </div>
              
              <div className="cta-actions-creative">
                <Link 
                  to="/randevu" 
                  className="btn-portfolio primary large"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span>Dönüşümümü Başlat</span>
                  <div className="btn-magic">✨</div>
                </Link>
                
                <div className="cta-contact-creative">
                  <span>Acele mi? Hemen ara:</span>
                  <a href="tel:+905551234567" className="phone-creative">
                    +90 555 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign8;