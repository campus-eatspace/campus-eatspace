"use client";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      
      <div className="text-xl font-bold text-green-700">Campus Eats</div>

      
      <div className="hidden md:flex space-x-6">
        <Link to="/about" className="hover:text-green-600">
          About Us
        </Link>
        <Link to="/order" className="hover:text-green-600">
          Order Now
        </Link>
        <Link to="/register" className="hover:text-green-600">
          Register
        </Link>
      </div>

     
      <Link
        to="/login"
        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
      >
        Login
      </Link>
    </nav>
  );
};