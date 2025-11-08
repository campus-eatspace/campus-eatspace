import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterAs from "./auth/signup";
import LoginAs from "./auth/login";
import VendorDashboard from "./pages/vendor-dashboard";
import MenuManager from "./pages/menu-manager";
import ProfileSettings from "./pages/vendor-profile";
import Login from "./customers/Pages/Auth/Login";
import Signup from "./customers/Pages/Auth/Signup";
import Home from "./customers/Pages/Home";
import DashboardPage from "./customers/Pages/DashboardPage";
import RestaurantPage from "./customers/Pages/RestaurantPage";
import ComingSoonPage from "./customers/Pages/ComingSoonPage";
import { OrderProvider } from "./customers/context/OrderContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/vendor/signup" element={<RegisterAs />} />
            <Route path="/vendor/login" element={<LoginAs />} />
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
            <Route path="/vendor/menu" element={<MenuManager />} />
            <Route path="/vendor/profile" element={<ProfileSettings />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
          />
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;