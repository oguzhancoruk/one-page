import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, getBlogPostsByCategory } from '../data/mockBlogData';
import './Blog.css';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = getBlogPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog">
      <div className="container">
        {/* Hero Section */}
        <section className="blog-hero">
          <h1 className="gradient-text">Blog</h1>
          <p className="hero-subtitle">
            Ruh sağlığı, kişisel gelişim ve yaşam kalitesi hakkında yazılarım. 
            Size fayda sağlayacak pratik öneriler ve uzman görüşleri.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="blog-controls">
          <div className="search-container">
            <div className="search-input">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="featured-post">
            <div className="featured-content">
              <div className="featured-image">
                <div className="featured-image-placeholder">
                  <div className="image-overlay"></div>
                </div>
                <span className="featured-badge">Öne Çıkan</span>
              </div>
              <div className="featured-text">
                <div className="post-meta">
                  <span className="post-category">{filteredPosts[0].category}</span>
                  <span className="post-date">{formatDate(filteredPosts[0].date)}</span>
                  <span className="read-time">{filteredPosts[0].readTime} dk okuma</span>
                </div>
                <h2>{filteredPosts[0].title}</h2>
                <p>{filteredPosts[0].excerpt}</p>
                <div className="post-tags">
                  {filteredPosts[0].tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${filteredPosts[0].id}`} className="btn btn-primary">
                  Yazıyı Oku
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="blog-posts">
          {filteredPosts.length === 0 ? (
            <div className="no-results">
              <h3>Sonuç bulunamadı</h3>
              <p>Aradığınız kriterlere uygun blog yazısı bulunamadı. Farklı arama terimleri deneyebilirsiniz.</p>
            </div>
          ) : (
            <div className="posts-grid">
              {filteredPosts.slice(1).map(post => (
                <article key={post.id} className="blog-card card">
                  <div className="blog-card-image">
                    <div className="blog-image-placeholder"></div>
                    <div className="card-overlay">
                      <span className="card-category">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="blog-card-content">
                    <div className="post-meta">
                      <span className="post-date">{formatDate(post.date)}</span>
                      <span className="read-time">{post.readTime} dk</span>
                    </div>
                    
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    
                    <div className="post-tags">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                    
                    <div className="card-footer">
                      <span className="author">Dr. Aleyna Didem Aydın</span>
                      <Link to={`/blog/${post.id}`} className="read-more">
                        Devamını Oku →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="newsletter-cta section bg-light-purple">
          <div className="newsletter-content text-center">
            <h2>Yeni Yazılardan Haberdar Olun</h2>
            <p>
              Blog yazılarımı ve ruh sağlığı ile ilgili güncel içerikleri 
              e-posta adresinize göndermemi ister misiniz?
            </p>
            <div className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="newsletter-input"
                />
                <button className="btn btn-primary">Abone Ol</button>
              </div>
              <p className="newsletter-note">
                * Spam göndermem, istediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Archive CTA */}
        <section className="archive-cta section">
          <div className="archive-content text-center">
            <h2>Daha Fazla İçerik mi Arıyorsunuz?</h2>
            <p>
              Benimle kişisel gelişiminiz için çalışmak veya sorularınızı 
              doğrudan sormak isterseniz randevu alabilirsiniz.
            </p>
            <div className="cta-buttons">
              <Link to="/randevu" className="btn btn-primary">
                Randevu Al
              </Link>
              <Link to="/iletisim" className="btn btn-secondary">
                İletişime Geç
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;