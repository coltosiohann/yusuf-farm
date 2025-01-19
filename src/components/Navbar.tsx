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
          <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end transition-all duration-300">
            <div className="w-4/5 sm:w-3/5 bg-[#F05742] p-6 rounded-tl-3xl rounded-bl-3xl transform transition-transform duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <img
                  src={logo}
                  alt="Yusuf Farm Logo"
                  className="h-10 w-10 object-contain"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-[#F05742]"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <Link
                  to="/"
                  className="text-white text-2xl font-semibold transition-colors duration-200 hover:text-[#F05742]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/story"
                  className="text-white text-2xl font-semibold transition-colors duration-200 hover:text-[#F05742]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
                <Link
                  to="/animal-trading"
                  className="text-white text-2xl font-semibold transition-colors duration-200 hover:text-[#F05742]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Animal Trading
                </Link>
                <Link
                  to="/offerings"
                  className="text-white text-2xl font-semibold transition-colors duration-200 hover:text-[#F05742]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What We Offer
                </Link>
                <Link
                  to="/contact"
                  className="text-white text-2xl font-semibold transition-colors duration-200 hover:text-[#F05742]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
