import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { ShoppingCart, User, Globe, X, AlignJustify, LayoutDashboard } from 'lucide-react';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { isAuthenticated, user } = useAuth();
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-burgundy">
            Gourmet Haven
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/" className="text-gray-800 hover:text-burgundy transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/menu" className="text-gray-800 hover:text-burgundy transition-colors">
                {t('nav.menu')}
              </Link>
              <Link to="/reservation" className="text-gray-800 hover:text-burgundy transition-colors">
                {t('nav.reservation')}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="text-gray-700 hover:text-burgundy transition-colors"
                aria-label={t('accessibility.changeLanguage')}
              >
                <Globe size={20} />
                <span className="ml-1">{language.toUpperCase()}</span>
              </button>

              <Link
                to="/cart"
                className="text-gray-700 hover:text-burgundy transition-colors relative"
                aria-label={t('accessibility.cart')}
              >
                <ShoppingCart size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <>
                  {user?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="text-gray-700 hover:text-burgundy transition-colors flex items-center"
                    >
                      <LayoutDashboard size={20} className="mr-1" />
                      <span className="hidden lg:inline">Admin</span>
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-burgundy transition-colors flex items-center"
                  >
                    <User size={20} className="mr-1" />
                    <span className="hidden lg:inline">{user?.name?.split(' ')[0]}</span>
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors"
                >
                  {t('nav.login')}
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-burgundy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
          >
            {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 text-gray-800 hover:text-burgundy hover:bg-gray-100">
                {t('nav.home')}
              </Link>
              <Link to="/menu" className="px-4 py-2 text-gray-800 hover:text-burgundy hover:bg-gray-100">
                {t('nav.menu')}
              </Link>
              <Link to="/reservation" className="px-4 py-2 text-gray-800 hover:text-burgundy hover:bg-gray-100">
                {t('nav.reservation')}
              </Link>
              <Link to="/cart" className="px-4 py-2 text-gray-800 hover:text-burgundy hover:bg-gray-100 flex items-center">
                <ShoppingCart size={20} className="mr-2" />
                {t('nav.cart')}
                {getTotalItems() > 0 && (
                  <span className="ml-2 bg-burgundy text-white text-xs rounded-full px-2 py-1">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <Link to="/profile" className="px-4 py-2 text-gray-800 hover:text-burgundy hover:bg-gray-100 flex items-center">
                  <User size={20} className="mr-2" />
                  {user?.name}
                </Link>
              ) : (
                <Link to="/login" className="mx-4 py-2 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors text-center">
                  {t('nav.login')}
                </Link>
              )}

              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-gray-800 hover:text-burgundy hover:bg-gray-100 flex items-center"
              >
                <Globe size={20} className="mr-2" />
                {language === 'en' ? 'English' : 'Français'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;