import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Calendar,
  ChefHat,
  CreditCard,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Users2,
  Utensils,
  Wallet,
  QrCode,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';

// Menu items pour la navigation principale
const mainMenuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Commandes",
    url: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Réservations",
    url: "/admin/reservations",
    icon: Calendar,
  },
  {
    title: "Menu & Plats",
    url: "/admin/menu",
    icon: Utensils,
  },
];

// Menu items pour la gestion
const managementItems = [
  {
    title: "Livraisons",
    url: "/admin/delivery",
    icon: Truck,
  },
  {
    title: "Utilisateurs",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Clients (CRM)",
    url: "/admin/customers",
    icon: Users2,
  },
  {
    title: "Stocks",
    url: "/admin/inventory",
    icon: Package,
  },
];

// Menu items pour l'administration
const adminItems = [
  {
    title: "Comptabilité",
    url: "/admin/accounting",
    icon: Wallet,
  },
  {
    title: "Paiements",
    url: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "QR Codes",
    url: "/admin/qr-codes",
    icon: QrCode,
  },
  {
    title: "Rapports",
    url: "/admin/reports",
    icon: BarChart3,
  },
];

const AdminSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white shadow-md h-screen flex flex-col transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/admin" className="flex items-center space-x-2">
            <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-burgundy text-white">
              <ChefHat className="w-4 h-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="font-semibold">RestaurantPro</span>
              <span className="text-xs">Gestion Restaurant</span>
            </div>
          </Link>
        )}
        {isCollapsed && (
          <div className="flex justify-center w-full">
            <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-burgundy text-white">
              <ChefHat className="w-4 h-4" />
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-100 rounded-md"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Main Menu */}
        <div className="mb-6">
          {!isCollapsed && <h3 className="text-xs font-semibold text-gray-500 mb-2">Principal</h3>}
          <nav className="space-y-1">
            {mainMenuItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md`}
                title={isCollapsed ? item.title : undefined}
              >
                <item.icon className="w-5 h-5 text-gray-700" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Management Menu */}
        <div className="mb-6">
          {!isCollapsed && <h3 className="text-xs font-semibold text-gray-500 mb-2">Gestion</h3>}
          <nav className="space-y-1">
            {managementItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md`}
                title={isCollapsed ? item.title : undefined}
              >
                <item.icon className="w-5 h-5 text-gray-700" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Admin Menu */}
        <div className="mb-6">
          {!isCollapsed && <h3 className="text-xs font-semibold text-gray-500 mb-2">Administration</h3>}
          <nav className="space-y-1">
            {adminItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md`}
                title={isCollapsed ? item.title : undefined}
              >
                <item.icon className="w-5 h-5 text-gray-700" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Settings */}
        <div>
          <Link
            to="/admin/settings"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md`}
            title={isCollapsed ? "Paramètres" : undefined}
          >
            <Settings className="w-5 h-5 text-gray-700" />
            {!isCollapsed && <span>Paramètres</span>}
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-semibold">AD</span>
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-500">sempybarry@gmail.com</p>
            </div>
          )}
        </div>
        <Link
          to="/"
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-2'} px-3 py-2 mt-4 text-gray-700 hover:bg-gray-100 rounded-md`}
          title={isCollapsed ? "Retour au site" : undefined}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          {!isCollapsed && <span>Retour au site</span>}
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;