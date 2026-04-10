import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  defaultContactContent,
  mergeContactContent,
} from '../content/pageDefaults';
import './Contact.css';
import { apiService } from '../services/apiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    serviceType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [contactContent, setContactContent] = useState(defaultContactContent);
  const [contactInfo, setContactInfo] = useState({
    email: 'psikologaleynadidemaydin@gmail.com',
    phone: '',
    whatsapp: '',
    address: 'Bahçeşehir 2. Kısım, Avni Akyol Bulvarı, 34488 Başakşehir/İstanbul',
    workingHours: {
      weekdays: '09:00 - 17:00',
      saturday: 'Kapalı',
      sunday: 'Kapalı',
    },
  });

  useEffect(() => {
    const loadPageData = async () => {
      const [settingsResult, contentResult] = await Promise.allSettled([
        apiService.getPublicSettings(),
        apiService.getPublicContent('contact'),
      ]);

      if (settingsResult.status === 'fulfilled') {
        const settings = settingsResult.value;
        setContactInfo({
          email: settings.email || 'psikologaleynadidemaydin@gmail.com',
          phone: settings.phone || '',
          whatsapp: settings.whatsapp || '',
          address:
            settings.address ||
            'Bahçeşehir 2. Kısım, Avni Akyol Bulvarı, 34488 Başakşehir/İstanbul',
          workingHours: {
            weekdays: settings.workingHours?.weekdays || '09:00 - 17:00',
            saturday: settings.workingHours?.saturday || 'Kapalı',
            sunday: settings.workingHours?.sunday || 'Kapalı',
          },
        });
      }

      if (contentResult.status === 'fulfilled') {
        setContactContent(mergeContactContent(contentResult.value));
      } else {
        setContactContent(defaultContactContent);
      }
    };

    loadPageData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Lütfen tüm zorunlu alanları doldurunuz.');
      }

      const response = await apiService.sendContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        preferredContact: formData.preferredContact,
        serviceType: formData.serviceType,
      });

      if (response) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email',
          serviceType: '',
        });
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <Helmet>
        <title>{contactContent.seo.title}</title>
        <meta name="description" content={contactContent.seo.description} />
        <meta name="keywords" content={contactContent.seo.keywords.join(', ')} />
      </Helmet>
      <div className="container">
        <section className="contact-hero">
          <h1 className="gradient-text">{contactContent.sections.hero.title}</h1>
          <p className="hero-subtitle">{contactContent.sections.hero.subtitle}</p>
        </section>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-methods">
              <div className="contact-method card">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h3>E-posta</h3>
                  <p>{contactInfo.email}</p>
                  <span className="response-time">24 saat içinde yanıtlarım</span>
                </div>
              </div>

              <div className="contact-method card">
                <div className="method-icon">📱</div>
                <div className="method-content">
                  <h3>Telefon</h3>
                  <p>{contactInfo.phone || '-'}</p>
                  <span className="response-time">
                    Hafta içi 09:00-17:00 saatleri arasında bana ulaşabilirsiniz
                  </span>
                </div>
              </div>

              <div className="contact-method card">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h3>WhatsApp</h3>
                  <p>{contactInfo.whatsapp || '-'}</p>
                  <span className="response-time">Hızlı yanıt</span>
                </div>
              </div>

              <div className="contact-method card">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <h3>Adres</h3>
                  <p>{contactInfo.address}</p>
                  <span className="response-time">Randevu ile</span>
                </div>
              </div>
            </div>

            <div className="office-hours card">
              <h3>📅 Çalışma Saatleri</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Pazartesi - Cuma</span>
                  <span>{contactInfo.workingHours.weekdays}</span>
                </div>
                <div className="hour-item">
                  <span>Cumartesi</span>
                  <span>{contactInfo.workingHours.saturday}</span>
                </div>
                <div className="hour-item">
                  <span>Pazar</span>
                  <span>{contactInfo.workingHours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            {!submitted ? (
              <div className="form-container card">
                <h2>{contactContent.sections.form.title}</h2>
                <p>{contactContent.sections.form.description}</p>

                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div
                      className="error-alert"
                      style={{
                        padding: '12px',
                        marginBottom: '16px',
                        backgroundColor: '#fee',
                        border: '1px solid #fcc',
                        borderRadius: '4px',
                        color: '#c33',
                      }}
                    >
                      ⚠️ {error}
                    </div>
                  )}
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
                      * {contactContent.sections.form.privacyNotice}
                      <Link to="/gizlilik"> Gizlilik politikamızı</Link> okuyabilirsiniz.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? contactContent.sections.form.submittingButtonText
                      : contactContent.sections.form.submitButtonText}
                  </button>
                </form>
              </div>
            ) : (
              <div className="success-message card">
                <div className="success-icon">✅</div>
                <h2>{contactContent.sections.form.successTitle}</h2>
                <p>{contactContent.sections.form.successMessage}</p>
                <div className="success-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    {contactContent.sections.form.resetButtonText}
                  </button>
                  <Link to="/randevu" className="btn btn-primary">
                    {contactContent.sections.form.appointmentButtonText}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="quick-actions section">
          <h2 className="text-center">{contactContent.sections.quickActions.title}</h2>
          <div className="quick-actions-grid">
            <Link to="/randevu" className="quick-action card">
              <div className="action-icon">📅</div>
              <h3>{contactContent.sections.quickActions.appointmentTitle}</h3>
              <p>{contactContent.sections.quickActions.appointmentDescription}</p>
            </Link>

            <div className="quick-action card">
              <div className="action-icon">📞</div>
              <h3>{contactContent.sections.quickActions.callTitle}</h3>
              <p>{contactContent.sections.quickActions.callDescription}</p>
            </div>

            <div className="quick-action card">
              <div className="action-icon">💬</div>
              <h3>{contactContent.sections.quickActions.whatsappTitle}</h3>
              <p>{contactContent.sections.quickActions.whatsappDescription}</p>
            </div>

            <Link to="/sss" className="quick-action card">
              <div className="action-icon">❓</div>
              <h3>{contactContent.sections.quickActions.faqTitle}</h3>
              <p>{contactContent.sections.quickActions.faqDescription}</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
