import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isRomanian = location.pathname.startsWith('/ro');
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-600 hover:text-red-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={isRomanian ? "/ro" : "/"} className="flex items-center">
              {/* Logo */}
              <Sprout className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-800 hover:text-red-600">Yusuf Farm</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isRomanian ? (
              <>
                <Link to="/ro" className={`${isActive('/ro')} transition-colors duration-200 font-medium`}>
                  Acasă
                </Link>
                <Link to="/ro/povestea-noastra" className={`${isActive('/ro/povestea-noastra')} transition-colors duration-200 font-medium`}>
                  Povestea Noastră
                </Link>
                <Link to="/ro/comert-animale" className={`${isActive('/ro/comert-animale')} transition-colors duration-200 font-medium`}>
                  Comerț cu Animale
                </Link>
                <Link to="/ro/galerie" className={`${isActive('/ro/galerie')} transition-colors duration-200 font-medium`}>
                  Galerie
                </Link>
                <Link to="/ro/oferte" className={`${isActive('/ro/oferte')} transition-colors duration-200 font-medium`}>
                  Ofertele Noastre
                </Link>
                <Link to="/ro/contact" className={`${isActive('/ro/contact')} transition-colors duration-200 font-medium`}>
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
                  Home
                </Link>
                <Link to="/story" className={`${isActive('/story')} transition-colors duration-200 font-medium`}>
                  Our Story
                </Link>
                <Link to="/animal-trading" className={`${isActive('/animal-trading')} transition-colors duration-200 font-medium`}>
                  Animal Trading
                </Link>
                <Link to="/gallery" className={`${isActive('/gallery')} transition-colors duration-200 font-medium`}>
                  Gallery
                </Link>
                <Link to="/offerings" className={`${isActive('/offerings')} transition-colors duration-200 font-medium`}>
                  What We Offer
                </Link>
                <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200 font-medium`}>
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {isRomanian ? (
                <>
                  <Link 
                    to="/ro" 
                    className={`${isActive('/ro')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Acasă
                  </Link>
                  <Link 
                    to="/ro/povestea-noastra" 
                    className={`${isActive('/ro/povestea-noastra')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Povestea Noastră
                  </Link>
                  <Link 
                    to="/ro/comert-animale" 
                    className={`${isActive('/ro/comert-animale')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Comerț cu Animale
                  </Link>
                  <Link 
                    to="/ro/galerie" 
                    className={`${isActive('/ro/galerie')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galerie
                  </Link>
                  <Link 
                    to="/ro/oferte" 
                    className={`${isActive('/ro/oferte')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ofertele Noastre
                  </Link>
                  <Link 
                    to="/ro/contact" 
                    className={`${isActive('/ro/contact')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/" 
                    className={`${isActive('/')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/story" 
                    className={`${isActive('/story')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link 
                    to="/animal-trading" 
                    className={`${isActive('/animal-trading')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Animal Trading
                  </Link>
                  <Link 
                    to="/gallery" 
                    className={`${isActive('/gallery')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/offerings" 
                    className={`${isActive('/offerings')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    What We Offer
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`${isActive('/contact')} transition-colors duration-200 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
