import React from 'react';
import { Category } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface MenuCategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const MenuCategoryTabs: React.FC<MenuCategoryTabsProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  const { t } = useLanguage();

  return (
    <div className="border-b border-gray-200 overflow-x-auto no-scrollbar">
      <div className="flex space-x-1 min-w-max">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors focus:outline-none
              ${activeCategory === category.id 
                ? 'bg-burgundy text-white' 
                : 'text-gray-700 hover:text-burgundy hover:bg-gray-100'
              }`}
            onClick={() => onCategoryChange(category.id)}
            aria-selected={activeCategory === category.id}
            role="tab"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryTabs;