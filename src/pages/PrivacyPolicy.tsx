import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Legal.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Gizlilik Politikası — Aleyna Didem Aydın</title>
        <meta
          name="description"
          content="Aleyna Didem Aydın web sitesi gizlilik politikası ve kişisel veri işleme bilgilendirmesi."
        />
      </Helmet>
      <div className="container">
        <article className="legal-card">
          <h1>Gizlilik Politikası</h1>
          <p>
            Bu sayfa üzerinden ilettiğiniz bilgiler yalnızca randevu ve iletişim
            süreçlerini yürütmek amacıyla işlenir.
          </p>

          <section>
            <h2>Toplanan Bilgiler</h2>
            <p>
              İletişim ve randevu formlarında ad, soyad, e-posta, telefon ve sizin
              gönüllü olarak paylaştığınız açıklama metinleri alınabilir.
            </p>
          </section>

          <section>
            <h2>Kullanım Amacı</h2>
            <p>
              Verileriniz size geri dönüş sağlamak, talebinizi değerlendirmek ve
              seans planlamasını yürütmek için kullanılır.
            </p>
          </section>

          <section>
            <h2>Gizlilik</h2>
            <p>
              Paylaştığınız bilgiler mesleki etik ilkeler doğrultusunda korunur ve
              hukuki zorunluluklar dışında üçüncü taraflarla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2>Haklarınız</h2>
            <ul>
              <li>Kayıtlı verilerinize ilişkin bilgi talep edebilirsiniz.</li>
              <li>Yanlış veya eksik bilgilerin düzeltilmesini isteyebilirsiniz.</li>
              <li>İşleme amacı sona erdiğinde silme talebinde bulunabilirsiniz.</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
