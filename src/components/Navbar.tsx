import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-green-600"
      : "text-gray-600 hover:text-green-600";
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Yusuf Farm Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Yusuf Farm
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${isActive("/")} transition-colors duration-200 font-medium`}
            >
              Home
            </Link>
            <Link
              to="/story"
              className={`${isActive("/story")} transition-colors duration-200 font-medium`}
            >
              Our Story
            </Link>
            <Link
              to="/offerings"
              className={`${isActive("/offerings")} transition-colors duration-200 font-medium`}
            >
              What We Offer
            </Link>
            <Link
              to="/contact"
              className={`${isActive("/contact")} transition-colors duration-200 font-medium`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${isActive("/")} transition-colors duration-200 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/story"
                className={`${isActive("/story")} transition-colors duration-200 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/offerings"
                className={`${isActive("/offerings")} transition-colors duration-200 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                What We Offer
              </Link>
              <Link
                to="/contact"
                className={`${isActive("/contact")} transition-colors duration-200 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
