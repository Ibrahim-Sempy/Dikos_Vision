import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Diko-25 - ' + t('home.title');
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeIn">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
              <Link 
                to="/menu" 
                className="px-8 py-3 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors text-center"
              >
                {t('home.hero.menuButton')}
              </Link>
              <Link 
                to="/reservation" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-burgundy transition-colors text-center"
              >
                {t('home.hero.reserveButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('home.featuredMenu.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.featuredMenu.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt={t('home.featuredMenu.item1.name')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('home.featuredMenu.item1.name')}</h3>
                <p className="text-gray-600 mb-4">{t('home.featuredMenu.item1.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-burgundy font-bold">${t('home.featuredMenu.item1.price')}</span>
                  <Link 
                    to="/menu" 
                    className="text-burgundy hover:text-burgundy-dark flex items-center"
                  >
                    {t('home.featuredMenu.viewButton')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Featured Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt={t('home.featuredMenu.item2.name')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('home.featuredMenu.item2.name')}</h3>
                <p className="text-gray-600 mb-4">{t('home.featuredMenu.item2.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-burgundy font-bold">${t('home.featuredMenu.item2.price')}</span>
                  <Link 
                    to="/menu" 
                    className="text-burgundy hover:text-burgundy-dark flex items-center"
                  >
                    {t('home.featuredMenu.viewButton')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Featured Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt={t('home.featuredMenu.item3.name')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('home.featuredMenu.item3.name')}</h3>
                <p className="text-gray-600 mb-4">{t('home.featuredMenu.item3.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-burgundy font-bold">${t('home.featuredMenu.item3.price')}</span>
                  <Link 
                    to="/menu" 
                    className="text-burgundy hover:text-burgundy-dark flex items-center"
                  >
                    {t('home.featuredMenu.viewButton')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors inline-block"
            >
              {t('home.featuredMenu.exploreButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-burgundy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.reservation.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('home.reservation.subtitle')}</p>
          <Link 
            to="/reservation" 
            className="px-8 py-3 bg-white text-burgundy rounded-md hover:bg-gray-100 transition-colors inline-block font-semibold"
          >
            {t('home.reservation.button')}
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('home.testimonials.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.testimonials.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">{t('home.testimonials.person1.name')}</h4>
                  <div className="flex text-amber-400">
                    {"★".repeat(5).split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{t('home.testimonials.person1.quote')}"</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">{t('home.testimonials.person2.name')}</h4>
                  <div className="flex text-amber-400">
                    {"★".repeat(5).split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{t('home.testimonials.person2.quote')}"</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">{t('home.testimonials.person3.name')}</h4>
                  <div className="flex text-amber-400">
                    {"★".repeat(4).split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{t('home.testimonials.person3.quote')}"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;