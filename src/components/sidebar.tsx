import "../style/dashboard.css";
import logo from "../assets/logo.png";
import edit from "../icons/edit.png";
import layout from "../icons/layout.png";
import settings from "../icons/settings.png";
import { Link, useLocation } from "react-router-dom";

// ============= Sidebar Component =============
interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const location = useLocation();
  const menuItems = [
    { id: 1, icon: layout, label: "Dashboard", path: "/vendor/dashboard" },
    { id: 2, icon: edit, label: "Menu Manager", path: "/vendor/menu" },
    { id: 3, icon: settings, label: "Profiles & Settings", path: "/vendor/profile" },
  ];

  return (
    <div className={`sidebar ${className}`}>
      <div className="sidebar-header">
        <div className="logo-icon">
          <img src={logo} alt="" height={"35px"} width={"35px"} />
        </div>
        <div className="brand-name">Campus Eats</div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          >
            <img src={item.icon} alt="" className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
