import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 'bireysel',
      icon: '👤',
      title: 'Bireysel Terapi',
      subtitle: 'Kişisel gelişim ve ruh sağlığı',
      description: 'Bireysel terapi seanslarında, kişisel sorunlarınız için özel olarak tasarlanmış tedavi planları uyguluyorum.',
      features: [
        'Anksiyete ve depresyon tedavisi',
        'Stres yönetimi teknikleri',
        'Öz güven geliştirme',
        'Kişisel hedef belirleme',
        'Yaşam kalitesi artırma'
      ],
      duration: '50 dakika',
      frequency: 'Haftada 1 kez',
      approach: 'Bilişsel Davranışçı Terapi, Psikanalitik Yaklaşım'
    },
    {
      id: 'cift',
      icon: '💕',
      title: 'Çift Terapisi',
      subtitle: 'İlişkilerde uzlaşma ve uyum',
      description: 'Çiftlerin iletişim sorunlarını çözmelerine ve ilişkilerini güçlendirmelerine yardımcı oluyorum.',
      features: [
        'İletişim becerilerini geliştirme',
        'Çatışma çözme teknikleri',
        'Güven inşa etme',
        'İntimite sorunlarını ele alma',
        'Evlilik öncesi danışmanlık'
      ],
      duration: '60 dakika',
      frequency: 'Haftada 1 kez',
      approach: 'Sistemik Aile Terapisi, Gottman Metodu'
    },
    {
      id: 'travma',
      icon: '🧠',
      title: 'Travma Tedavisi',
      subtitle: 'Geçmişten özgürleşme',
      description: 'Travmatik yaşantıların iyileştirilmesi için uzman yaklaşımlar kullanıyor, EMDR terapisi uyguluyorum.',
      features: [
        'PTSD tedavisi',
        'EMDR terapisi',
        'Çocukluk travmaları',
        'İstismar sonrası rehabilitasyon',
        'Kayıp ve yas süreci'
      ],
      duration: '60-90 dakika',
      frequency: 'Haftada 1-2 kez',
      approach: 'EMDR, Bilişsel Davranışçı Terapi, Somatik Yaklaşım'
    },
    {
      id: 'gelisim',
      icon: '🌱',
      title: 'Kişisel Gelişim',
      subtitle: 'Potanselinizi keşfedin',
      description: 'Kişisel potanselinizi keşfetmeniz ve yaşam kalitenizi artırmanız için rehberlik ediyorum.',
      features: [
        'Yaşam koçluğu',
        'Kariyer danışmanlığı',
        'Zaman yönetimi',
        'Liderlik becerileri',
        'Mindfulness ve meditasyon'
      ],
      duration: '50 dakika',
      frequency: '2 haftada 1',
      approach: 'Hümanistik Yaklaşım, Pozitif Psikoloji, Koçluk'
    },
    {
      id: 'grup',
      icon: '👥',
      title: 'Grup Terapisi',
      subtitle: 'Paylaşım ve destek',
      description: 'Benzer sorunları yaşayan kişilerle birlikte grup ortamında terapi seansları düzenliyorum.',
      features: [
        'Sosyal anksiyete grupları',
        'Yas ve kayıp grupları',
        'Kadın destek grupları',
        'Öfke yönetimi grupları',
        'Mindfulness grupları'
      ],
      duration: '90 dakika',
      frequency: 'Haftada 1 kez',
      approach: 'Grup Dinamikleri, Psikodrama, Destekleyici Terapi'
    },
    {
      id: 'online',
      icon: '💻',
      title: 'Online Terapi',
      subtitle: 'Uzaktan profesyonel destek',
      description: 'Güvenli video konferans platformu üzerinden online terapi seansları sunuyorum.',
      features: [
        'Esnek seans saatleri',
        'Coğrafi sınır olmadan erişim',
        'Güvenli video konferans',
        'Dijital kaynak paylaşımı',
        'Acil durum desteği'
      ],
      duration: '50 dakika',
      frequency: 'İhtiyaca göre',
      approach: 'Tüm terapi yaklaşımları online uygulanabilir'
    }
  ];

  return (
    <div className="services">
      <div className="container">
        {/* Hero Section */}
        <section className="services-hero">
          <h1 className="gradient-text">Hizmetlerim</h1>
          <p className="hero-subtitle">
            Size en uygun terapi yöntemini birlikte belirleyerek, 
            iyileşme sürecinizde yanınızda oluyorum.
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-grid">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="service-detail card">
              <div className="service-header">
                <div className="service-icon-large">
                  {service.icon}
                </div>
                <div className="service-title-section">
                  <h2>{service.title}</h2>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <div className="service-content">
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  <h3>Bu hizmette neler yapıyoruz:</h3>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-details-grid">
                  <div className="detail-item">
                    <h4>⏱️ Süre</h4>
                    <p>{service.duration}</p>
                  </div>
                  <div className="detail-item">
                    <h4>📅 Sıklık</h4>
                    <p>{service.frequency}</p>
                  </div>
                  <div className="detail-item">
                    <h4>🎯 Yaklaşım</h4>
                    <p>{service.approach}</p>
                  </div>
                </div>

                <div className="service-cta">
                  <Link to="/randevu" className="btn btn-primary">
                    Bu Hizmet için Randevu Al
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Process Section */}
        <section className="therapy-process section bg-light-purple">
          <h2 className="text-center">Terapi Süreci Nasıl İşler?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>İlk Görüşme</h3>
                <p>
                  Ücretsiz 15 dakikalık telefon görüşmesi ile tanışır, 
                  ihtiyaçlarınızı değerlendiririz.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Değerlendirme</h3>
                <p>
                  İlk seansta detaylı değerlendirme yaparak size en uygun 
                  tedavi planını belirleriz.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Tedavi Planı</h3>
                <p>
                  Bireysel ihtiyaçlarınıza göre kişiselleştirilmiş 
                  tedavi programı oluştururuz.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Terapi Seansları</h3>
                <p>
                  Düzenli seanslarla belirlediğimiz hedeflere doğru 
                  birlikte ilerlemeye başlarız.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Değerlendirme ve Sonuç</h3>
                <p>
                  İlerlemenizi düzenli olarak değerlendirerek terapi 
                  sürecini başarıyla tamamlarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing section">
          <h2 className="text-center">Hizmet Ücretleri</h2>
          <div className="pricing-grid">
            <div className="pricing-card card">
              <h3>Bireysel Terapi</h3>
              <div className="price">
                <span className="currency">₺</span>
                <span className="amount">800</span>
                <span className="period">/seans</span>
              </div>
              <ul className="pricing-features">
                <li>50 dakika seans</li>
                <li>Kişiselleştirilmiş yaklaşım</li>
                <li>Esneklik ve gizlilik</li>
                <li>İlerleme takibi</li>
              </ul>
            </div>

            <div className="pricing-card card featured">
              <div className="popular-badge">Popüler</div>
              <h3>Çift Terapisi</h3>
              <div className="price">
                <span className="currency">₺</span>
                <span className="amount">1200</span>
                <span className="period">/seans</span>
              </div>
              <ul className="pricing-features">
                <li>60 dakika seans</li>
                <li>İki kişi için</li>
                <li>İletişim teknikleri</li>
                <li>Çatışma çözme</li>
              </ul>
            </div>

            <div className="pricing-card card">
              <h3>Online Terapi</h3>
              <div className="price">
                <span className="currency">₺</span>
                <span className="amount">700</span>
                <span className="period">/seans</span>
              </div>
              <ul className="pricing-features">
                <li>50 dakika seans</li>
                <li>Uzaktan erişim</li>
                <li>Esnek saatler</li>
                <li>Güvenli platform</li>
              </ul>
            </div>
          </div>
          
          <div className="pricing-note text-center">
            <p>
              🎯 İlk görüşme ücretsizdir. SGK anlaşmalı ödeme seçenekleri mevcuttur.
              Taksit imkanları için benimle iletişime geçebilirsiniz.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta section bg-purple">
          <div className="text-center">
            <h2>Hangi Hizmeti Seçeceğinizden Emin Değil misiniz?</h2>
            <p>
              Size en uygun terapi yaklaşımını birlikte belirleyelim. 
              Ücretsiz ön görüşme için benimle iletişime geçin.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn btn-secondary">
                Ücretsiz Danışmanlık
              </Link>
              <Link to="/randevu" className="btn btn-outline">
                Hemen Randevu Al
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;