import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Legal.css';

const TermsOfUse: React.FC = () => {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Kullanım Şartları — Aleyna Didem Aydın</title>
        <meta
          name="description"
          content="Aleyna Didem Aydın web sitesi kullanım şartları ve ziyaretçi bilgilendirmesi."
        />
      </Helmet>
      <div className="container">
        <article className="legal-card">
          <h1>Kullanım Şartları</h1>
          <p>
            Bu site bilgilendirme ve iletişim amaçlıdır. Siteyi kullanmanız aşağıdaki
            şartları kabul ettiğiniz anlamına gelir.
          </p>

          <section>
            <h2>Bilgilendirme Niteliği</h2>
            <p>
              Sitedeki içerikler genel bilgilendirme içindir. Doğrudan tanı, teşhis
              veya acil müdahale yerine geçmez.
            </p>
          </section>

          <section>
            <h2>İçerik Kullanımı</h2>
            <p>
              Metin, görsel ve diğer içerikler izinsiz kopyalanamaz, çoğaltılamaz veya
              ticari amaçla kullanılamaz.
            </p>
          </section>

          <section>
            <h2>Form Kullanımı</h2>
            <p>
              İletişim ve randevu formlarında doğru bilgi paylaşmanız beklenir. Yanlış
              veya yanıltıcı kullanım hizmet süreçlerini etkileyebilir.
            </p>
          </section>

          <section>
            <h2>Değişiklik Hakkı</h2>
            <p>
              Site içeriği, erişim koşulları ve kullanım şartları gerekli görüldüğünde
              önceden bildirim yapılmaksızın güncellenebilir.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfUse;
