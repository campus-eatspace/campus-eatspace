import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";

import Signup from "../Pages/Auth/Signup"; 
import Home from "../Pages/Home"; 
import DashboardPage from "../Pages/DahboardPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
