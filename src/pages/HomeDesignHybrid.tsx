import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeDesignHybrid.css';

const HomeDesignHybrid: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div className="home-hybrid">
      {/* Floating Butterflies */}
      {/* <div className="butterflies-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <div key={num} className={`butterfly-svg butterfly-${num}`}>
            <svg width="60" height="60" viewBox="0 0 60 60" className="butterfly-icon">
              <defs>
                <linearGradient id={`grad${num}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.9"/>
                  <stop offset="25%" stopColor="#ff9a9e" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#fad0c4" stopOpacity="0.7"/>
                  <stop offset="75%" stopColor="#8b45ff" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9"/>
                </linearGradient>
                <filter id={`glow${num}`}>
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <ellipse cx="30" cy="30" rx="1.5" ry="12" fill="#2c1810"/>

              <line x1="28" y1="20" x2="26" y2="16" stroke="#2c1810" strokeWidth="0.8"/>
              <line x1="32" y1="20" x2="34" y2="16" stroke="#2c1810" strokeWidth="0.8"/>
              <circle cx="26" cy="16" r="1" fill="#2c1810"/>
              <circle cx="34" cy="16" r="1" fill="#2c1810"/>

              <g className="wings" filter={`url(#glow${num})`}>
                <ellipse cx="20" cy="26" rx="12" ry="8"
                         fill={`url(#grad${num})`}
                         className="wing wing-top-left"
                         transform="rotate(-20 20 26)"/>

                <ellipse cx="40" cy="26" rx="12" ry="8"
                         fill={`url(#grad${num})`}
                         className="wing wing-top-right"
                         transform="rotate(20 40 26)"/>

                <ellipse cx="22" cy="38" rx="8" ry="6"
                         fill={`url(#grad${num})`}
                         className="wing wing-bottom-left"
                         transform="rotate(-10 22 38)"/>

                <ellipse cx="38" cy="38" rx="8" ry="6"
                         fill={`url(#grad${num})`}
                         className="wing wing-bottom-right"
                         transform="rotate(10 38 38)"/>
              </g>

              <circle cx="20" cy="26" r="2" fill="rgba(0,0,0,0.3)"/>
              <circle cx="40" cy="26" r="2" fill="rgba(0,0,0,0.3)"/>
              <circle cx="22" cy="38" r="1.5" fill="rgba(0,0,0,0.3)"/>
              <circle cx="38" cy="38" r="1.5" fill="rgba(0,0,0,0.3)"/>
            </svg>
          </div>
        ))}
      </div> */}

      {/* Custom Cursor from Design 8 */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      ></div>

      {/* Hero Section - Combining Design 1 simplicity with Design 4 luxury fonts */}
      <section className="hero-hybrid">
        <div className="container">
          <div className="hero-content-hybrid">
            <div className="hero-text-hybrid">

              <h1 className="luxury-title-hybrid">
                <div className="title-line">Uzm. Kl. Psk. <span className="title-script">Aleyna Didem Aydın</span></div>

              </h1>

              <p className="luxury-quote-hybrid">
                "Her bireyin kendine özgü bir hikayesi vardır.
                Bu hikayenin en güzel halini birlikte keşfedelim."
              </p>


              <div className="hero-buttons-hybrid">
                <Link
                  to="/randevu"
                  className="btn-luxury primary"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Randevu Rezervasyonu
                </Link>
                <Link
                  to="/iletisim"
                  className="btn-luxury outline"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  İletişime Geç
                </Link>
              </div>
            </div>

            <div className="hero-visual-hybrid">
              <div className="doctor-image-luxury"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Animated cards with main colors */}
      <section className="services-hybrid">
        <div className="container">
          <div className="services-header-hybrid">
            <h2>Hizmetlerim</h2>
            <p>Profesyonel terapi hizmetlerim</p>
          </div>

          <div className="services-grid-hybrid">
            {[
              {
                title: 'Bireysel Terapi',
                description: 'Anksiyete, depresyon, stres yönetimi ve kişisel gelişim alanlarında uzman desteği. Bilişsel Davranışçı Terapi ve psikodinamik yaklaşımlarla bireysel ihtiyaçlarınıza özel terapi programları.',
                methods: ['CBT', 'Psikanalitik Terapi', 'Mindfulness'],
                duration: '50 dk seanslar',
                approach: 'Kişiye özel program',
                color: 'var(--primary-purple)'
              },
              {
                title: 'Çift Terapisi',
                description: 'İlişki sorunları, iletişim problemleri ve evlilik danışmanlığında profesyonel rehberlik. Gottman Yöntemi ve Bilişsel Davranışçı Terapi ile ilişki kalitesini artırma.',
                methods: ['Gottman Yöntemi', 'CBT', 'Sistemik Terapi'],
                duration: '75 dk seanslar',
                approach: 'Çift odaklı yaklaşım',
                color: 'var(--dark-purple)'
              },
              {
                title: 'Ergen Terapisi',
                description: 'Ergenlik dönemi zorluklarında özelleşmiş destek. Kimlik gelişimi, okul sorunları, arkadaş ilişkileri ve duygusal düzenleme konularında gençlere yönelik modern terapi yaklaşımları.',
                methods: ['Ergen Odaklı CBT', 'Aile Terapisi', 'DBT Becerileri'],
                duration: '50 dk seanslar',
                approach: 'Gelişimsel yaklaşım',
                color: 'var(--accent-purple)'
              },
              {
                title: 'Online Terapi',
                description: 'Güvenli video görüşme platformları ile uzaktan terapi hizmeti. Coğrafi kısıtlamalar olmadan profesyonel psikolojik destek alma imkanı. Esnek randevu saatleri.',
                methods: ['Video Terapi', 'Chat Desteği', 'Hibrit Model'],
                duration: '45-50 dk seanslar',
                approach: 'Teknoloji destekli',
                color: 'var(--primary-purple)'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card-animated"
                style={{'--item-color': service.color} as React.CSSProperties}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="card-background-animated">
                  <div className="card-gradient-animated"></div>
                  <div className="card-pattern-animated"></div>
                </div>

                <div className="card-content-animated">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="card-action-animated">
                    <span className="action-text">Detaylar</span>
                    <div className="action-arrow">→</div>
                  </div>
                </div>

                <div className="card-overlay-animated">
                  <div className="overlay-content-animated">
                    <h4>Detaylı Bilgi</h4>
                    <p>Bu hizmet hakkında daha fazla bilgi edinmek için tıklayın.</p>
                    <Link to="/hizmetler" className="overlay-link">Devamını Oku</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Design 4 luxury with minimal touches */}
      <section className="philosophy-hybrid">
        <div className="container">
          <div className="philosophy-header-hybrid">
            <h2>Terapi Süreci Hakkında</h2>
            <p>Modern ve kişiselleştirilmiş terapi süreci</p>
          </div>

          <div className="philosophy-content-hybrid">

            <div className="philosophy-intro-card">
              <p className="philosophy-description">
                Her danışanın eşsiz bir birey olduğuna inanıyor, bu nedenle
                tedavi sürecini tamamen kişiye özel olarak tasarlıyorum.
                Güvenli ve yargısız bir ortamda, kendi potansiyelinizi
                keşfetmenize destek oluyorum.
              </p>
            </div>


            <div className="philosophy-cta">
              <Link
                to="/hakkimda"
                className="btn-luxury outline"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Detaylı Bilgi
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* CTA Section - Design 1 simplicity with Design 8 creative touches */}
      <section className="cta-hybrid">
        <div className="container">
          <div className="cta-content-hybrid">
            <div className="cta-badge-hybrid">Dönüşüm Zamanı</div>
            <h2>Randevu Almaya Hazır mısınız?</h2>
            <p>Size en uygun terapi yaklaşımını birlikte belirleyelim.</p>

            <div className="cta-buttons-hybrid">
              <Link
                to="/iletisim"
                className="btn-luxury outline"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesignHybrid;