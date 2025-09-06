export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image?: string;
  tags: string[];
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'anksiyete-basa-cikma',
    title: 'Anksiyete ile Başa Çıkma Yöntemleri',
    excerpt: 'Günlük yaşamda anksiyete ile başa çıkmak için pratik stratejiler ve öneriler.',
    content: `
Anksiyete, modern yaşamın kaçınılmaz bir parçası haline geldi. Ancak doğru yaklaşımlarla anksiyeteyi yönetmek ve hayat kalitenizi artırmak mümkün.

## Anksiyete Nedir?

Anksiyete, gelecekteki belirsizlikler karşısında yaşanan endişe, korku ve gerginlik halidir. Fizyolojik ve psikolojik belirtilerle kendini gösterir.

### Anksiyetenin Belirtileri:
- Kalp çarpıntısı
- Nefes darlığı
- Kas gerginliği
- Uyku problemleri
- Konsantrasyon güçlüğü

## Başa Çıkma Yöntemleri

### 1. Nefes Teknikleri
Derin nefes alın, 4 saniye tutun, 6 saniyede verin. Bu tekniği günde birkaç kez uygulayın.

### 2. Mindfulness Meditasyonu
An'da kalma pratiği yapın. 10 dakikalık günlük meditasyon bile büyük fark yaratır.

### 3. Fiziksel Aktivite
Düzenli egzersiz endorfin salınımını artırır ve anksiyeteyi azaltır.

### 4. Düşünce Yapılandırması
Olumsuz düşünceleri sorgulayın ve gerçekçi alternatifler geliştirin.

## Profesyonel Yardım

Eğer anksiyete günlük yaşamınızı ciddi şekilde etkiliyorsa, profesyonel destek almanız önemlidir. Bilişsel davranışçı terapi anksiyete bozuklukları için en etkili tedavi yöntemlerinden biridir.

Unutmayın: Anksiyete normal bir duygu, ancak kontrolden çıktığında yardım almalısınız.
    `,
    author: 'Dr. Aleyna Didem Aydın',
    date: '2024-09-15',
    category: 'Anksiyete',
    readTime: 5,
    tags: ['anksiyete', 'başa-çıkma', 'meditasyon', 'nefes-teknikleri']
  },
  {
    id: 'saglikli-iletisim',
    title: 'Sağlıklı İlişkiler İçin İletişim',
    excerpt: 'Romantik ilişkilerde etkili iletişim kurmanın temel prensipleri.',
    content: `
Sağlıklı ilişkilerin temeli etkili iletişimdir. Partnerinizle kurduğunuz iletişim kalitesi, ilişkinizin geleceğini belirler.

## İletişimin Altın Kuralları

### 1. Aktif Dinleme
- Partnerinizi kesmeyin
- Göz teması kurun
- Empati gösterin
- Anlayışla yaklaşın

### 2. "Ben" Dili Kullanın
"Sen hep..." yerine "Ben hissediyorum..." şeklinde ifadeler kullanın.

### 3. Zamanlamanın Önemi
Önemli konuları yorgun veya stresli olduğunuzda konuşmayın.

## Çatışma Yönetimi

### Sağlıklı Çatışma İpuçları:
- Soruna odaklanın, kişiyi suçlamayın
- Geçmişi karıştırmayın
- Çözüm odaklı düşünün
- Ara vermeyi bilin

### Kaçınılması Gerekenler:
- Aşağılama ve hakaret
- Sessizlik cezası
- Karşılaştırmalar
- Tehditle konuşma

## İletişimi Güçlendirme Yolları

1. **Günlük Check-in**: Her gün 10 dakika sadece konuşun
2. **Takdir Etme**: Partnerinizi takdir ettiğinizi belirtin
3. **Fiziksel Yakınlık**: Dokunma dili önemlidir
4. **Ortak Aktiviteler**: Birlikte zaman geçirin

## Sonuç

İyi iletişim öğrenilebilir bir beceridir. Çift terapisi, iletişim becerilerinizi geliştirmenin en etkili yollarından biridir.
    `,
    author: 'Dr. Aleyna Didem Aydın',
    date: '2024-09-10',
    category: 'İlişkiler',
    readTime: 6,
    tags: ['iletişim', 'ilişkiler', 'çift-terapisi', 'çatışma-yönetimi']
  },
  {
    id: 'stres-yonetimi',
    title: 'Stres Yönetimi ve Mindfulness',
    excerpt: 'Modern yaşamın stresini yönetmek için mindfulness teknikleri.',
    content: `
Stres, günümüzde neredeyse herkesin yaşadığı bir deneyim. Ancak stresle savaşmak yerine, onu yönetmeyi öğrenmek daha etkilidir.

## Stres ve Beyin

Stres karşısında beynimiz "savaş ya da kaç" moduna girer. Bu doğal tepki kısa vadede faydalı, uzun vadede zararlıdır.

### Kronik Stresin Etkileri:
- Bağışıklık sistemi zayıflaması
- Uyku bozuklukları
- Dikkat dağınıklığı
- Depresyon ve anksiyete riski

## Mindfulness Nedir?

Mindfulness (farkındalık), an'da kalma pratiğidir. Geçmişin pişmanlığı ya da geleceğin kaygısı olmadan şimdi'de olma halidir.

### Temel Mindfulness Teknikleri:

#### 1. Nefes Farkındalığı
- Rahat oturun
- Nefes alış verişinizi gözlemleyin
- Aklınız dağıldığında nazikçe nefse dönün

#### 2. Vücut Tarama
- Uzanın ve gözlerinizi kapatın
- Ayaklardan başlayarak vücudunuzu tarayın
- Her bölgede hissettiklerinizi fark edin

#### 3. Mindful Yürüyüş
- Yavaş yürüyün
- Adımlarınızı hissedin
- Çevrenizi fark edin

## Günlük Stres Yönetimi

### Sabah Rutini:
- 10 dakika meditasyon
- Günün hedeflerini belirleyin
- Minnettar olduğunuz 3 şeyi yazın

### Gün İçinde:
- Derin nefes alma araları verin
- Kısa mindfulness molaları
- Pozitif öz konuşma

### Akşam Rutini:
- Günü değerlendirin
- Gevşeme egzersizleri
- Teknolojisiz zaman

## Profesyonel Destek

Eğer stres yaşamınızı kontrol ediyorsa, terapi almayı düşünün. EMDR, CBT gibi yaklaşımlar stres yönetiminde çok etkilidir.

Unutmayın: Mükemmel olma baskısından kurtulun, ilerleme önemlidir.
    `,
    author: 'Dr. Aleyna Didem Aydın',
    date: '2024-09-05',
    category: 'Stres Yönetimi',
    readTime: 7,
    tags: ['stres', 'mindfulness', 'meditasyon', 'gevşeme']
  },
  {
    id: 'depresyonu-anlamak',
    title: 'Depresyonu Anlamak: Belirtiler ve Çözümler',
    excerpt: 'Depresyon hakkında bilinmesi gerekenler ve iyileşme süreci.',
    content: `
Depresyon, sadece üzüntü değil, kişinin yaşam kalitesini ciddi şekilde etkileyen bir duygusal bozukluktur.

## Depresyon vs Üzüntü

Normal üzüntü geçicidir ve bir nedeni vardır. Depresyon ise:
- 2 haftadan uzun sürer
- Günlük aktiviteleri etkiler
- Kendini değersiz hissetme
- Enerji kaybı
- Uyku ve iştah değişiklikleri

## Depresyonun Türleri

### Majör Depresyon
En yaygın türüdür. Belirtiler şiddetli ve günlük yaşamı ciddi etkiler.

### Distimik Bozukluk
Daha hafif ama uzun süren depresyon türüdür.

### Mevsimsel Depresyon
Genellikle kış aylarında ortaya çıkar.

## Depresyonun Nedenleri

### Biyolojik Faktörler:
- Genetik yatkınlık
- Beyin kimyası değişiklikleri
- Hormonal dengesizlikler

### Psikolojik Faktörler:
- Travmatik yaşantılar
- Sürekli stres
- Olumsuz düşünce kalıpları

### Sosyal Faktörler:
- İzolasyon
- Kayıplar
- İlişki sorunları

## İyileşme Süreci

### Profesyonel Tedavi:
1. **Psikoterapi**: CBT, psikanaliz, hümanistik yaklaşımlar
2. **İlaç Tedavisi**: Gerektiğinde antidepresan kullanımı
3. **Kombine Tedavi**: Terapi + ilaç kombinasyonu

### Kendi Kendine Yardım:
- Düzenli egzersiz
- Sağlıklı beslenme
- Sosyal destek
- Hobi ve aktiviteler
- Uyku düzeni

## Destek Alma

Depresyon utanılacak bir durum değildir. Profesyonel yardım almak cesaret gerektirir.

### Ne Zaman Yardım Almalı:
- Belirtiler 2 haftadan uzun sürüyor
- Günlük işlevsellik bozuldu
- İntihar düşünceleri var
- Alkol/madde kullanımı arttı

## Yakınlarınıza Destek

Depresyondaki birine nasıl yardım edilir:
- Dinleyin, yargılamayın
- Profesyonel yardım önerin
- Sabırlı olun
- Umut verin

Depresyon tedavi edilebilir bir durumdur. Doğru yaklaşımla iyileşmek mümkündür.
    `,
    author: 'Dr. Aleyna Didem Aydın',
    date: '2024-08-28',
    category: 'Depresyon',
    readTime: 8,
    tags: ['depresyon', 'ruh-sağlığı', 'tedavi', 'iyileşme']
  },
  {
    id: 'travma-iyilesmesi',
    title: 'Travma ve İyileşme Süreci',
    excerpt: 'Travmatik yaşantıların ardından iyileşme için neler yapılabilir.',
    content: `
Travma, kişinin baş etme kapasitesini aşan, yoğun stres yaratan yaşantılardır. İyileşme mümkün, ancak doğru yaklaşım gerektirir.

## Travma Türleri

### Akut Travma:
- Tek seferlik olay
- Kaza, doğal afet, saldırı
- Ani ve beklenmedik

### Karmaşık Travma:
- Uzun süreli maruz kalma
- İstismar, ihmal
- Genellikle çocuklukta

### Nesiller Arası Travma:
- Ailede aktarılan travmalar
- Kültürel ve tarihsel travmalar

## Travmanın Belirtileri

### Fiziksel:
- Uyku bozuklukları
- İştah değişiklikleri
- Kronik ağrılar
- Yorgunluk

### Duygusal:
- Aşırı uyarılmışlık
- Duygusal uyuşukluk
- Öfke patlamaları
- Suçluluk duygusu

### Davranışsal:
- Kaçınma
- İzolasyon
- Riskli davranışlar
- Konsantrasyon problemleri

## PTSD (Travma Sonrası Stres Bozukluğu)

### Temel Belirtiler:
1. **Yeniden Yaşama**: Anılar, kabuslar, flashback'ler
2. **Kaçınma**: Travmayı hatırlatan durumlardan kaçınma
3. **Olumsuz Düşünceler**: Kendini ve dünyayı olumsuz algılama
4. **Uyarılmışlık**: Aşırı tepkisellik, uykusuzluk

## İyileşme Süreci

### Güvenlik Duygusu:
İlk adım güvenli bir ortam oluşturmaktır.

### Stabilizasyon:
- Duygusal düzenleme becerileri
- Başa çıkma stratejileri
- Sosyal destek sistemi

### Travmayı İşleme:
- EMDR terapisi
- Travma odaklı CBT
- Somatik yaklaşımlar

### Entegrasyon:
- Yaşantıyı anlam verme
- Güçlü yanları keşfetme
- Gelecek planları yapma

## EMDR Terapisi

Eye Movement Desensitization and Reprocessing (EMDR), travma tedavisinde altın standart yaklaşımlardan biridir.

### EMDR Nasıl Çalışır:
1. Hazırlık: Güvenli ortam oluşturma
2. Değerlendirme: Travmatik anıyı belirleme
3. Duyarsızlaştırma: Göz hareketleri ile işleme
4. Kurma: Pozitif inanç geliştirme
5. Tarama: Vücuttaki duyumları kontrol

## Kendi Kendine Yardım

### Günlük Pratikler:
- Nefes egzersizleri
- Grounding teknikleri
- Güvenli alan vizualizasyonu
- Günlük tutma

### Yaşam Tarzı:
- Düzenli egzersiz
- Sağlıklı beslenme
- Yeterli uyku
- Sosyal bağlantılar

## Destek Sistemi

### Profesyonel Yardım:
- Travma uzmanı terapist
- Psikiyatrist (gerektiğinde)
- Destek grupları

### Sosyal Destek:
- Güvenilir arkadaşlar
- Aile üyeleri
- Topluluk bağlantıları

## Travma Sonrası Büyüme

Travma sonrası sadece iyileşme değil, büyüme de mümkündür:
- Daha derin ilişkiler
- Yaşamı takdir etme
- İç güç keşfetme
- Yeni fırsatlar görme

Travmadan iyileşmek doğrusal bir süreç değildir. Sabır ve profesyonel destek ile mümkündür.
    `,
    author: 'Dr. Aleyna Didem Aydın',
    date: '2024-08-20',
    category: 'Travma',
    readTime: 10,
    tags: ['travma', 'PTSD', 'EMDR', 'iyileşme']
  },
  {
    id: 'ozguven-gelistirme',
    title: 'Özgüven Geliştirme Rehberi',
    excerpt: 'Sağlıklı özgüven nasıl geliştirilebilir? Pratik öneriler.',
    content: `
Özgüven, kişinin kendine olan inancı ve yeteneklerine güvenidir. Sağlıklı özgüven geliştirilebilir.

## Özgüven vs Kibir

### Sağlıklı Özgüven:
- Gerçekçi öz değerlendirme
- Hataları kabul etme
- Başkalarını destekleme
- Sürekli öğrenme

### Kibir:
- Üstünlük kompleksi
- Eleştiriyi reddetme
- Başkalarını küçümseme
- Mükemmellik beklentisi

## Özgüven Eksikliğinin Belirtileri

- Sürekli onay arama
- Eleştiriye aşırı duyarlılık
- Yeni şeyleri denemekten kaçınma
- Olumsuz iç ses
- Başkalarıyla sürekli karşılaştırma

## Özgüven Geliştirme Stratejileri

### 1. Öz Farkındalık
- Güçlü yanlarınızı belirleyin
- Değerlerinizi netleştirin
- Başarılarınızı kaydedin

### 2. Hedefe Odaklanma
- Küçük, ulaşılabilir hedefler
- İlerlemeyi kutlama
- Esnek planlama

### 3. Konfor Alanından Çıkma
- Günde bir yeni şey deneyin
- Korklarınızla yüzleşin
- Riskli ama güvenli adımlar atın

### 4. İç Sesinizi Değiştirin
Olumsuz: "Bunu yapamam"
Pozitif: "Bunu öğrenebilirim"

### 5. Vücut Dili
- Dik duruş
- Göz teması
- Açık jest ve mimikler
- Kendinden emin yürüyüş

## Sosyal Özgüven

### İletişim Becerileri:
- Aktif dinleme
- Net ifade etme
- Sınır koyma
- "Hayır" diyebilme

### İlişkilerde Özgüven:
- Kendi ihtiyaçlarını ifade etme
- Sağlıklı sınırlar
- Çatışmayı yönetme
- Destek isteme

## Mesleki Özgüven

### İş Hayatında:
- Fikirlerinizi paylaşın
- Geri bildirim isteyin
- Yeni projelere gönüllü olun
- Mentorluk arayın

### Sunum ve Konuşma:
- Hazırlanmaya zaman ayırın
- Vücut dilinize dikkat edin
- Nefes kontrolü yapın
- Hata yapmanın normal olduğunu kabul edin

## Özgüven Engelleyiciler

### Mükemmeliyetçilik:
"İyi" yi "mükemmel" in düşmanı yapmayın

### Karşılaştırma:
Başkalarıyla değil, eski halinizle karşılaştırın

### Geçmiş Hatalar:
Geçmişten ders alın, onunla tanımlanmayın

### Olumsuz Çevre:
Sizi destekleyen insanlarla çevrili olun

## Özgüven Egzersizleri

### Günlük Pratikler:
1. **Başarı Günlüğü**: Her gün 3 başarınızı yazın
2. **Affirmasyonlar**: Pozitif cümleler kurun
3. **Vücut Pozisyonu**: Güçlü duruşlar alın
4. **Konfor Alanı**: Günde bir küçük risk alın

### Haftalık Aktiviteler:
- Yeni bir beceri öğrenin
- Birini övün
- Bir sosyal aktiviteye katılın
- İlerlemenizi değerlendirin

## Profesyonel Destek

Özgüven problemi derinse:
- Bireysel terapi
- Grup terapisi
- Kişisel gelişim koçluğu
- Özgüven kursları

## Sonuç

Özgüven, günlük pratiklerle geliştirilebilir. Kendinize karşı sabırlı olun ve küçük adımlar atın.

Unutmayın: Herkesin özgüven ile mücadele ettiği anlar vardır. Önemli olan vazgeçmemektir.
    `,
    author: 'Dr. Aleyna Didem Aydın',
    date: '2024-08-15',
    category: 'Kişisel Gelişim',
    readTime: 9,
    tags: ['özgüven', 'kişisel-gelişim', 'öz-farkındalık', 'motivasyon']
  }
];

export const categories = ['Tümü', 'Anksiyete', 'İlişkiler', 'Stres Yönetimi', 'Depresyon', 'Travma', 'Kişisel Gelişim'];

export function getBlogPostById(id: string): BlogPost | undefined {
  return mockBlogPosts.find(post => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'Tümü') return mockBlogPosts;
  return mockBlogPosts.filter(post => post.category === category);
}