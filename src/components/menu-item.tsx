import React, { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard.tsx';
import "../style/menu-manager.css";

// ============= Menu Grid Component =============
interface MenuItem {
  id: string;
  isAvailable: boolean;
}

const MenuGrid: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', isAvailable: true },
    { id: '2', isAvailable: false },
    { id: '3', isAvailable: false },
    { id: '4', isAvailable: true },
  ]);

  const handleToggle = (id: string) => {
    setMenuItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
      )
    );
  };

  return (
    <div className="menu-grid">
      {menuItems.map(item => (
        <MenuItemCard
          key={item.id}
          id={item.id}
          isAvailable={item.isAvailable}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default MenuGrid;