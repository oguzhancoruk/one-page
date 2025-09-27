import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Uzm.Kl.Psk.Aleyna Didem Aydın</h1>
              <p className="hero-description">
                Bireysel ve çift terapisi alanında 10+ yıl deneyim. 
                Size özel terapi yaklaşımları ile yaşam kalitenizi artırıyorum.
              </p>
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="number">500+</span>
                  <span className="label">Başarılı Terapi</span>
                </div>
                <div className="stat">
                  <span className="number">10+</span>
                  <span className="label">Yıl Deneyim</span>
                </div>
                <div className="stat">
                  <span className="number">%98</span>
                  <span className="label">Memnuniyet</span>
                </div>
              </div>

              <div className="hero-buttons">
                <Link to="/randevu" className="btn btn-primary">
                  Randevu Al
                </Link>
                <Link to="/iletisim" className="btn btn-outline">
                  İletişime Geç
                </Link>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="doctor-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Hizmetlerim</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Bireysel Terapi</h3>
              <p>Anksiyete, depresyon, stres ve kişisel gelişim</p>
              <Link to="/hizmetler">Detaylar</Link>
            </div>
            <div className="service-card">
              <h3>Çift Terapisi</h3>
              <p>İlişki sorunları ve evlilik danışmanlığı</p>
              <Link to="/hizmetler">Detaylar</Link>
            </div>
            <div className="service-card">
              <h3>Travma Tedavisi</h3>
              <p>EMDR ve CBT ile travma iyileştirme</p>
              <Link to="/hizmetler">Detaylar</Link>
            </div>
            <div className="service-card">
              <h3>Online Terapi</h3>
              <p>Güvenli uzaktan terapi hizmeti</p>
              <Link to="/hizmetler">Detaylar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Hakkımda</h2>
              <p>
                İstanbul Üniversitesi Psikoloji Doktorası mezunu. 
                Türk Psikologlar Derneği üyesi olarak etik standartlarda hizmet veriyorum.
              </p>
              <ul className="credentials">
                <li>EMDR Sertifikalı Terapist</li>
                <li>Bilişsel Davranışçı Terapi Uzmanı</li>
                <li>Aile ve Çift Danışmanı</li>
              </ul>
              <Link to="/hakkimda" className="btn btn-outline">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Randevu Almaya Hazır mısınız?</h2>
            <p>İlk görüşme ücretsiz. Size en uygun terapi yaklaşımını birlikte belirleyelim.</p>
            <div className="cta-buttons">
              <Link to="/randevu" className="btn btn-primary">
                Ücretsiz Görüşme
              </Link>
              <Link to="/iletisim" className="btn btn-outline">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;