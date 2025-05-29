import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

const CartPage: React.FC = () => {
  const { t } = useLanguage();
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();

  useEffect(() => {
    document.title = 'Gourmet Haven - ' + t('cart.title');
  }, [t]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('cart.emptyCart')}</h1>
            <p className="text-gray-600 mb-8">{t('cart.emptyCartMessage')}</p>
            <Link
              to="/menu"
              className="inline-block px-6 py-3 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors"
            >
              {t('cart.continueShopping')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('cart.title')}</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center py-6 border-b border-gray-200 last:border-0">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={item.image || "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="ml-6 flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-lg font-medium text-burgundy">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {item.options && item.options.length > 0 && (
                  <div className="mt-1 text-sm text-gray-500">
                    {item.options.map((option, index) => (
                      <span key={option.id}>
                        {option.name}
                        {index < item.options!.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-error transition-colors flex items-center"
                  >
                    <Trash2 size={18} className="mr-1" />
                    {t('cart.removeItem')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex justify-between text-base text-gray-900">
              <p>{t('cart.subtotal')}</p>
              <p>${getTotalPrice().toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base text-gray-900">
              <p>{t('cart.tax')} (10%)</p>
              <p>${(getTotalPrice() * 0.1).toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-medium text-gray-900 border-t border-gray-200 pt-4">
              <p>{t('cart.total')}</p>
              <p>${(getTotalPrice() * 1.1).toFixed(2)}</p>
            </div>
          </div>

          <button
            className="w-full mt-6 bg-burgundy text-white rounded-md py-3 px-4 hover:bg-burgundy-dark transition-colors"
          >
            {t('cart.checkout')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;