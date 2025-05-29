import { MenuItem, Category } from '../types';

// Mock data for development
const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat1',
    name: 'Appetizers',
    description: 'Start your meal with our delicious appetizers',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    order: 1
  },
  {
    id: 'cat2',
    name: 'Main Courses',
    description: 'Explore our wide range of main courses',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    order: 2
  },
  {
    id: 'cat3',
    name: 'Desserts',
    description: 'Satisfy your sweet tooth with our desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    order: 3
  },
  {
    id: 'cat4',
    name: 'Drinks',
    description: 'Refresh yourself with our beverages',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    order: 4
  }
];

const MOCK_MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'item1',
    name: 'Crispy Calamari',
    description: 'Lightly battered and fried calamari rings served with a zesty marinara sauce.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1252367/pexels-photo-1252367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat1',
    available: true,
    featured: true
  },
  {
    id: 'item2',
    name: 'Bruschetta',
    description: 'Toasted French bread topped with fresh tomatoes, garlic, basil, and olive oil.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/6605208/pexels-photo-6605208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat1',
    available: true
  },
  {
    id: 'item3',
    name: 'Spinach Artichoke Dip',
    description: 'Creamy blend of spinach, artichokes, and cheese, served with tortilla chips.',
    price: 10.99,
    image: 'https://images.pexels.com/photos/5950448/pexels-photo-5950448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat1',
    available: true
  },
  
  // Main Courses
  {
    id: 'item4',
    name: 'Filet Mignon',
    description: 'Tender 8oz filet, cooked to perfection, served with roasted vegetables and mashed potatoes.',
    price: 34.99,
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat2',
    available: true,
    featured: true,
    options: [
      { id: 'opt1', name: 'Add Blue Cheese Crumbles', price: 2.99 },
      { id: 'opt2', name: 'Add Sautéed Mushrooms', price: 1.99 },
      { id: 'opt3', name: 'Add Garlic Butter', price: 0.99 }
    ]
  },
  {
    id: 'item5',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon, grilled and glazed with a honey-dijon sauce, served with wild rice and seasonal vegetables.',
    price: 26.99,
    image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat2',
    available: true
  },
  {
    id: 'item6',
    name: 'Vegetable Risotto',
    description: 'Creamy arborio rice with seasonal vegetables, white wine, and parmesan cheese.',
    price: 18.99,
    image: 'https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat2',
    available: true,
    options: [
      { id: 'opt4', name: 'Add Grilled Chicken', price: 4.99 },
      { id: 'opt5', name: 'Add Grilled Shrimp', price: 6.99 }
    ]
  },
  
  // Desserts
  {
    id: 'item7',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat3',
    available: true,
    featured: true
  },
  {
    id: 'item8',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    price: 7.99,
    image: 'https://images.pexels.com/photos/6794258/pexels-photo-6794258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat3',
    available: true
  },
  
  // Drinks
  {
    id: 'item9',
    name: 'Signature Martini',
    description: 'Our house specialty martini with a twist of citrus.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat4',
    available: true
  },
  {
    id: 'item10',
    name: 'Craft Beer Selection',
    description: 'Rotating selection of local craft beers. Ask your server for today\'s options.',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    categoryId: 'cat4',
    available: true
  }
];

// Mock API functions
export const fetchCategories = async (): Promise<Category[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_CATEGORIES;
};

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return MOCK_MENU_ITEMS;
};

export const fetchItemById = async (id: string): Promise<MenuItem | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_MENU_ITEMS.find(item => item.id === id);
};

export const fetchCategoryById = async (id: string): Promise<Category | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_CATEGORIES.find(category => category.id === id);
};