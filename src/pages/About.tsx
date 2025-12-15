import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <Helmet>
        <title>Hakkımda — Uzman Klinik Psikolog Aleyna Didem Aydın</title>
        <meta name="description" content="Klinik psikolog Aleyna Didem Aydın'ın eğitimleri ve uzmanlık alanları: ergen terapisi, yetişkin terapisi, bağlanma problemleri, öfke, yas, yeme ve uyku bozuklukları. Bahçeşehir, Esenyurt, Esenkent bölgesinde hizmet." />
        <meta name="keywords" content="Bahçeşehir, Esenkent, Esenyurt, klinik psikolog, psikolog, terapi, terapist, danışan, psikoloji, BDT, ergen terapisi, yetişkin terapisi, bağlanma problemleri, öfke, ayrılık, yas, yeme bozuklukları, uyku bozuklukları, depresyon, anksiyete, Aleyna Didem Aydın" />
      </Helmet>
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="gradient-text">Uzm. Kl. Psk. Aleyna Didem Aydın</h1>
              <p className="intro-text">
                Bireylerin ruh sağlığı yolculuğunda rehberlik ediyor,
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
                altındaki derinlikleri anlamaya duyduğum merakla başladı. İstanbul Kültür Üniversitesi
                Psikoloji Bölümü'nden başarıyla mezun olduktan sonra, Üsküdar Üniversitesi'nde
                Klinik Psikoloji yüksek lisansımı başarıyla tamamlamış bulunmaktayım.
              </p>
              <p>
                Stajlarımı İstanbul Adalet Sarayı'nda adli psikolog stajyeri ve Dr. Yalçın Güzelhan
                Kliniği'nde stajyer psikolog olarak yapmış bulunmaktayım. Psikoterapi alanında
                ilerleyebilmek adına Hakan Türkçapar'ın eğitmenliğinde BDT eğitimini aldım ve bu
                bağlamda bireysel terapi sürecinde aktif danışanlar görmekteyim.
              </p>
              <p>
                Kişisel gelişim uzmanlığı çatısı altında yaşam koçluğu, NLP ve kuantum eğitimlerini
                Eğitimci-Sosyolog Neslihan Kuruoğlu'ndan aldım. Ayrıca Biorezonans Sağlık Hizmetlerinden
                Psiko kinezyoloji ve Matrix inform eğitimlerini Ramazan Toy'dan almış bulunmaktayım.

              </p>
              <p>Hâli hazırda Echo Psikoloji Enstitüsü'nde klinik psikolog olarak
              çalışmakta olup online ve yüz yüze terapi hizmetlerine devam etmekteyim.</p>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="credentials section">
          <h2>Eğitim ve Deneyim</h2>
            <div className="credentials-grid">
            <div className="credential-category">
              <h3>Eğitim</h3>
              <div className="credential-list">
                <div className="credential-item">
                  <h4>Yüksek Lisans</h4>
                  <p>Klinik Psikoloji - Üsküdar Üniversitesi</p>
                </div>
                <div className="credential-item">
                  <h4>Lisans</h4>
                  <p>Psikoloji - İstanbul Kültür Üniversitesi</p>
                </div>
              </div>
            </div>

            <div className="credential-category">
              <h3>Mesleki Deneyim</h3>
              <div className="credential-list">
                <div className="credential-item">
                  <h4>Echo Psikoloji Enstitüsü</h4>
                  <p>Klinik Psikolog (Devam Ediyor)</p>
                </div>
                <div className="credential-item">
                  <h4>Bi'iz Kliniği</h4>
                  <p>Klinik Psikolog (Online ve Yüz Yüze)</p>
                </div>
                <div className="credential-item">
                  <h4>Dr. Yalçın Güzelhan Kliniği</h4>
                  <p>Stajyer Psikolog</p>
                </div>
                <div className="credential-item">
                  <h4>İstanbul Adalet Sarayı</h4>
                  <p>Adli Psikolog Stajyeri</p>
                </div>
              </div>
            </div>

            <div className="credential-category">
              <h3>Sertifikalar ve Eğitimler</h3>
              <div className="credential-list">
                <div className="credential-item">
                  <h4>Bilişsel Davranışçı Terapi</h4>
                  <p>Eğitmen: Hakan Türkçapar</p>
                </div>
                <div className="credential-item">
                  <h4>Kişisel Gelişim Uzmanlığı</h4>
                  <p>Eğitmen: Neslihan Kuruoğlu</p>
                </div>
                <div className="credential-item">
                  <h4>Biorezonans Sağlık Hizmetleri</h4>
                  <p>Psikokinezyoloji ve Matrix İnform Eğitimleri </p>
                  <p>Eğitmen: Ramazan Toy</p>
                </div>
              </div>
            </div>
            </div>
        </section>

        {/* Approach Section */}
        <section className="approach-section section">
          <h2>Tedavi Yaklaşımım</h2>
          <div className="approach-content">
            <div className="approach-text">
              <p>
                Her bireyin eşsiz bir hikayesi olduğuna inanarak, modern terapi tekniklerini 
                geleneksel yaklaşımlarla harmanlıyor, sizin için en etkili tedavi yolunu 
                birlikte keşfediyoruz.
              </p>
              <div className="approach-intro">
                <p>
                  Terapötik süreçte bilişsel davranışçı terapi ve hümanistik perspektifi
                  bütüncül olarak kullanarak, hem semptomlarınızla başa çıkmanızı hem de
                  kişisel potansiyelinizi keşfetmenizi destekliyorum.
                </p>
              </div>
              <div className="approach-principles">
                <div className="principle">
                  <h4>İş Birliği ve Güven</h4>
                  <p>Terapi sürecinde eşit ortaklar olarak ilerleyerek, güvenli ve empatik bir ortamda çalışırız.</p>
                </div>
                <div className="principle">
                  <h4>Kişiye Özel Yaklaşım</h4>
                  <p>Her tedavi planı bireyin kendine özgü ihtiyaçları, yaşam tarzı ve hedefleri doğrultusunda özenle tasarlanır.</p>
                </div>
                <div className="principle">
                  <h4>Tam Gizlilik</h4>
                  <p>Paylaştıklarınız tamamen gizli kalır ve kendinizi özgürce ifade edebileceğiniz güvenli alan sağlarım.</p>
                </div>
                <div className="principle">
                  <h4>Sürdürülebilir Gelişim</h4>
                  <p>Kısa vadeli rahatlama sağlarken, uzun vadeli kişisel büyüme ve dayanıklılık inşa etmeye odaklanırım.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="specializations section ">
          <h2>Uzmanlık Alanlarım</h2>
          <div className="specializations-grid">
            <div className="specialization-card card">
              <h3>Anksiyete Bozuklukları</h3>
            </div>
            <div className="specialization-card card">
              <h3>Depresyon ve Duygudurum Bozuklukları</h3>
            </div>
            <div className="specialization-card card">
              <h3>İlişki ve Çift Terapisi</h3>
            </div>
            <div className="specialization-card card">
              <h3>Ergen Terapisi</h3>
            </div>
            <div className="specialization-card card">
              <h3>Stres ve Tükenmişlik</h3>
            </div>
            <div className="specialization-card card">
              <h3>Kişisel Gelişim ve Koçluk</h3>
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