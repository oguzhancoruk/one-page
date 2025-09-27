import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        serviceType: ''
      });
    }, 2000);
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1 className="gradient-text">İletişim</h1>
          <p className="hero-subtitle">
            Sorularınız için bana ulaşabilir, randevu alabilir veya 
            ücretsiz ön görüşme talep edebilirsiniz.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="contact-methods">
              <div className="contact-method card">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h3>E-posta</h3>
                  <p>psikologaleynadidemaydin@gmail.com</p>
                  <span className="response-time">24 saat içinde yanıtlarım</span>
                </div>
              </div>

              <div className="contact-method card">
                <div className="method-icon">📱</div>
                <div className="method-content">
                  <h3>Telefon</h3>
                  <p></p>
                  <span className="response-time">Hafta içi 09:00-17:00</span>
                </div>
              </div>

              <div className="contact-method card">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h3>WhatsApp</h3>
                  <p></p>
                  <span className="response-time">Hızlı yanıt</span>
                </div>
              </div>

              <div className="contact-method card">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <h3>Adres</h3>
                  <p></p>
                  <span className="response-time">Randevu ile</span>
                </div>
              </div>
            </div>

            <div className="office-hours card">
              <h3>📅 Çalışma Saatleri</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Pazartesi - Cuma</span>
                  <span>09:00 - 17:00</span>
                </div>
                <div className="hour-item">
                  <span>Cumartesi</span>
                  <span>Kapalı</span>
                </div>
                <div className="hour-item">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            {!submitted ? (
              <div className="form-container card">
                <h2>Mesaj Gönderin</h2>
                <p>Size en kısa sürede dönüş yapabilmem için lütfen formu detaylı doldurun.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-posta *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Numara Giriniz"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="serviceType">İlgilendiğiniz Hizmet</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                      >
                        <option value="">Seçiniz</option>
                        <option value="bireysel">Bireysel Terapi</option>
                        <option value="cift">Çift Terapisi</option>
                        <option value="ergen">Ergen Terapisi</option>
                        <option value="gelisim">Kişisel Gelişim</option>
                        <option value="online">Online Terapi</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Konu *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Mesajınızın konusu"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mesajınız *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Mesajınızı detaylı olarak yazın..."
                    />
                  </div>

                  <div className="form-group">
                    <label>Tercih ettiğiniz iletişim yöntemi:</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                        />
                        E-posta
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                        />
                        Telefon
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={handleInputChange}
                        />
                        WhatsApp
                      </label>
                    </div>
                  </div>

                  <div className="privacy-notice">
                    <p>
                      * Kişisel bilgileriniz tamamen gizli tutulacak ve sadece size dönüş yapmak için kullanılacaktır. 
                      <Link to="/gizlilik"> Gizlilik politikamızı</Link> okuyabilirsiniz.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="success-message card">
                <div className="success-icon">✅</div>
                <h2>Mesajınız Alındı!</h2>
                <p>
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.
                  Acil durumlar için doğrudan telefon ile ulaşabilirsiniz.
                </p>
                <div className="success-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Yeni Mesaj Gönder
                  </button>
                  <Link to="/randevu" className="btn btn-primary">
                    Randevu Al
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Quick Actions */}
        <section className="quick-actions section">
          <h2 className="text-center">Hızlı İşlemler</h2>
          <div className="quick-actions-grid">
            <Link to="/randevu" className="quick-action card">
              <div className="action-icon">📅</div>
              <h3>Randevu Al</h3>
              <p>Online randevu sistemi ile kolayca randevu alın</p>
            </Link>

            <div className="quick-action card">
              <div className="action-icon">📞</div>
              <h3>Hemen Ara</h3>
              <p>Acil durumlarda direkt telefon ile ulaşın</p>
            </div>

            <div className="quick-action card">
              <div className="action-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>WhatsApp üzerinden hızlı iletişim kurun</p>
            </div>

            <Link to="/sss" className="quick-action card">
              <div className="action-icon">❓</div>
              <h3>SSS</h3>
              <p>Sık sorulan soruları inceleyin</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;