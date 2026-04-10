import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { apiService, type ServiceRecord } from '../services/apiService';

interface ServiceViewModel {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  frequency: string;
  approach: string;
}

const mapService = (service: ServiceRecord): ServiceViewModel => ({
  id: service.slug || service.id,
  icon: service.icon || '🧠',
  title: service.title,
  subtitle: service.subtitle,
  description: service.description,
  features: service.features,
  duration: service.duration,
  frequency: service.frequency,
  approach: service.approach,
});

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceViewModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        setError('');
        const items = await apiService.getServices();
        setServices(items.map(mapService));
      } catch {
        setServices([]);
        setError('Hizmetler yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <div className="services">
      <div className="container">
        <section className="services-hero">
          <h2 className="gradient-text">Hizmetlerim</h2>
          <p className="hero-subtitle">
            Size en uygun terapi yöntemini birlikte belirleyerek, iyileşme
            sürecinizde yanınızda oluyorum.
          </p>
        </section>

        {error && (
          <div
            className="info-alert"
            style={{
              padding: '12px',
              marginBottom: '16px',
              backgroundColor: '#fff4e5',
              border: '1px solid #ffd8a8',
              borderRadius: '4px',
              color: '#9c6500',
            }}
          >
            ℹ️ {error}
          </div>
        )}

        <section className="services-grid">
          {loading ? (
            <div className="no-results">
              <p>Hizmetler yükleniyor...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="no-results">
              <p>Henüz yayınlanmış hizmet bulunmuyor.</p>
            </div>
          ) : (
            services.map((service) => (
              <div key={service.id} id={service.id} className="service-detail card">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
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
            ))
          )}
        </section>

        <section className="therapy-process section">
          <h2>Terapi Süreci Nasıl İşler?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Değerlendirme</h3>
                <p>
                  İlk seansta detaylı değerlendirme yaparak size en uygun tedavi
                  planını belirleriz.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Tedavi Planı</h3>
                <p>
                  Bireysel ihtiyaçlarınıza göre kişiselleştirilmiş tedavi programı
                  oluştururuz.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Terapi Seansları</h3>
                <p>
                  Düzenli seanslarla belirlediğimiz hedeflere doğru birlikte
                  ilerlemeye başlarız.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Değerlendirme ve Sonuç</h3>
                <p>
                  İlerlemenizi düzenli olarak değerlendirerek terapi sürecini
                  başarıyla tamamlarız.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
