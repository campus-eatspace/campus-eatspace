import "../style/dashboard.css";

// ============= Header Component =============
interface HeaderProps {
  vendorName?: string;
}

const Header: React.FC<HeaderProps> = ({ vendorName = 'Double Portion' }) => {
  return (
    <header className="top-header">
      <div className="vendor-name">{vendorName}</div>
      <div className="user-avatar">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </header>
  );
};

export default Header;