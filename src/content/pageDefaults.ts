export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface HomeContentSections {
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    quote: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
  services: {
    title: string;
    description: string;
  };
  philosophy: {
    title: string;
    description: string;
    body: string;
    buttonText: string;
    buttonLink: string;
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface AboutCredentialItem {
  title: string;
  lines: string[];
}

export interface AboutCredentialGroup {
  title: string;
  items: AboutCredentialItem[];
}

export interface AboutPrinciple {
  title: string;
  description: string;
}

export interface AboutContentSections {
  hero: {
    title: string;
    subtitle: string;
    intro: string;
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  credentials: {
    title: string;
    groups: AboutCredentialGroup[];
  };
  approach: {
    title: string;
    lead: string;
    intro: string;
    principles: AboutPrinciple[];
  };
  specializations: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterContentSections {
  brand: {
    title: string;
    description: string;
  };
  quickLinks: {
    title: string;
    items: FooterLinkItem[];
  };
  services: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    instagramLabel: string;
  };
  legal: {
    privacyLabel: string;
    privacyLink: string;
    termsLabel: string;
    termsLink: string;
    copyrightText: string;
  };
}

export interface ContactContentSections {
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    title: string;
    description: string;
    privacyNotice: string;
    successTitle: string;
    successMessage: string;
    resetButtonText: string;
    appointmentButtonText: string;
    submitButtonText: string;
    submittingButtonText: string;
  };
  quickActions: {
    title: string;
    appointmentTitle: string;
    appointmentDescription: string;
    callTitle: string;
    callDescription: string;
    whatsappTitle: string;
    whatsappDescription: string;
    faqTitle: string;
    faqDescription: string;
  };
}

export const defaultHomeContent = {
  sections: {
    hero: {
      titlePrefix: 'Uzm. Kl. Psk.',
      titleHighlight: 'Aleyna Didem Aydın',
      quote:
        'Her bireyin kendine özgü bir hikayesi vardır. Bu hikayenin en güzel halini birlikte keşfedelim.',
      primaryButtonText: 'Randevu Rezervasyonu',
      primaryButtonLink: '/randevu',
      secondaryButtonText: 'İletişime Geç',
      secondaryButtonLink: '/iletisim',
    },
    services: {
      title: 'Hizmetlerim',
      description: 'Profesyonel terapi hizmetlerim',
    },
    philosophy: {
      title: 'Terapi Süreci Hakkında',
      description: 'Modern ve kişiselleştirilmiş terapi süreci',
      body:
        'Her danışanın eşsiz bir birey olduğuna inanıyor, bu nedenle terapi sürecini tamamen kişiye özel olarak tasarlıyorum. Güvenli ve yargısız bir ortamda, kendi potansiyelinizi keşfetmenize destek oluyorum.',
      buttonText: 'Detaylı Bilgi',
      buttonLink: '/hakkimda',
    },
    cta: {
      badge: 'Dönüşüm Zamanı',
      title: 'Randevu Almaya Hazır mısınız?',
      description: 'Size en uygun terapi yaklaşımını birlikte belirleyelim.',
      buttonText: 'İletişime Geç',
      buttonLink: '/iletisim',
    },
  } satisfies HomeContentSections,
  seo: {
    title: 'Aleyna Didem Aydın — Bahçeşehir Klinik Psikolog | Ergen ve Yetişkin Terapi',
    description:
      'Uzm. Kl. Psk. Aleyna Didem Aydın - Bahçeşehir bölgesinde ergen terapisi, yetişkin terapisi, çift terapisi ve BDT uygulamaları.',
    keywords: [
      'Bahçeşehir',
      'klinik psikolog',
      'psikolog',
      'terapi',
      'ergen terapisi',
      'yetişkin terapisi',
      'çift terapisi',
      'anksiyete',
      'depresyon',
    ],
  } satisfies PageSeo,
};

export const defaultAboutContent = {
  sections: {
    hero: {
      title: 'Uzm. Kl. Psk. Aleyna Didem Aydın',
      subtitle: 'Klinik psikolog ve psikoterapist',
      intro:
        'Bireylerin ruh sağlığı yolculuğunda rehberlik ediyor, herkesin potansiyelini keşfetmesine yardımcı oluyorum.',
    },
    story: {
      title: 'Hikayem',
      paragraphs: [
        'Psikoloji alanındaki yolculuğum, insanların ruh hallerinin ve davranışlarının altındaki derinlikleri anlamaya duyduğum merakla başladı. İstanbul Kültür Üniversitesi Psikoloji Bölümü mezuniyetimin ardından Üsküdar Üniversitesi Klinik Psikoloji yüksek lisansımı tamamladım.',
        'Stajlarımı İstanbul Adalet Sarayı’nda adli psikolog stajyeri ve Dr. Yalçın Güzelhan Kliniği’nde stajyer psikolog olarak gerçekleştirdim. Psikoterapi alanında ilerlemek adına Hakan Türkçapar eğitmenliğinde Bilişsel Davranışçı Terapi eğitimi aldım.',
        'Kişisel gelişim uzmanlığı çatısı altında yaşam koçluğu, NLP ve kuantum eğitimleri aldım. Ayrıca psiko kinezyoloji ve matrix inform eğitimleri ile bütüncül yaklaşımımı geliştirdim.',
        'Halen online ve yüz yüze terapi hizmetlerine devam ediyor, danışanlarıma güvenli ve yapılandırılmış bir terapi alanı sunuyorum.',
      ],
    },
    credentials: {
      title: 'Eğitim ve Deneyim',
      groups: [
        {
          title: 'Eğitim',
          items: [
            {
              title: 'Yüksek Lisans',
              lines: ['Klinik Psikoloji - Üsküdar Üniversitesi'],
            },
            {
              title: 'Lisans',
              lines: ['Psikoloji - İstanbul Kültür Üniversitesi'],
            },
          ],
        },
        {
          title: 'Mesleki Deneyim',
          items: [
            {
              title: 'Echo Psikoloji Enstitüsü',
              lines: ['Klinik Psikolog'],
            },
            {
              title: "Bi'iz Kliniği",
              lines: ['Klinik Psikolog - Online ve Yüz Yüze'],
            },
            {
              title: 'Dr. Yalçın Güzelhan Kliniği',
              lines: ['Stajyer Psikolog'],
            },
            {
              title: 'İstanbul Adalet Sarayı',
              lines: ['Adli Psikolog Stajyeri'],
            },
          ],
        },
        {
          title: 'Sertifikalar ve Eğitimler',
          items: [
            {
              title: 'Bilişsel Davranışçı Terapi',
              lines: ['Eğitmen: Hakan Türkçapar'],
            },
            {
              title: 'Kişisel Gelişim Uzmanlığı',
              lines: ['Eğitmen: Neslihan Kuruoğlu'],
            },
            {
              title: 'Biorezonans Sağlık Hizmetleri',
              lines: ['Psikokinezyoloji ve Matrix Inform', 'Eğitmen: Ramazan Toy'],
            },
          ],
        },
      ],
    },
    approach: {
      title: 'Tedavi Yaklaşımım',
      lead:
        'Her bireyin eşsiz bir hikayesi olduğuna inanarak, modern terapi tekniklerini geleneksel yaklaşımlarla harmanlıyor, sizin için en etkili yolu birlikte keşfediyoruz.',
      intro:
        'Terapötik süreçte bilişsel davranışçı terapi ve hümanistik perspektifi bütüncül olarak kullanarak hem semptomlarla başa çıkmanızı hem de kişisel potansiyelinizi keşfetmenizi destekliyorum.',
      principles: [
        {
          title: 'İş Birliği ve Güven',
          description:
            'Terapi sürecinde eşit ortaklar olarak ilerleyerek güvenli ve empatik bir ortamda çalışırız.',
        },
        {
          title: 'Kişiye Özel Yaklaşım',
          description:
            'Her tedavi planı bireyin ihtiyaçları, yaşam tarzı ve hedefleri doğrultusunda özenle tasarlanır.',
        },
        {
          title: 'Tam Gizlilik',
          description:
            'Paylaştıklarınız tamamen gizli kalır ve kendinizi özgürce ifade edebileceğiniz güvenli bir alan sağlanır.',
        },
        {
          title: 'Sürdürülebilir Gelişim',
          description:
            'Kısa vadeli rahatlamanın yanında uzun vadeli kişisel büyüme ve dayanıklılık inşa etmeye odaklanırım.',
        },
      ],
    },
    specializations: {
      title: 'Uzmanlık Alanlarım',
      items: [
        'Anksiyete Bozuklukları',
        'Depresyon ve Duygudurum Bozuklukları',
        'İlişki ve Çift Terapisi',
        'Ergen Terapisi',
        'Stres ve Tükenmişlik',
        'Kişisel Gelişim ve Koçluk',
      ],
    },
    cta: {
      title: 'Birlikte Çalışmaya Başlayalım',
      description:
        'Ruh sağlığınız için ilk adımı atmaya hazır mısınız? Benimle iletişime geçin ve sizin için en uygun terapi planını oluşturalım.',
      primaryButtonText: 'Randevu Al',
      primaryButtonLink: '/randevu',
      secondaryButtonText: 'İletişime Geç',
      secondaryButtonLink: '/iletisim',
    },
  } satisfies AboutContentSections,
  seo: {
    title: 'Hakkımda — Uzman Klinik Psikolog Aleyna Didem Aydın',
    description:
      'Klinik psikolog Aleyna Didem Aydın’ın eğitimleri, uzmanlık alanları ve terapi yaklaşımı hakkında bilgi alın.',
    keywords: [
      'Aleyna Didem Aydın',
      'klinik psikolog',
      'hakkımda',
      'ergen terapisi',
      'yetişkin terapisi',
      'çift terapisi',
    ],
  } satisfies PageSeo,
};

export const defaultFooterContent = {
  sections: {
    brand: {
      title: 'Uzm. Kl. Psk. Aleyna Didem Aydın',
      description:
        'Ruh sağlığınız için güvenilir ve profesyonel psikolojik destek. Her bireyin eşsiz olduğuna inanıyor, kişiselleştirilmiş terapi yaklaşımları sunuyorum.',
    },
    quickLinks: {
      title: 'Hızlı Linkler',
      items: [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmetler', href: '/hizmetler' },
        { label: 'Blog', href: '/blog' },
        { label: 'Hakkımda', href: '/hakkimda' },
        { label: 'SSS', href: '/sss' },
        { label: 'İletişim', href: '/iletisim' },
      ],
    },
    services: {
      title: 'Hizmetler',
      items: [
        'Bireysel Terapi',
        'Çift Terapisi',
        'Ergen Terapisi',
        'Online Terapi',
        'Kişisel Gelişim',
      ],
    },
    contact: {
      title: 'İletişim',
      instagramLabel: 'Instagram',
    },
    legal: {
      privacyLabel: 'Gizlilik Politikası',
      privacyLink: '/gizlilik',
      termsLabel: 'Kullanım Şartları',
      termsLink: '/kullanim',
      copyrightText: 'Tüm hakları saklıdır.',
    },
  } satisfies FooterContentSections,
  seo: {
    title: 'Footer',
    description: '',
    keywords: [],
  } satisfies PageSeo,
};

export const defaultContactContent = {
  sections: {
    hero: {
      title: 'İletişim',
      subtitle:
        'Sorularınız için bana ulaşabilir, randevu alabilir veya ücretsiz ön görüşme talep edebilirsiniz.',
    },
    form: {
      title: 'Mesaj Gönderin',
      description: 'Size en kısa sürede dönüş yapabilmem için lütfen formu detaylı doldurun.',
      privacyNotice:
        'Kişisel bilgileriniz tamamen gizli tutulacak ve yalnızca size dönüş yapmak için kullanılacaktır.',
      successTitle: 'Mesajınız Alındı!',
      successMessage:
        'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım. Acil durumlar için doğrudan telefon ile ulaşabilirsiniz.',
      resetButtonText: 'Yeni Mesaj Gönder',
      appointmentButtonText: 'Randevu Al',
      submitButtonText: 'Mesaj Gönder',
      submittingButtonText: 'Gönderiliyor...',
    },
    quickActions: {
      title: 'Hızlı İşlemler',
      appointmentTitle: 'Randevu Al',
      appointmentDescription: 'Online randevu sistemi ile kolayca randevu alın',
      callTitle: 'Hemen Ara',
      callDescription: 'Acil durumlarda direkt telefon ile ulaşın',
      whatsappTitle: 'WhatsApp',
      whatsappDescription: 'WhatsApp üzerinden hızlı iletişim kurun',
      faqTitle: 'SSS',
      faqDescription: 'Sık sorulan soruları inceleyin',
    },
  } satisfies ContactContentSections,
  seo: {
    title: 'İletişim ve Randevu — Aleyna Didem Aydın',
    description:
      'Bahçeşehir bölgesinde randevu ve iletişim bilgileri. Klinik psikologla online ve yüz yüze seans randevusu alın.',
    keywords: [
      'iletişim',
      'randevu',
      'Bahçeşehir psikolog',
      'online terapi',
      'yüz yüze terapi',
      'danışmanlık',
    ],
  } satisfies PageSeo,
};

const asRecord = (value: unknown): Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};

const mergeSeo = (value: unknown, fallback: PageSeo): PageSeo => {
  const seo = asRecord(value);
  return {
    title: typeof seo.title === 'string' ? seo.title : fallback.title,
    description: typeof seo.description === 'string' ? seo.description : fallback.description,
    keywords: Array.isArray(seo.keywords)
      ? seo.keywords.map((item) => String(item))
      : fallback.keywords,
  };
};

export const mergeHomeContent = (value?: { sections?: unknown; seo?: unknown } | null) => {
  const sections = asRecord(value?.sections);
  const hero = asRecord(sections.hero);
  const services = asRecord(sections.services);
  const philosophy = asRecord(sections.philosophy);
  const cta = asRecord(sections.cta);

  return {
    sections: {
      hero: {
        ...defaultHomeContent.sections.hero,
        ...hero,
      },
      services: {
        ...defaultHomeContent.sections.services,
        ...services,
      },
      philosophy: {
        ...defaultHomeContent.sections.philosophy,
        ...philosophy,
      },
      cta: {
        ...defaultHomeContent.sections.cta,
        ...cta,
      },
    } satisfies HomeContentSections,
    seo: mergeSeo(value?.seo, defaultHomeContent.seo),
  };
};

export const mergeAboutContent = (value?: { sections?: unknown; seo?: unknown } | null) => {
  const sections = asRecord(value?.sections);
  const hero = asRecord(sections.hero);
  const story = asRecord(sections.story);
  const credentials = asRecord(sections.credentials);
  const approach = asRecord(sections.approach);
  const specializations = asRecord(sections.specializations);
  const cta = asRecord(sections.cta);

  return {
    sections: {
      hero: {
        ...defaultAboutContent.sections.hero,
        ...hero,
      },
      story: {
        title: typeof story.title === 'string' ? story.title : defaultAboutContent.sections.story.title,
        paragraphs: Array.isArray(story.paragraphs)
          ? story.paragraphs.map((item) => String(item))
          : defaultAboutContent.sections.story.paragraphs,
      },
      credentials: {
        title:
          typeof credentials.title === 'string'
            ? credentials.title
            : defaultAboutContent.sections.credentials.title,
        groups: Array.isArray(credentials.groups)
          ? (credentials.groups as AboutCredentialGroup[])
          : defaultAboutContent.sections.credentials.groups,
      },
      approach: {
        title:
          typeof approach.title === 'string'
            ? approach.title
            : defaultAboutContent.sections.approach.title,
        lead:
          typeof approach.lead === 'string'
            ? approach.lead
            : defaultAboutContent.sections.approach.lead,
        intro:
          typeof approach.intro === 'string'
            ? approach.intro
            : defaultAboutContent.sections.approach.intro,
        principles: Array.isArray(approach.principles)
          ? (approach.principles as AboutPrinciple[])
          : defaultAboutContent.sections.approach.principles,
      },
      specializations: {
        title:
          typeof specializations.title === 'string'
            ? specializations.title
            : defaultAboutContent.sections.specializations.title,
        items: Array.isArray(specializations.items)
          ? specializations.items.map((item) => String(item))
          : defaultAboutContent.sections.specializations.items,
      },
      cta: {
        ...defaultAboutContent.sections.cta,
        ...cta,
      },
    } satisfies AboutContentSections,
    seo: mergeSeo(value?.seo, defaultAboutContent.seo),
  };
};

export const mergeFooterContent = (value?: { sections?: unknown; seo?: unknown } | null) => {
  const sections = asRecord(value?.sections);
  const brand = asRecord(sections.brand);
  const quickLinks = asRecord(sections.quickLinks);
  const services = asRecord(sections.services);
  const contact = asRecord(sections.contact);
  const legal = asRecord(sections.legal);

  return {
    sections: {
      brand: {
        ...defaultFooterContent.sections.brand,
        ...brand,
      },
      quickLinks: {
        title:
          typeof quickLinks.title === 'string'
            ? quickLinks.title
            : defaultFooterContent.sections.quickLinks.title,
        items: Array.isArray(quickLinks.items)
          ? (quickLinks.items as FooterLinkItem[])
          : defaultFooterContent.sections.quickLinks.items,
      },
      services: {
        title:
          typeof services.title === 'string'
            ? services.title
            : defaultFooterContent.sections.services.title,
        items: Array.isArray(services.items)
          ? services.items.map((item) => String(item))
          : defaultFooterContent.sections.services.items,
      },
      contact: {
        ...defaultFooterContent.sections.contact,
        ...contact,
      },
      legal: {
        ...defaultFooterContent.sections.legal,
        ...legal,
      },
    } satisfies FooterContentSections,
    seo: mergeSeo(value?.seo, defaultFooterContent.seo),
  };
};

export const mergeContactContent = (value?: { sections?: unknown; seo?: unknown } | null) => {
  const sections = asRecord(value?.sections);
  const hero = asRecord(sections.hero);
  const form = asRecord(sections.form);
  const quickActions = asRecord(sections.quickActions);

  return {
    sections: {
      hero: {
        ...defaultContactContent.sections.hero,
        ...hero,
      },
      form: {
        ...defaultContactContent.sections.form,
        ...form,
      },
      quickActions: {
        ...defaultContactContent.sections.quickActions,
        ...quickActions,
      },
    } satisfies ContactContentSections,
    seo: mergeSeo(value?.seo, defaultContactContent.seo),
  };
};
