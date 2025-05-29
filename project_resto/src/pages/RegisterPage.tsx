import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const { t } = useLanguage();
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Gourmet Haven - ' + t('register.title');
  }, [t]);

  if (isAuthenticated) {
    return <Navigate to="/profile\" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError(t('register.passwordMismatch'));
      return;
    }

    try {
      await register(formData.email, formData.password, formData.name);
      navigate('/profile');
    } catch (err) {
      setError(t('register.emailExists'));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('register.title')}</h1>
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
                <User size={18} className="inline-block mr-2" />
                {t('register.nameLabel')}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={18} className="inline-block mr-2" />
                {t('register.emailLabel')}
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
                {t('register.passwordLabel')}
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock size={18} className="inline-block mr-2" />
                {t('register.confirmPasswordLabel')}
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-burgundy text-white rounded-md py-3 px-4 hover:bg-burgundy-dark transition-colors"
            >
              {t('register.submitButton')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t('register.hasAccount')}{' '}
              <Link to="/login" className="text-burgundy hover:text-burgundy-dark">
                {t('register.login')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;