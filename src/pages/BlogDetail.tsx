import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { apiService, resolveAssetUrl, type BlogPostRecord } from '../services/apiService';
import './BlogDetail.css';

interface BlogDetailViewModel {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
}

const mapApiPost = (post: BlogPostRecord): BlogDetailViewModel => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt || '',
  content: post.content,
  coverImage: post.coverImage || '',
  category: post.category || 'Genel',
  author: post.authorName || 'Dr. Aleyna Didem Aydın',
  date: post.publishedAt || post.createdAt,
  readTime: Number(post.readTime || 5),
  tags: post.tags || [],
});

const BlogDetail: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<BlogDetailViewModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      if (!postId) {
        setError('Blog yazısı bulunamadı.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');
        const response = await apiService.getBlogPost(postId);
        setPost(mapApiPost(response));
      } catch {
        setPost(null);
        setError('Blog yazısı bulunamadı veya yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [postId]);

  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="blog-detail-empty">Yazı yükleniyor...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="blog-detail-empty">
            <h1>Yazı bulunamadı</h1>
            <p>{error || 'İstediğiniz blog yazısı mevcut değil.'}</p>
            <Link to="/blog" className="btn btn-primary">
              Bloga Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <Helmet>
        <title>{post.title} — Blog</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>
      <div className="container">
        <article className="blog-detail-card">
          <Link to="/blog" className="blog-detail-back">
            ← Bloga dön
          </Link>

          <div className="blog-detail-meta">
            <span>{post.category}</span>
            <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
            <span>{post.readTime} dk okuma</span>
          </div>

          <h1>{post.title}</h1>
          <p className="blog-detail-excerpt">{post.excerpt}</p>

          {post.coverImage && (
            <div className="blog-detail-cover">
              <img src={resolveAssetUrl(post.coverImage)} alt={post.title} />
            </div>
          )}

          <div className="blog-detail-author">
            <strong>{post.author}</strong>
          </div>

          <div className="blog-detail-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="blog-detail-content">
            {post.content
              .split('\n')
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, index) => (
                <p key={`${post.id}-${index}`}>{line}</p>
              ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
