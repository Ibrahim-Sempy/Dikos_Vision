export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  createdAt: string;
  role?: 'user' | 'admin' | 'staff';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image?: string;
  order: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  categoryId: string;
  options?: ItemOption[];
  available: boolean;
  featured?: boolean;
}

export interface ItemOption {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  options?: ItemOption[];
}

export interface Reservation {
  id: string;
  userId: string;
  date: string;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  specialRequests?: string;
  tableId?: string;
}

export interface Table {
  id: string;
  name: string;
  capacity: number;
  available: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: string;
  type: 'dine-in' | 'takeaway' | 'delivery';
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentMethod?: string;
  deliveryAddress?: string;
  specialInstructions?: string;
}