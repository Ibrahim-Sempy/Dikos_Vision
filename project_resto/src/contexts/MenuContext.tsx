import React, { createContext, useState, useContext, useEffect } from 'react';
import { MenuItem, Category } from '../types';
import { fetchMenuItems, fetchCategories } from '../services/menuService';

interface MenuContextType {
  menuItems: MenuItem[];
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  getItemsByCategory: (categoryId: string) => MenuItem[];
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        setIsLoading(true);
        const categoriesData = await fetchCategories();
        const menuItemsData = await fetchMenuItems();
        
        setCategories(categoriesData);
        setMenuItems(menuItemsData);
      } catch (err) {
        setError('Failed to load menu data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadMenuData();
  }, []);

  const getItemsByCategory = (categoryId: string): MenuItem[] => {
    return menuItems.filter(item => item.categoryId === categoryId);
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        categories,
        isLoading,
        error,
        getItemsByCategory
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};