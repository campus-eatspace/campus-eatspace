import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterAs from "./auth/signup";
import LoginAs from "./auth/login";
import VendorDashboard from "./pages/vendor-dashboard";
import MenuManager from "./pages/menu-manager";
import ProfileSettings from "./pages/vendor-profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<RegisterAs />} />
          <Route path="/login" element={<LoginAs />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/vendor/menu" element={<MenuManager />} />
          <Route path="/vendor/profile" element={<ProfileSettings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
