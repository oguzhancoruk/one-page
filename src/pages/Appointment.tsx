import React, { useState } from 'react';
import './Appointment.css';
import { Helmet } from 'react-helmet-async';
import { apiService } from '../services/apiService';

interface AppointmentForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  sessionType: string;
  preferredDate: string;
  preferredTime: string;
  alternativeDate: string;
  alternativeTime: string;
  previousTherapy: string;
  currentMedication: string;
  medicationList?: string;
  concerns: string;
  emergencyContact: string;
  emergencyPhone: string;
  howDidYouHear: string;
  consent: boolean;
}

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    alternativeDate: '',
    alternativeTime: '',
    previousTherapy: '',
    currentMedication: '',
    concerns: '',
    emergencyContact: '',
    emergencyPhone: '',
    howDidYouHear: '',
    consent: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Validate required fields
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.birthDate ||
        !formData.gender ||
        !formData.sessionType ||
        !formData.preferredDate ||
        !formData.preferredTime ||
        !formData.previousTherapy ||
        !formData.currentMedication ||
        !formData.concerns ||
        !formData.emergencyContact ||
        !formData.emergencyPhone ||
        !formData.consent
      ) {
        throw new Error('Lütfen tüm zorunlu alanları doldurunuz.');
      }

      const response = await apiService.createAppointment({
        ...formData,
        medicationList: formData.currentMedication === 'evet' ? formData.medicationList || '' : '',
      });
      
      if (response) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Randevu oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="form-step">
      <h3>Kişisel Bilgiler</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">Adınız *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Soyadınız *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">E-posta *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Numaranızı giriniz"
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="birthDate">Doğum Tarihi *</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Cinsiyet *</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Seçiniz</option>
            <option value="kadın">Kadın</option>
            <option value="erkek">Erkek</option>
            <option value="belirtmek-istemiyorum">Belirtmek İstemiyorum</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h3>Randevu Tercihleri</h3>
      
      <div className="form-group">
        <label htmlFor="sessionType">Seans Türü *</label>
        <select
          id="sessionType"
          name="sessionType"
          value={formData.sessionType}
          onChange={handleInputChange}
          required
        >
          <option value="">Seçiniz</option>
          <option value="bireysel">Bireysel Terapi</option>
          <option value="ergen">Ergen Terapisi</option>
          <option value="cift">Çift Terapisi</option>
          <option value="online">Online Terapi</option>
        </select>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="preferredDate">Tercih Edilen Tarih *</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredTime">Tercih Edilen Saat *</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            required
          >
            <option value="">Seçiniz</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
          </select>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="alternativeDate">Alternatif Tarih</label>
          <input
            type="date"
            id="alternativeDate"
            name="alternativeDate"
            value={formData.alternativeDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
          />
          <small className="form-note">İsteğe bağlı: İlk tercih müsait olmadığında değerlendirmeye alınacak alternatif tarih.</small>
        </div>
        <div className="form-group">
          <label htmlFor="alternativeTime">Alternatif Saat</label>
          <select
            id="alternativeTime"
            name="alternativeTime"
            value={formData.alternativeTime}
            onChange={handleInputChange}
          >
            <option value="">Seçiniz</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h3>Sağlık ve Geçmiş Bilgileri</h3>
      
      <div className="form-group">
        <label htmlFor="previousTherapy">Daha önce terapi aldınız mı? *</label>
        <select
          id="previousTherapy"
          name="previousTherapy"
          value={formData.previousTherapy}
          onChange={handleInputChange}
          required
        >
          <option value="">Seçiniz</option>
          <option value="hayir">Hayır, ilk kez alacağım.</option>
          <option value="evet-devam">Evet, hâlâ devam ediyorum.</option>
          <option value="evet-bitti">Evet, süreci tamamladım.</option>
          <option value="evet-yarida">Evet, süreci yarıda bıraktım.</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="currentMedication">Şu anda kullandığınız ilaçlar var mı? *</label>
        <select
          id="currentMedication"
          name="currentMedication"
          value={formData.currentMedication}
          onChange={handleInputChange}
          required
        >
          <option value="">Seçiniz</option>
          <option value="hayir">Hayır</option>
          <option value="evet">Evet</option>
        </select>
      </div>

      {formData.currentMedication === 'evet' && (
        <div className="form-group">
          <label htmlFor="medicationList">Kullandığınız ilaçları yazınız</label>
          <textarea
            id="medicationList"
            name="medicationList"
            value={formData.medicationList || ''}
            onChange={handleInputChange}
            rows={3}
            placeholder="İlaç isimlerini yazınız..."
          />
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="concerns">Hangi konularda destek almak istiyorsunuz? *</label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          onChange={handleInputChange}
          rows={4}
          placeholder="Anksiyete, depresyon, ilişki sorunları, travma, stres yönetimi vb."
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="emergencyContact">Acil Durum İletişim Kişisi *</label>
          <input
            type="text"
            id="emergencyContact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleInputChange}
            placeholder="Ad Soyad"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emergencyPhone">Acil Durum Telefonu *</label>
          <input
            type="tel"
            id="emergencyPhone"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="form-step">
      <h3>Son Adım</h3>
      
      <div className="form-group">
        <label htmlFor="howDidYouHear">Bizi nasıl duydunuz?</label>
        <select
          id="howDidYouHear"
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleInputChange}
        >
          <option value="">Seçiniz</option>
          <option value="google">Google Arama</option>
          <option value="sosyal-medya">Sosyal Medya</option>
          <option value="arkadas">Arkadaş Tavsiyesi</option>
          <option value="doktor">Doktor Yönlendirmesi</option>
          <option value="website">Website</option>
          <option value="reklam">Reklam</option>
          <option value="diger">Diğer</option>
        </select>
      </div>
      
      <div className="consent-section">
        <div className="consent-item">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="consent">
            <strong>Aydınlatma Metni ve Gizlilik Politikası</strong>
            <p>
              Kişisel verilerimin, Kişisel Verilerin Korunması Kanunu kapsamında, 
              terapi hizmetlerinin sunulması amacıyla işleneceğini, saklanacağını ve 
              üçüncü kişilerle paylaşılmayacağını kabul ediyorum. Verilerimin işlenmesine 
              izin veriyorum. *
            </p>
          </label>
        </div>
        
        <div className="info-boxes">
          <div className="info-box">
            <h4>📋 Randevu Süreci</h4>
            <ul>
              <li>Formunuz incelendikten sonra 24 saat içinde dönüş yapılacaktır</li>
              <li>Uygun zaman dilimi için sizinle iletişime geçilecektir</li>
              <li>Seanslar 45-60 dakika arasında yapılmaktadır</li>
              <li>Randevu onayı e-posta ile gönderilecektir</li>
            </ul>
          </div>
          
          <div className="info-box">
            <h4>💳 Ödeme Bilgileri</h4>
            <ul>
              {/* <li>Ödeme seansın başında nakit veya kart ile yapılabilir</li>
              <li>Online seanslar için havale/EFT kabul edilmektedir</li>
              <li>İptal durumunda 24 saat önceden haber verilmelidir</li>
              <li>Dekont/fatura verilmektedir</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  if (submitSuccess) {
    return (
      <div className="appointment-page">
        <Helmet>
          <title>Randevu Talebiniz Alındı — Uzman Klinik Psikolog</title>
          <meta name="description" content="Randevu talebiniz alındı. En kısa sürede dönüş yapılacaktır. Ergen terapisi, yetişkin terapisi ve online seans seçenekleri." />
          <meta name="keywords" content="randevu talebiniz alındı, randevu talebi, başarılı, ergen terapisi, yetişkin terapisi, çift terapisi, online terapi, seans, Bahçeşehir psikolog" />
        </Helmet>
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2>Randevu Talebiniz Alındı!</h2>
            <p>
              Sayın <strong>{formData.firstName} {formData.lastName}</strong>, 
              randevu talebiniz başarıyla iletildi. 24 saat içinde size dönüş yapılacaktır.
            </p>
            <div className="success-details">
              <div className="detail-item">
                <strong>Tercih Edilen Seans:</strong> {formData.sessionType}
              </div>
              <div className="detail-item">
                <strong>Tercih Edilen Tarih:</strong> {formData.preferredDate}
              </div>
              <div className="detail-item">
                <strong>Tercih Edilen Saat:</strong> {formData.preferredTime}
              </div>
              <div className="detail-item">
                <strong>İletişim:</strong> {formData.email} - {formData.phone}
              </div>
            </div>
            <button 
              className="btn-success" 
              onClick={() => {
                setSubmitSuccess(false);
                setCurrentStep(1);
                setFormData({
                  firstName: '', lastName: '', email: '', phone: '', birthDate: '',
                  gender: '', sessionType: '', preferredDate: '', preferredTime: '',
                  alternativeDate: '', alternativeTime: '', previousTherapy: '',
                  currentMedication: '', medicationList: '', concerns: '', emergencyContact: '',
                  emergencyPhone: '', howDidYouHear: '', consent: false
                });
              }}
            >
              Yeni Randevu Talebi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-page">
      <Helmet>
        <title>Randevu Al — Uzman Klinik Psikolog</title>
        <meta name="description" content="Randevu formu: ergen terapisi, yetişkin terapisi, çift terapisi ve online seanslar için randevu talep edin." />
        <meta name="keywords" content="randevu, randevu al, seans randevusu, ergen terapisi, yetişkin terapisi, çift terapisi, online terapi, Bahçeşehir, psikolog, klinik psikolog, terapi randevusu" />
      </Helmet>
      <div className="container">
        <div className="appointment-header">
          <h1>Randevu Al</h1>
          <p>Uzm. Kl. Psk. Aleyna Didem Aydın ile profesyonel psikolojik destek almak için randevu talebinde bulunun.</p>
        </div>

        <div className="appointment-main-content">
          <div className="appointment-form-section">
            <div className="appointment-form-container">
              <div className="progress-bar">
                <div className="progress-steps">
                  <div className="progress-line">
                    <div
                      className="progress-fill"
                      style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                    ></div>
                  </div>
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''}`}>
                      <div className="step-number">{step}</div>
                      <div className="step-label">
                        {step === 1 && 'Kişisel Bilgiler'}
                        {step === 2 && 'Randevu Tercihi'}
                        {step === 3 && 'Sağlık Bilgileri'}
                        {step === 4 && 'Onay'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="appointment-form">
                {error && (
                  <div className="error-alert" style={{ 
                    padding: '12px', 
                    marginBottom: '16px', 
                    backgroundColor: '#fee', 
                    border: '1px solid #fcc', 
                    borderRadius: '4px',
                    color: '#c33'
                  }}>
                    ⚠️ {error}
                  </div>
                )}
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                <div className="form-navigation">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={prevStep}
                    >
                      ← Önceki
                    </button>
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={nextStep}
                    >
                      Sonraki →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={!formData.consent || isSubmitting}
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Randevu Talebini Gönder'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Appointment;
