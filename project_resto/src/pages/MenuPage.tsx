import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useMenu } from '../contexts/MenuContext';
import { useCart } from '../contexts/CartContext';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import MenuItem from '../components/menu/MenuItem';
import { Search } from 'lucide-react';

const MenuPage: React.FC = () => {
  const { t } = useLanguage();
  const { categories, menuItems, isLoading, getItemsByCategory } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    document.title = 'Gourmet Haven - ' + t('menu.title');
    
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory, t]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredItems(
        menuItems.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (activeCategory) {
      setFilteredItems(getItemsByCategory(activeCategory));
    } else {
      setFilteredItems(menuItems);
    }
  }, [searchTerm, activeCategory, menuItems, getItemsByCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchTerm('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setActiveCategory('');
    } else if (categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-burgundy"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('menu.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('menu.subtitle')}</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={t('menu.searchPlaceholder')}
              className="w-full py-3 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Category Tabs */}
        {!searchTerm && (
          <MenuCategoryTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange}
          />
        )}

        {/* Menu Items */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchTerm 
                ? t('menu.noSearchResults', { searchTerm }) 
                : t('menu.noItemsInCategory')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;