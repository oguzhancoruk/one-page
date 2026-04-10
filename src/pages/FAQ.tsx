import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './FAQ.css';
import { apiService } from '../services/apiService';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadFaqItems = async () => {
      try {
        setLoading(true);
        setError('');
        const items = await apiService.getFaqItems();
        setFaqData(items);
      } catch {
        setFaqData([]);
        setError('SSS kayıtları yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    loadFaqItems();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="faq">
      <Helmet>
        <title>Sık Sorulan Sorular — Terapi, Seanslar ve Randevu</title>
        <meta
          name="description"
          content="Ergen terapisi, seans süresi, online terapi ve randevu hakkında sık sorulan sorular. Bahçeşehir bölgesinde uzman psikolog hizmetleri."
        />
        <meta
          name="keywords"
          content="sss, sıkça sorulan sorular, terapi süresi, seanslar, randevu, online terapi, ergen terapisi, yetişkin terapisi, çift terapisi, BDT, psikolog, Bahçeşehir, Esenkent, Esenyurt"
        />
      </Helmet>
      <div className="container">
        <div className="faq-header">
          <h1 className="gradient-text">Sıkça Sorulan Sorular</h1>
          <p>
            Terapi süreci hakkında merak ettiklerinizi burada bulabilirsiniz.
            Başka sorularınız varsa benimle iletişime geçmekten çekinmeyin.
          </p>
        </div>

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

        <div className="faq-content">
          <div className="faq-list">
            {loading ? (
              <div className="no-results">
                <p>SSS kayıtları yükleniyor...</p>
              </div>
            ) : faqData.length === 0 ? (
              <div className="no-results">
                <p>Henüz yayınlanmış SSS kaydı bulunmuyor.</p>
              </div>
            ) : (
              faqData.map((item, index) => (
                <div
                  key={item.id}
                  className={`faq-item ${openItems.includes(index) ? 'open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.includes(index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">
                      {openItems.includes(index) ? '−' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="faq-cta">
            <div className="cta-card card">
              <h3>Sorunuza cevap bulamadınız mı?</h3>
              <p>
                Aklınızdaki diğer sorular için benimle doğrudan iletişime geçebilir,
                ücretsiz ön görüşme talep edebilirsiniz.
              </p>
              <div className="cta-buttons">
                <Link to="/iletisim" className="btn btn-primary">
                  İletişime Geçin
                </Link>
                <Link to="/randevu" className="btn btn-secondary">
                  Randevu Alın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
