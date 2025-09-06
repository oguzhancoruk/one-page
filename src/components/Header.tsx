import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımda', path: '/hakkimda' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Blog', path: '/blog' },
    { name: 'SSS', path: '/sss' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h3 className="gradient-text">Dr. Aleyna Didem Aydın</h3>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link to="/randevu" className="btn btn-primary cta-button" onClick={closeMenu}>
              Randevu Al
            </Link>
          </nav>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;