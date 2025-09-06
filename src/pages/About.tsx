import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="gradient-text">Dr. Aleyna Didem Aydın</h1>
              <p className="subtitle">Klinik Psikolog</p>
              <p className="intro-text">
                10 yılı aşkın deneyimim ile bireylerin ruh sağlığı yolculuğunda rehberlik ediyor, 
                herkesin potansiyelini keşfetmesine yardımcı oluyorum.
              </p>
            </div>
            <div className="about-hero-image">
              <div className="hero-image-placeholder">
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section section">
          <div className="story-content">
            <h2>Hikayem</h2>
            <div className="story-text">
              <p>
                Psikoloji alanındaki yolculuğum, insanların ruh hallerinin ve davranışlarının 
                ardındaki derinlikleri anlamaya duyduğum merakla başladı. İstanbul Üniversitesi 
                Psikoloji Bölümü'nden mezun olduktan sonra, klinik psikoloji alanında 
                uzmanlaşmak için yoğun bir eğitim sürecine girdim.
              </p>
              <p>
                Kariyerim boyunca farklı yaş gruplarından ve çeşitli sorunlarla mücadele eden 
                binlerce danışanla çalıştım. Bu deneyimler, her bireyin eşsiz olduğunu ve 
                kişiselleştirilmiş yaklaşımların önemini bana öğretti.
              </p>
              <p>
                Bugün, modern terapi tekniklerini geleneksel yaklaşımlarla harmanlayarak, 
                her danışanım için en etkili tedavi planını oluşturmaya odaklanıyorum.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="credentials section bg-light-purple">
          <h2 className="text-center">Eğitim ve Deneyim</h2>
          
          <div className="credentials-grid">
            <div className="credential-category">
              <h3>🎓 Eğitim</h3>
              <div className="credential-list">
                <div className="credential-item">
                  <h4>Doktora</h4>
                  <p>Klinik Psikoloji - İstanbul Üniversitesi (2018)</p>
                </div>
                <div className="credential-item">
                  <h4>Yüksek Lisans</h4>
                  <p>Klinik Psikoloji - Boğaziçi Üniversitesi (2015)</p>
                </div>
                <div className="credential-item">
                  <h4>Lisans</h4>
                  <p>Psikoloji - İstanbul Üniversitesi (2013)</p>
                </div>
              </div>
            </div>

            <div className="credential-category">
              <h3>💼 Mesleki Deneyim</h3>
              <div className="credential-list">
                <div className="credential-item">
                  <h4>Özel Pratikte</h4>
                  <p>Klinik Psikolog (2018 - Devam Ediyor)</p>
                </div>
                <div className="credential-item">
                  <h4>Acıbadem Hastanesi</h4>
                  <p>Klinik Psikolog (2016-2018)</p>
                </div>
                <div className="credential-item">
                  <h4>İstanbul Üniversitesi</h4>
                  <p>Araştırma Görevlisi (2013-2016)</p>
                </div>
              </div>
            </div>

            <div className="credential-category">
              <h3>📜 Sertifikalar</h3>
              <div className="credential-list">
                <div className="credential-item">
                  <h4>EMDR Terapisi</h4>
                  <p>Travma Tedavisi Uzmanı (2019)</p>
                </div>
                <div className="credential-item">
                  <h4>Bilişsel Davranışçı Terapi</h4>
                  <p>CBT Uzmanlık Sertifikası (2018)</p>
                </div>
                <div className="credential-item">
                  <h4>Çift ve Aile Terapisi</h4>
                  <p>Sistemik Terapi Sertifikası (2020)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="approach-section section">
          <h2 className="text-center">Tedavi Yaklaşımım</h2>
          <div className="approach-content">
            <div className="approach-text">
              <p>
                Terapötik yaklaşımımda, bilişsel davranışçı terapi, psikanalitik terapi ve 
                hümanistik yaklaşımları birleştirerek bütüncül bir model kullanıyorum.
              </p>
              <div className="approach-principles">
                <div className="principle">
                  <h4>🤝 İş Birliği</h4>
                  <p>Terapi sürecinde eşit ortaklar olarak çalışırız.</p>
                </div>
                <div className="principle">
                  <h4>🎯 Kişiselleştirme</h4>
                  <p>Her tedavi planı bireyin özel ihtiyaçlarına göre tasarlanır.</p>
                </div>
                <div className="principle">
                  <h4>🔒 Gizlilik</h4>
                  <p>Tam gizlilik ve güven ortamı sağlarım.</p>
                </div>
                <div className="principle">
                  <h4>🌱 Büyüme</h4>
                  <p>Kişisel gelişim ve potansiyel keşfine odaklanırım.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="specializations section bg-light-purple">
          <h2 className="text-center">Uzmanlık Alanlarım</h2>
          <div className="specializations-grid">
            <div className="specialization-card card">
              <div className="spec-icon">🧠</div>
              <h3>Anksiyete Bozuklukları</h3>
              <p>Panik atak, yaygın anksiyete, sosyal fobi ve fobiler</p>
            </div>
            <div className="specialization-card card">
              <div className="spec-icon">💙</div>
              <h3>Depresyon</h3>
              <p>Majör depresyon, distimik bozukluk ve mood bozuklukları</p>
            </div>
            <div className="specialization-card card">
              <div className="spec-icon">🌪️</div>
              <h3>Travma ve PTSD</h3>
              <p>Travma sonrası stres bozukluğu ve travmatik yaşantılar</p>
            </div>
            <div className="specialization-card card">
              <div className="spec-icon">💕</div>
              <h3>İlişki Sorunları</h3>
              <p>Çift terapisi, evlilik danışmanlığı ve iletişim problemleri</p>
            </div>
            <div className="specialization-card card">
              <div className="spec-icon">⚡</div>
              <h3>Stres Yönetimi</h3>
              <p>İş stresi, yaşam değişiklikleri ve uyum sorunları</p>
            </div>
            <div className="specialization-card card">
              <div className="spec-icon">🌟</div>
              <h3>Kişisel Gelişim</h3>
              <p>Öz güven, hedef belirleme ve yaşam koçluğu</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta section">
          <div className="cta-content text-center">
            <h2>Birlikte Çalışmaya Başlayalım</h2>
            <p>
              Ruh sağlığınız için ilk adımı atmaya hazır mısınız? 
              Benimle iletişime geçin ve sizin için en uygun tedavi planını oluşturalım.
            </p>
            <div className="cta-buttons">
              <Link to="/randevu" className="btn btn-primary btn-large">
                Randevu Al
              </Link>
              <Link to="/iletisim" className="btn btn-secondary btn-large">
                İletişime Geç
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;