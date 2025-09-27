import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "İlk seansta neler konuşulur?",
      answer: "İlk seansta sizinle tanışırız, mevcut durumunuzu, şikayetlerinizi ve beklentilerinizi konuşuruz. Bu görüşme yaklaşık 50 dakika sürer ve tamamen gizlidir. Rahat hissetmenizi sağlamak için samimi bir ortam oluştururuz."
    },
    {
      question: "Seanslar ne kadar sürer?",
      answer: "Terapi seansları genellikle 45-60 dakika arasında sürmektedir. Seans sıklığı ihtiyaçlarınıza göre belirlenir, genellikle haftada bir kez planlarız."
    },
    {
      question: "Kaç seans sürer?",
      answer: "Terapi süreci kişiden kişiye değişir. Bazı sorunlar birkaç seansta çözülürken, daha derin konular aylar sürebilir."
    },
    {
      question: "Online terapi seçeneği var mı?",
      answer: "Evet, güvenli video konferans platformu üzerinden online terapi seansları sunuyorum. Online seanslar, yüz yüze seanslar kadar etkilidir ve daha esnek bir programlama imkanı sağlar."
    },
    {
      question: "Seanslar gizli midir?",
      answer: "Kesinlikle evet. Profesyonel etik kuralları gereği, seanslarımızdaki tüm konuşmalar tamamen gizlidir. Bu gizlilik sadece yasal zorunluluklar durumunda (kendine veya başkasına zarar verme riski) kırılabilir."
    },
    {
      question: "Nasıl randevu alabilirim?",
      answer: "Randevu almak için telefon, e-posta veya WhatsApp üzerinden benimle iletişime geçebilirsiniz. Size en uygun gün ve saati birlikte belirleriz."
    },
    {
      question: "Seansları nasıl iptal edebilirim?",
      answer: "Seansınızı en az 24 saat öncesinden haber vererek iptal edebilirsiniz. Geç iptal veya hiç gelmeme durumunda seans ücreti tahsil edilir."
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "" /* "Nakit, kredi kartı ve banka havalesi ile ödeme alıyorum. Ayrıca SGK anlaşmalı olduğum için, uygun koşullarda SGK ile çalışabiliyoruz." */
    },
    {
      question: "Çift terapisine tek başıma gelebilir miyim?",
      answer: "Çift terapisinin amacı ilişkideki her iki tarafın da katılımını sağlamaktır. Ancak bazı durumlarda önce bireysel görüşmeler yapılabilir."
    },
    {
      question: "Yaş sınırı var mı?",
      answer: "Yetişkin ve ergen bireylerle çalışıyorum. Çocuk terapisi için uygun uzman meslektaşlarımı önerebilirim."
    },
    {
      question: "Hangi durumlarda terapiye başvurmalıyım?",
      answer: "Anksiyete, depresyon, stres, ilişki sorunları, travmatik yaşantılar, kişisel gelişim ihtiyacı, yaşam geçişleri gibi durumlarla başa çıkmakta zorlandığınızda terapi destek alabilirsiniz."
    },
    {
      question: "Terapi sürecinde ne beklemeliyim?",
      answer: "Terapi bir yolculuktur. Başlangıçta zorlanabilir, duygusal yoğunluk yaşayabilirsiniz. Zamanla kendinizi daha iyi anlayacak, başa çıkma becerileriniz gelişecek ve yaşam kaliteniz artacaktır."
    }
  ];

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-header">
          <h1 className="gradient-text">Sıkça Sorulan Sorular</h1>
          <p>
            Terapi süreci hakkında merak ettiklerinizi burada bulabilirsiniz. 
            Başka sorularınız varsa benimle iletişime geçmekten çekinmeyin.
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div 
                key={index} 
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
            ))}
          </div>

          <div className="faq-cta">
            <div className="cta-card card">
              <h3>Sorunuza cevap bulamadınız mı?</h3>
              <p>
                Aklınızdaki diğer sorular için benimle doğrudan iletişime geçebilir, 
                ücretsiz ön görüşme talep edebilirsiniz.
              </p>
              <div className="cta-buttons">
                <a href="/iletisim" className="btn btn-primary">
                  İletişime Geçin
                </a>
                <a href="/randevu" className="btn btn-secondary">
                  Randevu Alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;