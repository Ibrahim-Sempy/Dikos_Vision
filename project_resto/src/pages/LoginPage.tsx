import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { t } = useLanguage();
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Gourmet Haven - ' + t('login.title');
  }, [t]);

  if (isAuthenticated) {
    return <Navigate to="/profile\" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(formData.email, formData.password);
      navigate('/profile');
    } catch (err) {
      setError(t('login.error'));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('login.title')}</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {error && (
            <div className="mb-4 p-3 bg-error-light text-error rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={18} className="inline-block mr-2" />
                {t('login.emailLabel')}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock size={18} className="inline-block mr-2" />
                {t('login.passwordLabel')}
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-burgundy text-white rounded-md py-3 px-4 hover:bg-burgundy-dark transition-colors"
            >
              {t('login.submitButton')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t('login.noAccount')}{' '}
              <Link to="/register" className="text-burgundy hover:text-burgundy-dark">
                {t('login.register')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;