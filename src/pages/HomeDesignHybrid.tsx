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
              <div className="luxury-intro">
                <div className="luxury-line"></div>
                <span className="luxury-label">Uzman Klinik Psikolog</span>
              </div>

              <h1 className="luxury-title-hybrid">
                Dr. Aleyna Didem
                <span className="title-script">Aydın</span>
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
                description: 'Anksiyete, depresyon, stres yönetimi ve kişisel gelişim alanlarında uzman desteği. Bilişsel Davranışçı Terapi (CBT) ve psikanalitik yaklaşımlarla bireysel ihtiyaçlarınıza özel terapi programları.',
                methods: ['CBT', 'Psikanalitik Terapi', 'Mindfulness'],
                duration: '50 dk seanslar',
                approach: 'Kişiye özel program',
                color: 'var(--primary-purple)'
              },
              {
                title: 'Çift Terapisi',
                description: 'İlişki sorunları, iletişim problemleri ve evlilik danışmanlığında profesyonel rehberlik. Gottman yöntemi ve Duygusal Odaklı Terapi (EFT) ile ilişki kalitesini artırma.',
                methods: ['Gottman Yöntemi', 'EFT', 'Sistemik Terapi'],
                duration: '75 dk seanslar',
                approach: 'Çift odaklı yaklaşım',
                color: 'var(--dark-purple)'
              },
              {
                title: 'Travma Tedavisi',
                description: 'PTSD, travmatik yaşantılar ve travma sonrası stres bozukluklarının tedavisinde EMDR ve Travma Odaklı CBT teknikleri ile kapsamlı iyileşme süreci.',
                methods: ['EMDR', 'Travma Odaklı CBT', 'Somatik Terapi'],
                duration: '60 dk seanslar',
                approach: 'Travma-informasyonlu',
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
              <div className="intro-icon">💫</div>
              <p className="philosophy-description">
                Her danışanın eşsiz bir birey olduğuna inanıyor, bu nedenle
                tedavi sürecini tamamen kişiye özel olarak tasarlıyorum.
                Güvenli ve yargısız bir ortamda, kendi potansiyelinizi
                keşfetmenize destek oluyorum.
              </p>
            </div>

            <div className="philosophy-principles-grid">
              <div className="principle-card">
                <h4>Kanıta Dayalı Yöntemler</h4>
                <p>Bilimsel araştırmalarla desteklenen modern terapi teknikleri</p>
              </div>

              <div className="principle-card">
                <h4>Kişiye Özel Program</h4>
                <p>Her bireyin ihtiyaçlarına göre özelleştirilmiş tedavi planı</p>
              </div>

              <div className="principle-card">
                <h4>Holistic Yaklaşım</h4>
                <p>Zihin, beden ve ruh bütünlüğünü gözeten kapsamlı destek</p>
              </div>
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
            <p>İlk görüşme ücretsiz. Size en uygun terapi yaklaşımını birlikte belirleyelim.</p>

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