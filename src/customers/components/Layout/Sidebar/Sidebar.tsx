"use client";
import { Heart, Star, Settings, HelpCircle, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <img src="/src/assets/dashboard 1.png" alt="Dashboard" className="h-4 w-4" /> },
  { label: "Wishlist", icon: <Heart size={18} /> },
  { label: "Favorite", icon: <Star size={18} /> },
];

const otherItems = [
  { label: "Settings", icon: <Settings size={18} /> },
  { label: "Help & Support", icon: <HelpCircle size={18} /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !collapsed && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 768 
      ) {
        setCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [collapsed]);

  const handleItemClick = (label: string) => {
    if (label === "Dashboard") {
      navigate("/dashboard");
    } else if (["Wishlist", "Favorite", "Settings", "Help & Support"].includes(label)) {
      navigate("/coming-soon");
    }
  
    setCollapsed(true);
  };

  return (
    <>
  
      <button
        className={`md:hidden sticky top-0 left-0 m-4 z-30 p-2 rounded-lg shadow-lg transition-colors ${
          collapsed 
            ? "bg-orange-500 text-white hover:bg-orange-600" 
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Open Sidebar" : "Close Sidebar"}
      >
        {collapsed ? <Menu size={24} /> : <X size={24} />}
      </button>

      <div
        ref={sidebarRef}
        className={`
          bg-gray-100 h-screen p-4 flex flex-col justify-between
          fixed top-0 left-0 z-40 transition-all duration-300
          w-52 md:static md:w-52
          ${collapsed ? "-translate-x-full" : "translate-x-0"}
          md:translate-x-0
        `}
      >
        <div>
          <h2 className="text-sm text-orange-500 mb-3">Main Menu</h2>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 cursor-pointer hover:text-orange-500"
                onClick={() => handleItemClick(item.label)}
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-sm text-gray-400 mt-6 mb-3">Others</h2>
          <ul className="space-y-3">
            {otherItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 cursor-pointer hover:text-orange-500"
                onClick={() => handleItemClick(item.label)}
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xs text-center text-gray-500">CampusEats ©</div>
      </div>
    </>
  );
}
