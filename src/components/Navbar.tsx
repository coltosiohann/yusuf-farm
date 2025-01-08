import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span className="ml-2 text-xl font-bold text-black">
                Yusuf Farm
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#F05742]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-[#F05742] transition-all duration-200 font-medium pb-1"
            >
              Home
            </Link>
            <Link
              to="/story"
              className="text-black hover:text-[#F05742] transition-all duration-200 font-medium pb-1"
            >
              Our Story
            </Link>
            <Link
              to="/animal-trading"
              className="text-black hover:text-[#F05742] transition-all duration-200 font-medium pb-1"
            >
              Animal Trading
            </Link>
            <Link
              to="/offerings"
              className="text-black hover:text-[#F05742] transition-all duration-200 font-medium pb-1"
            >
              What We Offer
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-[#F05742] transition-all duration-200 font-medium pb-1"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-[#F05742] shadow-md transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/story"
                className="text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/animal-trading"
                className="text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Animal Trading
              </Link>
              <Link
                to="/offerings"
                className="text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Offer
              </Link>
              <Link
                to="/contact"
                className="text-white transition-colors duration-200 font-medium"
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
