import React, { useState } from "react";
import mushroom from '../images/mushroom_hive.jpg'
import logo from '../images/logo.png'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-6 flex flex-col ">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-30 w-30" />
        </div>
        <div className="hidden md:flex justify-around gap-8">
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Home</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">About</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Company</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Services</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Contact</p>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={50} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4">
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Home</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">About</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Company</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Services</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Contact</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
