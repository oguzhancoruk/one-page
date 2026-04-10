import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  defaultFooterContent,
  mergeFooterContent,
} from '../content/pageDefaults';
import './Footer.css';
import { apiService } from '../services/apiService';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [footerContent, setFooterContent] = useState(
    mergeFooterContent(defaultFooterContent)
  );
  const [contactInfo, setContactInfo] = useState({
    email: 'psikologaleynadidemaydin@gmail.com',
    phone: '',
    address: 'Bahçeşehir 2. Kısım, Avni Akyol Bulvarı, 34488 Başakşehir/İstanbul',
    instagramUrl: 'https://www.instagram.com/psk.aleynadidemaydin/',
  });

  useEffect(() => {
    const loadFooterData = async () => {
      const [settingsResult, contentResult] = await Promise.allSettled([
        apiService.getPublicSettings(),
        apiService.getPublicContent('footer'),
      ]);

      if (settingsResult.status === 'fulfilled') {
        const settings = settingsResult.value;
        setContactInfo({
          email: settings.email || 'psikologaleynadidemaydin@gmail.com',
          phone: settings.phone || '',
          address:
            settings.address ||
            'Bahçeşehir 2. Kısım, Avni Akyol Bulvarı, 34488 Başakşehir/İstanbul',
          instagramUrl:
            settings.instagramUrl ||
            'https://www.instagram.com/psk.aleynadidemaydin/',
        });
      }

      if (contentResult.status === 'fulfilled') {
        setFooterContent(mergeFooterContent(contentResult.value));
      } else {
        setFooterContent(mergeFooterContent(defaultFooterContent));
      }
    };

    loadFooterData();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{footerContent.sections.brand.title}</h3>
            <p>{footerContent.sections.brand.description}</p>
          </div>

          <div className="footer-section">
            <h4>{footerContent.sections.quickLinks.title}</h4>
            <ul className="footer-links">
              {footerContent.sections.quickLinks.items.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>{footerContent.sections.services.title}</h4>
            <ul className="footer-links">
              {footerContent.sections.services.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>{footerContent.sections.contact.title}</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">E-posta:</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Telefon:</span>
                <span>{contactInfo.phone || '-'}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Adres:</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href={contactInfo.instagramUrl}
                aria-label={footerContent.sections.contact.instagramLabel}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerContent.sections.contact.instagramLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} {footerContent.sections.brand.title}.{' '}
              {footerContent.sections.legal.copyrightText}
            </p>
            <div className="footer-bottom-links">
              <Link to={footerContent.sections.legal.privacyLink}>
                {footerContent.sections.legal.privacyLabel}
              </Link>
              <Link to={footerContent.sections.legal.termsLink}>
                {footerContent.sections.legal.termsLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
