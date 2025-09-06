import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeDesign10.css';

const HomeDesign10: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [followersCount, setFollowersCount] = useState(12547);

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleFollow = () => {
    setFollowersCount(prev => prev + 1);
  };

  const posts = [
    {
      id: 1,
      type: 'story',
      content: 'Bugün bir danışanımla harika bir ilerleme kaydettik! 💪 Anksiyete ile baş etme teknikleri gerçekten işe yarıyor.',
      timestamp: '2 saat önce',
      likes: 234,
      comments: 18,
      shares: 12,
      hashtags: ['#anksiyete', '#terapi', '#iyileşme']
    },
    {
      id: 2,
      type: 'tip',
      content: 'Stresli anlar için 3-2-1 tekniği: 3 şey gör, 2 şey işit, 1 şey dokun. Bu basit egzersiz sizi şimdiki ana getirir 🧘‍♀️',
      timestamp: '1 gün önce',
      likes: 456,
      comments: 32,
      shares: 28,
      hashtags: ['#stres', '#mindfulness', '#ipuçları']
    },
    {
      id: 3,
      type: 'success',
      content: 'Müthiş haber! Bir danışanım 6 aylık terapi sürecini tamamladı ve artık panik atak yaşamıyor 🎉 Gurur verici!',
      timestamp: '3 gün önce',
      likes: 789,
      comments: 67,
      shares: 45,
      hashtags: ['#başarı', '#panikatak', '#iyileşme']
    }
  ];

  return (
    <div className="home-design10">
      {/* Social Profile Header */}
      <section className="social-header">
        <div className="container">
          <div className="profile-card">
            <div className="profile-cover">
              <div className="cover-gradient"></div>
            </div>
            
            <div className="profile-main">
              <div className="profile-avatar">
                <div className="avatar-ring">
                  <div className="avatar-image"></div>
                  <div className="status-indicator online"></div>
                </div>
                <button className="story-add">+</button>
              </div>
              
              <div className="profile-info">
                <div className="profile-names">
                  <h1 className="profile-name">Dr. Aleyna Didem Aydın</h1>
                  <div className="profile-verified">✓</div>
                  <span className="profile-username">@draleynaaydın</span>
                </div>
                
                <div className="profile-bio">
                  <p>🧠 Uzman Klinik Psikolog | 💜 EMDR Sertifikalı</p>
                  <p>✨ 500+ başarılı terapi | 📍 İstanbul</p>
                  <p>💌 Hayatınızı değiştirecek ilk adımı atın!</p>
                </div>
                
                <div className="profile-stats">
                  <div className="stat-social">
                    <span className="stat-social-number">{followersCount.toLocaleString()}</span>
                    <span className="stat-social-label">Takipçi</span>
                  </div>
                  <div className="stat-social">
                    <span className="stat-social-number">2.1k</span>
                    <span className="stat-social-label">Takip</span>
                  </div>
                  <div className="stat-social">
                    <span className="stat-social-number">156</span>
                    <span className="stat-social-label">Post</span>
                  </div>
                </div>
                
                <div className="profile-actions">
                  <button className="btn-social follow" onClick={handleFollow}>
                    <span className="btn-icon">+</span>
                    <span>Takip Et</span>
                  </button>
                  <Link to="/randevu" className="btn-social message">
                    <span className="btn-icon">💬</span>
                    <span>Randevu</span>
                  </Link>
                  <Link to="/iletisim" className="btn-social more">
                    <span className="btn-icon">📧</span>
                    <span>İletişim</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="stories-section">
        <div className="container">
          <div className="stories-carousel">
            <div className="story-item active">
              <div className="story-avatar">
                <div className="story-image">🌟</div>
              </div>
              <span className="story-label">Highlights</span>
            </div>
            
            <div className="story-item">
              <div className="story-avatar">
                <div className="story-image">🧠</div>
              </div>
              <span className="story-label">Terapi Tips</span>
            </div>
            
            <div className="story-item">
              <div className="story-avatar">
                <div className="story-image">💪</div>
              </div>
              <span className="story-label">Başarılar</span>
            </div>
            
            <div className="story-item">
              <div className="story-avatar">
                <div className="story-image">❤️</div>
              </div>
              <span className="story-label">Self Care</span>
            </div>
            
            <div className="story-item">
              <div className="story-avatar">
                <div className="story-image">📚</div>
              </div>
              <span className="story-label">Kitaplar</span>
            </div>
            
            <div className="story-item">
              <div className="story-avatar">
                <div className="story-image">🎯</div>
              </div>
              <span className="story-label">Hedefler</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="social-feed">
        <div className="container">
          <div className="feed-layout">
            <div className="main-feed">
              {posts.map((post) => (
                <article key={post.id} className={`post-card ${post.type}`}>
                  <div className="post-header">
                    <div className="post-author">
                      <div className="author-avatar">
                        <div className="author-image"></div>
                      </div>
                      <div className="author-info">
                        <span className="author-name">Dr. Aleyna Didem Aydın</span>
                        <div className="post-meta">
                          <span className="post-time">{post.timestamp}</span>
                          <span className="post-visibility">🌍</span>
                        </div>
                      </div>
                    </div>
                    <button className="post-more">⋯</button>
                  </div>
                  
                  <div className="post-content">
                    <p>{post.content}</p>
                    <div className="post-hashtags">
                      {post.hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="post-engagement">
                    <div className="engagement-stats">
                      <span>👍 {post.likes}</span>
                      <span>{post.comments} yorum</span>
                      <span>{post.shares} paylaşım</span>
                    </div>
                    
                    <div className="engagement-actions">
                      <button 
                        className={`action-btn like ${likedPosts.includes(post.id) ? 'liked' : ''}`}
                        onClick={() => handleLike(post.id)}
                      >
                        <span className="action-icon">👍</span>
                        <span>Beğen</span>
                      </button>
                      <button className="action-btn comment">
                        <span className="action-icon">💬</span>
                        <span>Yorum</span>
                      </button>
                      <button className="action-btn share">
                        <span className="action-icon">📤</span>
                        <span>Paylaş</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="post-comments">
                    <div className="comment">
                      <div className="comment-avatar">M</div>
                      <div className="comment-content">
                        <span className="comment-author">mehmet_k</span>
                        <span className="comment-text">Çok faydalı bilgiler, teşekkürler!</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              
              {/* Services Post */}
              <article className="post-card services-post">
                <div className="post-header">
                  <div className="post-author">
                    <div className="author-avatar">
                      <div className="author-image"></div>
                    </div>
                    <div className="author-info">
                      <span className="author-name">Dr. Aleyna Didem Aydın</span>
                      <div className="post-meta">
                        <span className="post-time">1 hafta önce</span>
                        <span className="sponsored-badge">Sponsorlu</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="services-showcase">
                  <h3>🌟 Hizmetlerim</h3>
                  <div className="services-grid-social">
                    <div className="service-social-card">
                      <div className="service-emoji">🧠</div>
                      <h4>Bireysel Terapi</h4>
                      <p>₺800/seans</p>
                    </div>
                    <div className="service-social-card">
                      <div className="service-emoji">💑</div>
                      <h4>Çift Terapisi</h4>
                      <p>₺1200/seans</p>
                    </div>
                    <div className="service-social-card">
                      <div className="service-emoji">💻</div>
                      <h4>Online Terapi</h4>
                      <p>₺700/seans</p>
                    </div>
                    <div className="service-social-card">
                      <div className="service-emoji">⚡</div>
                      <h4>Acil Destek</h4>
                      <p>₺400/seans</p>
                    </div>
                  </div>
                  
                  <Link to="/randevu" className="services-cta">
                    📅 Hemen Randevu Al
                  </Link>
                </div>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="feed-sidebar">
              <div className="sidebar-widget">
                <h3>📱 Hızlı Erişim</h3>
                <div className="quick-links">
                  <Link to="/randevu" className="quick-link">
                    <span className="quick-icon">📅</span>
                    <span>Randevu Al</span>
                  </Link>
                  <Link to="/blog" className="quick-link">
                    <span className="quick-icon">📝</span>
                    <span>Blog Yazıları</span>
                  </Link>
                  <Link to="/sss" className="quick-link">
                    <span className="quick-icon">❓</span>
                    <span>Sık Sorulan</span>
                  </Link>
                  <a href="tel:+905551234567" className="quick-link">
                    <span className="quick-icon">📞</span>
                    <span>Hemen Ara</span>
                  </a>
                </div>
              </div>
              
              <div className="sidebar-widget">
                <h3>🏆 Başarı İstatistikleri</h3>
                <div className="success-stats">
                  <div className="success-stat">
                    <div className="success-number">500+</div>
                    <div className="success-label">Başarılı Terapi</div>
                  </div>
                  <div className="success-stat">
                    <div className="success-number">%98</div>
                    <div className="success-label">Memnuniyet Oranı</div>
                  </div>
                  <div className="success-stat">
                    <div className="success-number">10+</div>
                    <div className="success-label">Yıl Deneyim</div>
                  </div>
                </div>
              </div>
              
              <div className="sidebar-widget">
                <h3>💡 Günün Tavsiyesi</h3>
                <div className="daily-tip">
                  <div className="tip-content">
                    "Her gün kendinize 'Bugün ne hissediyorum?' sorusunu sorun. 
                    Duygularınızı tanımak iyileşmenin ilk adımıdır."
                  </div>
                  <div className="tip-author">- Dr. Aleyna</div>
                </div>
              </div>
              
              <div className="sidebar-widget">
                <h3>📚 Önerilen Kaynaklar</h3>
                <div className="recommended-resources">
                  <div className="resource-item">
                    <span className="resource-icon">📖</span>
                    <span>Anksiyete ile Başa Çıkma</span>
                  </div>
                  <div className="resource-item">
                    <span className="resource-icon">🎧</span>
                    <span>Meditasyon Rehberi</span>
                  </div>
                  <div className="resource-item">
                    <span className="resource-icon">📱</span>
                    <span>Ruh Hali Takip Uygulaması</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="social-cta">
        <div className="container">
          <div className="cta-social-card">
            <div className="cta-social-content">
              <div className="cta-emoji">🚀</div>
              <h2>Hayalinizdeki yaşama başlamaya hazır mısınız?</h2>
              <p>
                Binlerce kişi ile birlikte bu dönüşüm yolculuğuna katılın! 
                İlk adımı atmak için sadece bir tık uzaktasınız.
              </p>
              
              <div className="cta-social-actions">
                <Link to="/randevu" className="btn-social cta-primary">
                  <span className="btn-icon">✨</span>
                  <span>Dönüşümüme Başla</span>
                </Link>
                <button 
                  className="btn-social cta-secondary"
                  onClick={handleFollow}
                >
                  <span className="btn-icon">👥</span>
                  <span>Takip Et</span>
                </button>
              </div>
              
              <div className="social-proof">
                <div className="proof-avatars">
                  <div className="proof-avatar">M</div>
                  <div className="proof-avatar">A</div>
                  <div className="proof-avatar">S</div>
                  <div className="proof-avatar">+</div>
                </div>
                <span className="proof-text">
                  <strong>12,547</strong> kişi Dr. Aleyna'yı takip ediyor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesign10;