import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navigation = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hizmetler', path: '/hizmetler' },
  { name: 'Blog', path: '/blog' },
  { name: 'Hakkımda', path: '/hakkimda' },
  { name: 'SSS', path: '/sss' },
  { name: 'İletişim', path: '/iletisim' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1181px)');
    const handleResize = () => { if (desktop.matches) setIsMenuOpen(false); };
    document.addEventListener('pointerdown', handleOutside);
    document.addEventListener('keydown', handleKey);
    desktop.addEventListener('change', handleResize);
    return () => {
      document.removeEventListener('pointerdown', handleOutside);
      document.removeEventListener('keydown', handleKey);
      desktop.removeEventListener('change', handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header ref={headerRef} className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${isMenuOpen ? 'site-header--open' : ''}`}>
      <div className="site-header__shell">
        <Link to="/" className="site-brand" onClick={closeMenu} aria-label="Klinik Psikolog Aleyna Didem Aydın — Ana Sayfa">
          <span className="site-brand__text">
            <span className="site-brand__title">Klinik Psikolog</span>
            <span className="site-brand__name">Aleyna Didem Aydın</span>
          </span>
        </Link>

        <button ref={toggleRef} type="button" className="site-menu-toggle" onClick={() => setIsMenuOpen(open => !open)}
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={isMenuOpen} aria-controls="site-navigation">
          <span className="site-menu-toggle__label">Menü</span>
          <span className="site-menu-toggle__lines" aria-hidden="true"><span /><span /></span>
        </button>

        <nav id="site-navigation" className="site-navigation" aria-label="Ana menü">
          <span className="site-navigation__eyebrow">KEŞFEDİN</span>
          <ul className="site-navigation__list">
            {navigation.map(item => (
              <li key={item.path}>
                <Link to={item.path} className={`site-navigation__link ${location.pathname === item.path ? 'is-active' : ''}`}
                  aria-current={location.pathname === item.path ? 'page' : undefined} onClick={closeMenu}>
                  {item.name}<span className="site-navigation__mobile-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/randevu" className="site-header__appointment" onClick={closeMenu} aria-current={location.pathname === '/randevu' ? 'page' : undefined}>
            <svg className="site-header__calendar" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="3" /><path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" /></svg>
            <span>Randevu Al</span>
            <span className="site-header__appointment-arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg></span>
          </Link>
          <p className="site-navigation__note">Kendinize ayırdığınız zaman değerlidir.</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
