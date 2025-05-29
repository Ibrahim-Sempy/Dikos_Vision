import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Gourmet Haven - 404 Not Found';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-burgundy mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors"
        >
          <Home size={18} className="mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;