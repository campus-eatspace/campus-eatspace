import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import MenuGrid from "../components/menu-item";
import "../style/menu-manager.css";

// ============= Main Menu Manager Component =============
const MenuManager: React.FC = () => {
  return (
    <div className="menu-manager-container">
      <Sidebar />

      <div className="main-content">
        <Header vendorName="Double Portion" />

        <div className="content-area">
          <h1 className="page-title">Menu Manager</h1>

          <div className="top-actions">
            <button className="add-item-btn">Add New Item</button>
            <div className="search-box">
              <svg
                className="search-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>

          <MenuGrid />
        </div>
      </div>
    </div>
  );
};

export default MenuManager;
