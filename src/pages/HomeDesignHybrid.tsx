import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  defaultHomeContent,
  mergeHomeContent,
} from '../content/pageDefaults';
import { apiService, type ServiceRecord } from '../services/apiService';
import './HomeDesignHybrid.css';

const serviceColors = [
  'var(--primary-purple)',
  'var(--dark-purple)',
  'var(--accent-purple)',
  'var(--primary-purple)',
];

const HomeDesignHybrid: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [homeContent, setHomeContent] = useState(defaultHomeContent);
  const [services, setServices] = useState<ServiceRecord[]>([]);
  const [servicesError, setServicesError] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const loadPageData = async () => {
      try {
        const content = await apiService.getPublicContent('home');
        setHomeContent(mergeHomeContent(content));
      } catch {
        setHomeContent(defaultHomeContent);
      }

      try {
        const items = await apiService.getServices();
        setServices(items.slice(0, 4));
        setServicesError('');
      } catch {
        setServices([]);
        setServicesError('Hizmet kartları şu anda yüklenemedi.');
      }
    };

    loadPageData();
  }, []);

  return (
    <div className="home-hybrid">
      <Helmet>
        <title>{homeContent.seo.title}</title>
        <meta name="description" content={homeContent.seo.description} />
        <meta name="keywords" content={homeContent.seo.keywords.join(', ')} />
      </Helmet>

      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      ></div>

      <section className="hero-hybrid">
        <div className="container">
          <div className="hero-content-hybrid">
            <div className="hero-text-hybrid">
              <h1 className="luxury-title-hybrid">
                <div className="title-line">
                  {homeContent.sections.hero.titlePrefix}{' '}
                  <span className="title-script">
                    {homeContent.sections.hero.titleHighlight}
                  </span>
                </div>
              </h1>

              <p className="luxury-quote-hybrid">
                "{homeContent.sections.hero.quote}"
              </p>

              <div className="hero-buttons-hybrid">
                <Link
                  to={homeContent.sections.hero.primaryButtonLink}
                  className="btn-luxury primary"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {homeContent.sections.hero.primaryButtonText}
                </Link>
                <Link
                  to={homeContent.sections.hero.secondaryButtonLink}
                  className="btn-luxury outline"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {homeContent.sections.hero.secondaryButtonText}
                </Link>
              </div>
            </div>

            <div className="hero-visual-hybrid">
              <div className="doctor-image-luxury"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-hybrid">
        <div className="container">
          <div className="services-header-hybrid">
            <h2>{homeContent.sections.services.title}</h2>
            <p>{homeContent.sections.services.description}</p>
          </div>

          {servicesError && (
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
              ℹ️ {servicesError}
            </div>
          )}

          <div className="services-grid-hybrid">
            {services.length === 0 ? (
              <div
                className="info-alert"
                style={{
                  padding: '20px',
                  backgroundColor: '#fff',
                  border: '1px solid var(--border-light)',
                  borderRadius: '16px',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  gridColumn: '1 / -1',
                }}
              >
                Henüz yayınlanmış hizmet kartı bulunmuyor.
              </div>
            ) : (
              services.map((service, index) => (
                <div
                  key={service.id}
                  className="service-card-animated"
                  style={
                    {
                      '--item-color': serviceColors[index % serviceColors.length],
                    } as React.CSSProperties
                  }
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
                      <h4>{service.subtitle || 'Detaylı Bilgi'}</h4>
                      <p>{service.approach}</p>
                      <Link
                        to={`/hizmetler#${service.slug || service.id}`}
                        className="overlay-link"
                      >
                        Devamını Oku
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="philosophy-hybrid">
        <div className="container">
          <div className="philosophy-header-hybrid">
            <h2>{homeContent.sections.philosophy.title}</h2>
            <p>{homeContent.sections.philosophy.description}</p>
          </div>

          <div className="philosophy-content-hybrid">
            <div className="philosophy-intro-card">
              <p className="philosophy-description">
                {homeContent.sections.philosophy.body}
              </p>
            </div>

            <div className="philosophy-cta">
              <Link
                to={homeContent.sections.philosophy.buttonLink}
                className="btn-luxury outline"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {homeContent.sections.philosophy.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-hybrid">
        <div className="container">
          <div className="cta-content-hybrid">
            <div className="cta-badge-hybrid">
              {homeContent.sections.cta.badge}
            </div>
            <h2>{homeContent.sections.cta.title}</h2>
            <p>{homeContent.sections.cta.description}</p>

            <div className="cta-buttons-hybrid">
              <Link
                to={homeContent.sections.cta.buttonLink}
                className="btn-luxury outline"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {homeContent.sections.cta.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesignHybrid;
