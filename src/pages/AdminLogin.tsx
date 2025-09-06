import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple authentication (in production, this should be properly secured)
    if (credentials.username === 'aleyna.admin' && credentials.password === 'psikolog2024!') {
      // Store authentication token in localStorage
      localStorage.setItem('adminToken', 'authenticated-' + Date.now());
      localStorage.setItem('adminUser', credentials.username);
      
      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } else {
      setError('Kullanıcı adı veya şifre hatalı.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <div className="logo-icon">🔐</div>
            <h1>Admin Paneli</h1>
            <p>Dr. Aleyna Didem Aydın</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Kullanıcı adınızı girin"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Şifrenizi girin"
              required
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Giriş yapılıyor...
              </>
            ) : (
              <>
                <span className="login-icon">🔑</span>
                Giriş Yap
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <div className="security-info">
            <h4>🛡️ Güvenlik Bilgisi</h4>
            <ul>
              <li>Şifrenizi kimseyle paylaşmayın</li>
              <li>Güvenli bir ağ bağlantısı kullanın</li>
              <li>Oturumunuz otomatik olarak sonlanır</li>
            </ul>
          </div>
        </div>

        <div className="demo-credentials">
          <h5>Demo Giriş Bilgileri:</h5>
          <p><strong>Kullanıcı Adı:</strong> aleyna.admin</p>
          <p><strong>Şifre:</strong> psikolog2024!</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;