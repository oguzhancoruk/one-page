import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  status: 'draft' | 'published';
  tags: string[];
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Anksiyete ile Başa Çıkma Yöntemleri',
      excerpt: 'Günlük yaşamda anksiyete ile mücadele etmek için pratik teknikler.',
      content: 'Anksiyete modern yaşamın kaçınılmaz bir parçası haline geldi...',
      category: 'Anksiyete',
      readTime: '5 dakika',
      publishDate: '2024-12-15',
      status: 'published',
      tags: ['anksiyete', 'terapi', 'ruh-saglik']
    },
    {
      id: 2,
      title: 'EMDR Terapisi Nedir?',
      excerpt: 'Travma tedavisinde kullanılan EMDR yönteminin detayları.',
      content: 'EMDR (Eye Movement Desensitization and Reprocessing) travma tedavisinde...',
      category: 'Terapi',
      readTime: '7 dakika',
      publishDate: '2024-12-10',
      status: 'published',
      tags: ['emdr', 'travma', 'tedavi']
    },
    {
      id: 3,
      title: 'Stres Yönetimi Teknikleri',
      excerpt: 'İş ve günlük yaşamda stresi azaltmanın etkili yolları.',
      content: 'Stres, modern insanın en büyük sorunlarından biri...',
      category: 'Stres',
      readTime: '6 dakika',
      publishDate: '2024-12-08',
      status: 'draft',
      tags: ['stres', 'yonetim', 'saglik']
    }
  ]);
  
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setActiveTab('edit-post');
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    setShowDeleteModal(null);
  };

  const handleSavePost = (post: BlogPost) => {
    if (post.id === 0) {
      // New post
      const newPost = {
        ...post,
        id: Math.max(...posts.map(p => p.id)) + 1,
        publishDate: new Date().toISOString().split('T')[0]
      };
      setPosts([...posts, newPost]);
    } else {
      // Update existing post
      setPosts(posts.map(p => p.id === post.id ? post : p));
    }
    setEditingPost(null);
    setActiveTab('posts');
  };

  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.status === 'published').length,
    draftPosts: posts.filter(p => p.status === 'draft').length,
    totalViews: 1247
  };

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <h3>{stats.totalPosts}</h3>
            <p>Toplam Yazı</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>{stats.publishedPosts}</h3>
            <p>Yayınlanmış</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <h3>{stats.draftPosts}</h3>
            <p>Taslak</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-info">
            <h3>{stats.totalViews}</h3>
            <p>Toplam Görüntüleme</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Son Aktiviteler</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <div className="activity-info">
              <p><strong>Yeni blog yazısı</strong> oluşturuldu</p>
              <span className="activity-time">2 saat önce</span>
            </div>
          </div>
          
          <div className="activity-item">
            <span className="activity-icon">✏️</span>
            <div className="activity-info">
              <p><strong>EMDR Terapisi Nedir?</strong> yazısı güncellendi</p>
              <span className="activity-time">1 gün önce</span>
            </div>
          </div>
          
          <div className="activity-item">
            <span className="activity-icon">👀</span>
            <div className="activity-info">
              <p><strong>Anksiyete ile Başa Çıkma</strong> yazısı 45 kez görüntülendi</p>
              <span className="activity-time">2 gün önce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPosts = () => (
    <div className="posts-content">
      <div className="posts-header">
        <h3>Blog Yazıları</h3>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setEditingPost({
              id: 0,
              title: '',
              excerpt: '',
              content: '',
              category: '',
              readTime: '',
              publishDate: '',
              status: 'draft',
              tags: []
            });
            setActiveTab('edit-post');
          }}
        >
          ➕ Yeni Yazı
        </button>
      </div>

      <div className="posts-table">
        <div className="table-header">
          <div className="col-title">Başlık</div>
          <div className="col-category">Kategori</div>
          <div className="col-status">Durum</div>
          <div className="col-date">Tarih</div>
          <div className="col-actions">İşlemler</div>
        </div>

        {posts.map(post => (
          <div key={post.id} className="table-row">
            <div className="col-title">
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
            <div className="col-category">
              <span className="category-tag">{post.category}</span>
            </div>
            <div className="col-status">
              <span className={`status-badge ${post.status}`}>
                {post.status === 'published' ? 'Yayınlandı' : 'Taslak'}
              </span>
            </div>
            <div className="col-date">{post.publishDate}</div>
            <div className="col-actions">
              <button 
                className="action-btn edit"
                onClick={() => handleEditPost(post)}
              >
                ✏️
              </button>
              <button 
                className="action-btn delete"
                onClick={() => setShowDeleteModal(post.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEditPost = () => {
    if (!editingPost) return null;

    return (
      <div className="edit-post-content">
        <div className="edit-header">
          <h3>{editingPost.id === 0 ? 'Yeni Blog Yazısı' : 'Yazıyı Düzenle'}</h3>
          <button 
            className="btn btn-secondary"
            onClick={() => {
              setEditingPost(null);
              setActiveTab('posts');
            }}
          >
            ← Geri Dön
          </button>
        </div>

        <form className="edit-form" onSubmit={(e) => {
          e.preventDefault();
          if (editingPost) {
            handleSavePost(editingPost);
          }
        }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Başlık *</label>
              <input
                type="text"
                id="title"
                value={editingPost.title}
                onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Kategori *</label>
              <select
                id="category"
                value={editingPost.category}
                onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                required
              >
                <option value="">Seçiniz</option>
                <option value="Anksiyete">Anksiyete</option>
                <option value="Depresyon">Depresyon</option>
                <option value="Terapi">Terapi</option>
                <option value="Stres">Stres</option>
                <option value="İlişkiler">İlişkiler</option>
                <option value="Genel">Genel</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="readTime">Okuma Süresi</label>
              <input
                type="text"
                id="readTime"
                placeholder="5 dakika"
                value={editingPost.readTime}
                onChange={(e) => setEditingPost({...editingPost, readTime: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="status">Durum</label>
              <select
                id="status"
                value={editingPost.status}
                onChange={(e) => setEditingPost({...editingPost, status: e.target.value as 'draft' | 'published'})}
              >
                <option value="draft">Taslak</option>
                <option value="published">Yayınla</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Özet</label>
            <textarea
              id="excerpt"
              rows={3}
              value={editingPost.excerpt}
              onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
              placeholder="Yazının kısa özeti..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">İçerik *</label>
            <textarea
              id="content"
              rows={12}
              value={editingPost.content}
              onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
              placeholder="Blog yazısının içeriği..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Etiketler</label>
            <input
              type="text"
              id="tags"
              placeholder="anksiyete, terapi, ruh-saglik (virgülle ayırın)"
              value={editingPost.tags.join(', ')}
              onChange={(e) => setEditingPost({...editingPost, tags: e.target.value.split(',').map(tag => tag.trim())})}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editingPost.id === 0 ? '📝 Oluştur' : '💾 Güncelle'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => {
                setEditingPost(null);
                setActiveTab('posts');
              }}
            >
              İptal
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <p>Dr. Aleyna Didem Aydın</p>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span className="nav-icon">📊</span>
            Ana Sayfa
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            <span className="nav-icon">📝</span>
            Blog Yazıları
          </button>
          
          <button className="nav-item" onClick={() => window.open('/', '_blank')}>
            <span className="nav-icon">🌐</span>
            Siteyi Görüntüle
          </button>
          
          <button className="nav-item logout" onClick={handleLogout}>
            <span className="nav-icon">🚪</span>
            Çıkış Yap
          </button>
        </nav>
      </div>

      <div className="dashboard-main">
        <div className="main-header">
          <h1>
            {activeTab === 'dashboard' && 'Ana Sayfa'}
            {activeTab === 'posts' && 'Blog Yazıları'}
            {activeTab === 'edit-post' && (editingPost?.id === 0 ? 'Yeni Yazı' : 'Yazıyı Düzenle')}
          </h1>
          <div className="header-user">
            <span>👋 Hoş geldin, Aleyna</span>
          </div>
        </div>

        <div className="main-content">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'posts' && renderPosts()}
          {activeTab === 'edit-post' && renderEditPost()}
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>⚠️ Yazıyı Sil</h3>
            </div>
            <div className="modal-body">
              <p>Bu blog yazısını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</p>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDeleteModal(null)}
              >
                İptal
              </button>
              <button 
                className="btn btn-danger"
                onClick={() => handleDeletePost(showDeleteModal)}
              >
                🗑️ Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;