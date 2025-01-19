import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Yusuf Farm</h3>
            <p className="text-gray-300">
              Bringing nature's best to your table, creating memorable experiences through sustainable farming.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: 
              <a 
                href="mailto:yowsef@yusuf-farm.ro" 
                className="text-gray-300 underline hover:text-white"
              >
                yowsef@yusuf-farm.ro
              </a>
            </p>
            <p className="text-gray-300">
              Phone: 
              <a 
                href="tel:+0799619999" 
                className="text-gray-300 underline hover:text-white"
              >
                +0799619999
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Yusuf-Farm/100090386741176/" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/yusuffarmromania/" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Yusuf Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
