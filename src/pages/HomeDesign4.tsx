import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign4.css';

const HomeDesign4: React.FC = () => {
  return (
    <div className="home-design4">
      {/* Luxury Hero */}
      <section className="hero-luxury">
        <div className="container">
          <div className="luxury-content">
            <div className="luxury-intro">
              <div className="luxury-line"></div>
              <span className="luxury-label">Psikoloji Uzmanı</span>
            </div>
            
            <h1 className="luxury-title">
              Aleyna Didem
              <span className="title-script">Aydın</span>
            </h1>
            
            <p className="luxury-quote">
              "Her bireyin kendine özgü bir hikayesi vardır. 
              Bu hikayenin en güzel halini birlikte keşfedelim."
            </p>
            
            <div className="luxury-credentials">
              <div className="cred-item">
                <span className="cred-number">10+</span>
                <span className="cred-text">Yıl Deneyim</span>
              </div>
              <div className="cred-divider"></div>
              <div className="cred-item">
                <span className="cred-number">500+</span>
                <span className="cred-text">Başarılı Terapi</span>
              </div>
              <div className="cred-divider"></div>
              <div className="cred-item">
                <span className="cred-number">%98</span>
                <span className="cred-text">Memnuniyet</span>
              </div>
            </div>
            
            <div className="luxury-cta">
              <Link to="/randevu" className="btn-luxury primary">
                Randevu Rezervasyonu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise-luxury">
        <div className="container">
          <div className="expertise-header">
            <div className="section-number">01</div>
            <div className="section-info">
              <h2>Uzmanlık Alanları</h2>
              <p>Kanıta dayalı modern terapi yaklaşımları</p>
            </div>
          </div>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="card-number">I</div>
              <h3>Bireysel Terapi</h3>
              <p>
                Anksiyete, depresyon ve kişisel gelişim süreçlerinde 
                CBT ve psikanalitik yaklaşımlarla destek.
              </p>
              <div className="card-methods">
                CBT • EMDR • Psikanaliz
              </div>
            </div>
            
            <div className="expertise-card featured">
              <div className="card-number">II</div>
              <h3>Çift Danışmanlığı</h3>
              <p>
                İlişki dinamikleri, iletişim sorunları ve evlilik 
                danışmanlığında Gottman yöntemi uygulaması.
              </p>
              <div className="card-methods">
                Gottman • Sistemik • EFT
              </div>
            </div>
            
            <div className="expertise-card">
              <div className="card-number">III</div>
              <h3>Travma Terapisi</h3>
              <p>
                PTSD ve travmatik yaşantıların iyileştirilmesinde 
                EMDR ve travma odaklı CBT teknikleri.
              </p>
              <div className="card-methods">
                EMDR • TF-CBT • Somatic
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-luxury">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <div className="section-number">02</div>
              <h2>Terapi Yaklaşımım</h2>
              <p className="philosophy-description">
                Her danışanın eşsiz bir birey olduğuna inanıyor, bu nedenle 
                tedavi sürecini tamamen kişiye özel olarak tasarlıyorum. 
                Güvenli ve yargısız bir ortamda, kendi potansiyelinizi 
                keşfetmenize destek oluyorum.
              </p>
              
              <div className="philosophy-principles">
                <div className="principle">
                  <div className="principle-icon">—</div>
                  <span>Kanıta dayalı yöntemler</span>
                </div>
                <div className="principle">
                  <div className="principle-icon">—</div>
                  <span>Kişiye özel tedavi planı</span>
                </div>
                <div className="principle">
                  <div className="principle-icon">—</div>
                  <span>Holistic yaklaşım</span>
                </div>
              </div>
              
              <Link to="/hakkimda" className="btn-luxury outline">
                Detaylı Bilgi
              </Link>
            </div>
            
            <div className="philosophy-visual">
              <div className="visual-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Luxury */}
      <section className="testimonial-luxury">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="section-number">03</div>
            <blockquote className="luxury-quote-large">
              "Dr. Aydın ile çalışmak hayat değiştirici bir deneyimdi. 
              Empatik yaklaşımı ve profesyonel bilgisi sayesinde kendimi 
              tanımaya ve güçlü yönlerimi keşfetmeye başladım."
            </blockquote>
            <div className="quote-author">
              <span className="author-name">— S.K.</span>
              <span className="author-detail">Bireysel Terapi Danışanı</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Luxury */}
      <section className="contact-luxury">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="section-number">04</div>
              <h2>İletişime Geçin</h2>
              <p>
                Size en uygun terapi yaklaşımını birlikte belirlemek için 
                ücretsiz ön görüşme talep edebilirsiniz.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Telefon</span>
                  <span className="contact-value">+90 555 123 45 67</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">E-posta</span>
                  <span className="contact-value">info@aleynaaydın.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Lokasyon</span>
                  <span className="contact-value">Nişantaşı, İstanbul</span>
                </div>
              </div>
            </div>
            
            <div className="contact-action">
              <div className="action-card">
                <h3>İlk Adım</h3>
                <p>Ücretsiz 15 dakikalık ön görüşme</p>
                <Link to="/randevu" className="btn-luxury primary full">
                  Rezervasyon Yap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign4;