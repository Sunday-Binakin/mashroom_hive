import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/images/logo.png';
import { Menu, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white via-amber-50 to-white shadow-md z-50 backdrop-blur-sm overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-2">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 w-20 hover:scale-105 transition-transform duration-300" 
            />
            
          </div>
           {/* Navbar Items - Visible on medium and large screens */}
           <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Innovator', 'Contact Us'].map((item) => (
            // {['Home', 'About', 'Innovator', 'Services', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-700 hover:text-[#1B5E20] hover:scale-110 relative group transition-all duration-300 ease-in-out"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 hover:text-[#1B5E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
            <Link
              to="https://paystack.shop/themushroomhive"
              className="text-lg font-medium text-gray-700 hover:text-[#1B5E20] hover:scale-110 transition-all duration-300 ease-in-out flex items-center"
            >
              <ShoppingCart size={24} className="mr-1" />
              Store
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-amber-100 transition-all duration-300 hover:rotate-180"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 border-t animate-fadeIn w-full">
            <div className="flex flex-col space-y-2 w-full">
              {['Home', 'About', 'Company', 'Services', 'Contact', 'Store'].map((item, index) => (
                <a
                  key={item}
                  href={item === 'Store' ? '/store' : `#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-2 transition-all duration-300 ease-in-out text-center w-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item === 'Store' ? (
                    <span className="flex items-center justify-center">
                      <ShoppingCart size={24} className="mr-1" />
                      {item}
                    </span>
                  ) : (
                    item
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
