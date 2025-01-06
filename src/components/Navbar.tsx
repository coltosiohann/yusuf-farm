import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-600' : 'text-gray-600 hover:text-green-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Yusuf Farm</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
              Home
            </Link>
            <Link to="/story" className={`${isActive('/story')} transition-colors duration-200 font-medium`}>
              Our Story
            </Link>
            <Link to="/offerings" className={`${isActive('/offerings')} transition-colors duration-200 font-medium`}>
              What We Offer
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200 font-medium`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;