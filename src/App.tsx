import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import AnimalTrading from './pages/AnimalTrading';
import Gallery from './pages/Gallery';
import Offerings from './pages/Offerings';
import Contact from './pages/Contact';

// Romanian pages
import HomeRo from './pages/ro/Home';
import StoryRo from './pages/ro/Story';
import AnimalTradingRo from './pages/ro/AnimalTrading';
import GalleryRo from './pages/ro/Gallery';
import OfferingsRo from './pages/ro/Offerings';
import ContactRo from './pages/ro/Contact';

// Language Selector Component
function LanguageSelector() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isRomanian = pathname.startsWith('/ro');

  const getEquivalentPath = () => {
    if (isRomanian) {
      // Map all Romanian routes to English
      return '/' + pathname
        .replace('/ro/', '')
        .replace('/ro', '')
        .replace('povestea-noastra', 'story')
        .replace('comert-animale', 'animal-trading')
        .replace('galerie', 'gallery')
        .replace('oferte', 'offerings')
        .replace('contact', 'contact')
        || '/';
    } else {
      // Map all English routes to Romanian
      const path = pathname === '/' ? '' : pathname;
      return '/ro' + path
        .replace('/story', '/povestea-noastra')
        .replace('/animal-trading', '/comert-animale')
        .replace('/gallery', '/galerie')
        .replace('/offerings', '/oferte')
        .replace('/contact', '/contact');
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className="relative">
        {/* Main button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-black bg-opacity-80 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {isRomanian ? 'RO' : 'EN'}
          </span>
        </button>

        {/* Dropdown menu */}
        <div
          className={`absolute bottom-full left-0 mb-2 transform ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          } transition-all duration-200 origin-bottom-left`}
        >
          <Link
            to={getEquivalentPath()}
            onClick={() => setIsOpen(false)}
            className="block w-48 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-3 hover:bg-gray-50 transition-colors duration-200">
              <div className="font-medium text-gray-900">
                {isRomanian ? 'English' : 'Română'}
              </div>
              <div className="text-sm text-gray-500">
                {isRomanian ? 'Switch to English' : 'Schimbă în Română'}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* English routes */}
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/animal-trading" element={<AnimalTrading />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Romanian routes */}
            <Route path="/ro" element={<HomeRo />} />
            <Route path="/ro/povestea-noastra" element={<StoryRo />} />
            <Route path="/ro/comert-animale" element={<AnimalTradingRo />} />
            <Route path="/ro/galerie" element={<GalleryRo />} />
            <Route path="/ro/oferte" element={<OfferingsRo />} />
            <Route path="/ro/contact" element={<ContactRo />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <LanguageSelector />
      </div>
    </Router>
  );
}

export default App;