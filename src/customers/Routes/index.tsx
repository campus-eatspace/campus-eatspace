import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Home from "../Pages/Home";
import DashboardPage from "../Pages/DashboardPage";
import RestaurantPage from "../Pages/RestaurantPage";
import ComingSoonPage from "../Pages/ComingSoonPage";
import { OrderProvider } from "../context/OrderContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppRoutes() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
        />
      </BrowserRouter>
    </OrderProvider>
  );
}
