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
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto md:h-24 md:w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-12">
            {['Home', 'About', 'Company', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold text-gray-700 hover:text-amber-600 transition-colors duration-200 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-6">
              {['Home', 'About', 'Company', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-semibold text-gray-700 hover:text-amber-600 transition-colors duration-200 ease-in-out text-center"
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
