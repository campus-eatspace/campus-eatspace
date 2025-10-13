import "../style/menu-manager.css";

// ============= Menu Item Card Component =============
interface MenuItemCardProps {
  id: string;
  isAvailable: boolean;
  onToggle: (id: string) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ id, isAvailable, onToggle }) => {
  return (
    <div className="menu-item-card">
      <div className="card-content">
        {/* Empty card content area */}
      </div>
      <div className="card-footer">
        <span className="availability-text">
          {isAvailable ? 'Available' : 'Unavailable'}
        </span>
        <button
          className={`toggle-switch ${isAvailable ? 'active' : ''}`}
          onClick={() => onToggle(id)}
          aria-label={`Toggle availability`}
        >
          <span className="toggle-slider"></span>
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;