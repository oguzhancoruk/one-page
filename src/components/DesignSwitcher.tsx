import React from 'react';
import './DesignSwitcher.css';

interface DesignSwitcherProps {
  currentDesign: number;
  onDesignChange: (design: number) => void;
}

const DesignSwitcher: React.FC<DesignSwitcherProps> = ({ currentDesign, onDesignChange }) => {
  const designs = [
    { id: 1, name: 'Minimal Modern', description: 'Sade ve temiz' },
    { id: 2, name: 'Klasik Profesyonel', description: 'Geleneksel kurumsal' },
    { id: 3, name: 'Modern Kart Tabanlı', description: 'Kart tasarımı' },
    { id: 4, name: 'Minimalist Luxury', description: 'Şık ve lüks' },
    { id: 5, name: 'Modern Medical', description: 'Tıbbi/klinik görünüm' },
    { id: 6, name: 'Magazine Style', description: 'Dergi tarzı dolu' },
    { id: 7, name: 'Interactive Dashboard', description: 'Canlı dashboard' },
    { id: 8, name: 'Creative Portfolio', description: 'Yaratıcı portföy' },
    { id: 9, name: 'Corporate Excellence', description: 'Kurumsal premium' },
    { id: 10, name: 'Social Media Style', description: 'Sosyal medya tarzı' }
  ];

  return (
    <div className="design-switcher">
      <div className="switcher-header">
        <h3>🎨 Tasarım Seçici</h3>
        <p>Ana sayfa tasarımını değiştir</p>
      </div>
      
      <div className="design-buttons">
        {designs.map(design => (
          <button
            key={design.id}
            className={`design-btn ${currentDesign === design.id ? 'active' : ''}`}
            onClick={() => onDesignChange(design.id)}
          >
            <div className="design-number">{design.id}</div>
            <div className="design-info">
              <div className="design-name">{design.name}</div>
              <div className="design-desc">{design.description}</div>
            </div>
            {currentDesign === design.id && (
              <div className="active-indicator">✓</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DesignSwitcher;