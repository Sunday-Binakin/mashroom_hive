import React from "react";
// import mushroom from '../images/mushroom_hive.jpg'
// import { FaFacebook } from 'react-icons/fa';
import logo from '../../public/images/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4 group">
            <div className="transform transition-all duration-500 hover:scale-105">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-6 w-fit">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-20 sm:h-28 w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light font-['Poppins']">
                Innovating sustainable solutions for a greener tomorrow. Join us in making a difference.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-emerald-800 relative inline-block font-['Poppins']">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500 transform origin-left transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {['Home', 'About', 'Company', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-emerald-600 transform hover:translate-x-2 transition-all duration-300 w-fit text-base sm:text-lg group font-['Poppins']"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 relative inline-block font-['Poppins']">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
            </h3>
            
            {/* Social Icons */}
            <div className="flex space-x-4 sm:space-x-6">
              {[
                { Icon: FaFacebookF, color: "hover:bg-blue-600" },
                { Icon: FaInstagram, color: "hover:bg-pink-600" },
                { Icon: FaWhatsapp, color: "hover:bg-green-600" }
              ].map(({ Icon, color }) => (
                <a 
                  key={color}
                  href="#"
                  className={`p-3 rounded-full bg-white shadow-lg transform hover:-translate-y-2 transition-all duration-500 ${color} hover:text-white group`}
                >
                  <Icon size={24} className="transform transition-transform group-hover:rotate-12" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="mailto:info@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group text-base sm:text-lg font-['Poppins']"
              >
                <span className="relative">
                  info@gmail.com
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a 
                href="tel:+233000000000"
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group text-base sm:text-lg font-['Poppins']"
              >
                <span className="relative">
                  +233 000 000 000
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm sm:text-base font-['Poppins']">
            © {new Date().getFullYear()} All Rights Reserved • 
            <span className="text-emerald-600 animate-pulse"> ❤ </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// KJDcu34?83#Sw9R