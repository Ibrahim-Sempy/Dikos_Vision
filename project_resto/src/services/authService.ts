import { User } from '../types';

// Mock user data for development
const MOCK_USERS: { [key: string]: User & { password: string } } = {
  'admin1': {
    id: 'admin1',
    email: 'sempybarry@gmail.com',
    password: '12345678',
    name: 'Sempy Admin',
    role: 'admin',
    createdAt: new Date().toISOString()
  },
  'user1': {
    id: 'user1',
    email: 'john@example.com',
    password: 'password123',
    name: 'John Doe',
    phone: '555-123-4567',
    address: '123 Main St, Anytown, USA',
    createdAt: new Date().toISOString()
  }
};

// Mock token storage
let currentUserId: string | null = null;

// Mock API functions
export const login = async (email: string, password: string): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const user = Object.values(MOCK_USERS).find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Store user ID in local "session"
  currentUserId = user.id;
  localStorage.setItem('userId', user.id);

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const register = async (email: string, password: string, name: string): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check if email already exists
  if (Object.values(MOCK_USERS).some(u => u.email === email)) {
    throw new Error('Email already in use');
  }

  const newUserId = `user${Object.keys(MOCK_USERS).length + 1}`;

  const newUser = {
    id: newUserId,
    email,
    password,
    name,
    createdAt: new Date().toISOString()
  };

  // Add to mock database
  MOCK_USERS[newUserId] = newUser;

  // Store user ID in local "session"
  currentUserId = newUserId;
  localStorage.setItem('userId', newUserId);

  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

export const logout = async (): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Clear user ID from local "session"
  currentUserId = null;
  localStorage.removeItem('userId');
};

export const getCurrentUser = async (): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Check local storage first
  const storedUserId = localStorage.getItem('userId');
  const userId = currentUserId || storedUserId;

  if (!userId || !MOCK_USERS[userId]) {
    return null;
  }

  const { password: _, ...userWithoutPassword } = MOCK_USERS[userId];
  return userWithoutPassword;
};

export const updateUserProfile = async (userId: string, data: Partial<User>): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  if (!MOCK_USERS[userId]) {
    throw new Error('User not found');
  }

  // Update user data
  MOCK_USERS[userId] = {
    ...MOCK_USERS[userId],
    ...data
  };

  const { password: _, ...userWithoutPassword } = MOCK_USERS[userId];
  return userWithoutPassword;
};