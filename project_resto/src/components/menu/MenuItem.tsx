import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { MenuItem as MenuItemType } from '../../types';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (item.options && item.options.length > 0) {
      setIsModalOpen(true);
    } else {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity,
        image: item.image,
        options: []
      });
      
      // Show toast notification
      // This would be replaced with your actual toast implementation
      alert(t('menu.addedToCart'));
    }
  };

  const handleConfirmOptions = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
      image: item.image,
      options: selectedOptions
    });
    
    setIsModalOpen(false);
    setSelectedOptions([]);
    setQuantity(1);
    
    // Show toast notification
    alert(t('menu.addedToCart'));
  };

  const toggleOption = (option: any) => {
    if (selectedOptions.some(opt => opt.id === option.id)) {
      setSelectedOptions(selectedOptions.filter(opt => opt.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const totalPrice = (
    item.price + 
    selectedOptions.reduce((sum, option) => sum + (option.price || 0), 0)
  ) * quantity;

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
        <div className="h-48 overflow-hidden">
          <img 
            src={item.image || "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
            <span className="text-burgundy font-bold">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
          
          {item.options && item.options.length > 0 && (
            <p className="text-sm text-gray-500 mb-4">
              {t('menu.customizableOptions', { count: item.options.length })}
            </p>
          )}
          
          <button 
            onClick={handleAddToCart}
            className="w-full py-2 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors flex items-center justify-center"
          >
            <ShoppingCart size={18} className="mr-2" />
            {t('menu.addToCart')}
          </button>
        </div>
      </div>

      {/* Customization Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{t('menu.customizeItem', { item: item.name })}</h3>
              
              {item.options && item.options.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">{t('menu.selectOptions')}</h4>
                  <div className="space-y-3">
                    {item.options.map(option => (
                      <div key={option.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`option-${option.id}`}
                          checked={selectedOptions.some(opt => opt.id === option.id)}
                          onChange={() => toggleOption(option)}
                          className="mr-2 h-4 w-4 text-burgundy"
                        />
                        <label htmlFor={`option-${option.id}`} className="flex-grow">
                          {option.name}
                        </label>
                        {option.price > 0 && (
                          <span className="text-gray-600">+${option.price.toFixed(2)}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">{t('menu.quantity')}</h4>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-4 font-medium">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center font-bold text-lg mb-6">
                <span>{t('menu.totalPrice')}</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {t('common.cancel')}
                </button>
                <button 
                  onClick={handleConfirmOptions}
                  className="flex-1 py-2 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors"
                >
                  {t('menu.addToCart')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;