import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { apiService, resolveAssetUrl, type BlogPostRecord } from '../services/apiService';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: number;
  tags: string[];
  author: string;
}

const mapPost = (post: BlogPostRecord): BlogPostData => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt || post.content?.substring(0, 150) || '',
  content: post.content,
  coverImage: post.coverImage || '',
  category: post.category || 'Genel',
  date: post.publishedAt || post.createdAt,
  readTime: Number(post.readTime || 5),
  tags: post.tags || [],
  author: post.authorName || 'Dr. Aleyna Didem Aydın',
});

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        setError('');
        const posts = await apiService.getBlogPosts();
        setBlogPosts(posts.map(mapPost));
      } catch (err) {
        console.error('Blog yazıları yüklenemedi:', err);
        setBlogPosts([]);
        setError('Blog yazıları yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === 'Tümü' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  const availableCategories = [
    'Tümü',
    ...Array.from(new Set(blogPosts.map((post) => post.category).filter(Boolean))),
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="blog">
      <div className="container">
        <section className="blog-hero">
          <h2 className="gradient-text">Blog</h2>
          <p className="hero-subtitle">
            Ruh sağlığı, kişisel gelişim ve yaşam kalitesi hakkında yazılarım.
            Size fayda sağlayacak pratik öneriler ve uzman görüşleri.
          </p>
        </section>

        {error && (
          <div
            className="info-alert"
            style={{
              padding: '12px',
              marginBottom: '16px',
              backgroundColor: '#fff4e5',
              border: '1px solid #ffd8a8',
              borderRadius: '4px',
              color: '#9c6500',
            }}
          >
            ℹ️ {error}
          </div>
        )}

        {loading ? (
          <div className="loading" style={{ textAlign: 'center', padding: '40px 0' }}>
            <p>Blog yazıları yükleniyor...</p>
          </div>
        ) : (
          <>
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
                {availableCategories.map((category) => (
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

            {filteredPosts.length > 0 && (
              <section className="featured-post">
                <div className="featured-content">
                  <div className="featured-image">
                    {filteredPosts[0].coverImage ? (
                      <img
                        className="featured-image-media"
                        src={resolveAssetUrl(filteredPosts[0].coverImage)}
                        alt={filteredPosts[0].title}
                      />
                    ) : (
                      <div className="featured-image-placeholder"></div>
                    )}
                    <div className="image-overlay"></div>
                    <span className="featured-badge">Öne Çıkan</span>
                  </div>
                  <div className="featured-text">
                    <div className="post-meta">
                      <span className="post-category">{filteredPosts[0].category}</span>
                      <span className="post-date">
                        {formatDate(filteredPosts[0].date)}
                      </span>
                      <span className="read-time">
                        {filteredPosts[0].readTime} dk okuma
                      </span>
                    </div>
                    <h2>{filteredPosts[0].title}</h2>
                    <p>{filteredPosts[0].excerpt}</p>
                    <div className="post-tags">
                      {filteredPosts[0].tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/blog/${filteredPosts[0].id}`} className="btn btn-primary">
                      Yazıyı Oku
                    </Link>
                  </div>
                </div>
              </section>
            )}

            <section className="blog-posts">
              {filteredPosts.length === 0 ? (
                <div className="no-results">
                  <h3>Sonuç bulunamadı</h3>
                  <p>
                    Aradığınız kriterlere uygun blog yazısı bulunamadı. Farklı
                    arama terimleri deneyebilirsiniz.
                  </p>
                </div>
              ) : (
                <div className="posts-grid">
                  {filteredPosts.slice(1).map((post) => (
                    <article key={post.id} className="blog-card card">
                      <div className="blog-card-image">
                        {post.coverImage ? (
                          <img
                            className="blog-card-media"
                            src={resolveAssetUrl(post.coverImage)}
                            alt={post.title}
                          />
                        ) : (
                          <div className="blog-image-placeholder"></div>
                        )}
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
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="tag">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="card-footer">
                          <span className="author">{post.author}</span>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
