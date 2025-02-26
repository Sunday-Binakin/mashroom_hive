import React, { useState } from "react";
// import mushroom from '../images/mushroom_hive.jpg'
import logo from '../../public/images/logo.png'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white via-amber-50 to-white shadow-md z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto md:h-20 md:w-auto hover:scale-105 transition-transform duration-300" 
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Company', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-700 hover:text-amber-600 hover:scale-110 relative group transition-all duration-300 ease-in-out"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-amber-100 transition-all duration-300 hover:rotate-180"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-2 border-t animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Company', 'Services', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-2 transition-all duration-300 ease-in-out text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
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
