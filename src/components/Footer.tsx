import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  defaultFooterContent,
  mergeFooterContent,
} from '../content/pageDefaults';
import './Footer.css';
import { apiService } from '../services/apiService';

type FooterIconName = 'mail' | 'phone' | 'location' | 'instagram';

const FooterIcon = ({ name }: { name: FooterIconName }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'mail' && <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>}
    {name === 'phone' && <path d="M8 3H5a2 2 0 0 0-2 2c0 8.84 7.16 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 2a12 12 0 0 1-6-6l2-2-2-5Z" />}
    {name === 'location' && <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
    {name === 'instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>}
  </svg>
);

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

  const brandTitle = footerContent.sections.brand.title;
  const brandParts = brandTitle.trim().match(/^(Klinik\s+Psikolog)\s+(.+)$/i);
  const phoneHref = contactInfo.phone.replace(/[^\d+]/g, '');

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__brand-link">
              {brandParts ? <>
                <span className="site-footer__eyebrow">{brandParts[1]}</span>
                <span className="site-footer__name">{brandParts[2]}</span>
              </> : <span className="site-footer__name">{brandTitle}</span>}
            </Link>
            <p className="site-footer__description">{footerContent.sections.brand.description}</p>
            <a href={contactInfo.instagramUrl} className="site-footer__social" target="_blank" rel="noopener noreferrer">
              <FooterIcon name="instagram" />
              <span>{footerContent.sections.contact.instagramLabel}</span>
              <span className="site-footer__social-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <nav className="site-footer__navigation" aria-label={footerContent.sections.quickLinks.title}>
            <h2 className="site-footer__heading">{footerContent.sections.quickLinks.title}</h2>
            <ul className="site-footer__links">
              {footerContent.sections.quickLinks.items.map(item => (
                <li key={`${item.href}-${item.label}`}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__services">
            <h2 className="site-footer__heading">{footerContent.sections.services.title}</h2>
            <ul className="site-footer__links">
              {footerContent.sections.services.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="site-footer__contact">
            <h2 className="site-footer__heading">{footerContent.sections.contact.title}</h2>
            <ul className="site-footer__contact-list">
              <li><FooterIcon name="mail" /><a href={`mailto:${contactInfo.email}`} aria-label={`E-posta: ${contactInfo.email}`}>{contactInfo.email}</a></li>
              {contactInfo.phone && <li><FooterIcon name="phone" /><a href={`tel:${phoneHref}`} aria-label={`Telefon: ${contactInfo.phone}`}>{contactInfo.phone}</a></li>}
              <li><FooterIcon name="location" /><span>{contactInfo.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {currentYear} {brandTitle}. {footerContent.sections.legal.copyrightText}</p>
          <nav className="site-footer__legal" aria-label="Yasal bilgiler">
            <Link to={footerContent.sections.legal.privacyLink}>{footerContent.sections.legal.privacyLabel}</Link>
            <Link to={footerContent.sections.legal.termsLink}>{footerContent.sections.legal.termsLabel}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
