import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import OrderList from "../components/orders";
import DashboardStats from "../components/dashboardStats";
import "../style/dashboard.css";

// ============= Main Dashboard Component =============
const VendorDashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header vendorName="Double Portion" />

        <div className="content-area">
          <h1 className="page-title">Dashboard</h1>

          <DashboardStats />

          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
