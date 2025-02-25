import React from "react";
import mushroom from '../images/mushroom_hive.jpg'
// import { FaFacebook } from 'react-icons/fa';
import logo from '../images/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="p-6 flex flex-col">
      <div className="flex flex-row justify-around gap-0.5 md:gap-3 ">
        <div className="flex flex-col mb-4 ">
          <img src={logo} alt="img" className="h-30 w-35 md:h-30 md:w-30" />
          <p className=" mx-4  w-30 h-12 md:w-48 -mt-6 md:text-justify ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut minima est quae</p>
        </div>
        <div className="flex flex-col md:flex-col justify-center mt-6 gap-0.5 md:gap-0">
          <p className="font-semibold md:text-lg hover:text-amber-700 cursor-pointer">Home</p>
          <p className="font-semibold md:text-lg hover:text-amber-700 cursor-pointer">About</p>
          <p className="font-semibold md:text-lg hover:text-amber-700 cursor-pointer">Company</p>
          <p className="font-semibold md:text-lg hover:text-amber-700 cursor-pointer">Services</p>
          <p className="font-semibold md:text-lg hover:text-amber-700 cursor-pointer">Contact</p>
        </div>
        
        <div className="flex flex-col items-center mt-8 gap-2 md:items-start md:gap-2.5 mr-3">
          <p className="text-[13px] font-bold">Additional Resources</p>
          <div className="flex justify-evenly gap-3">
            <FaFacebookF size={30} className="md:w-[30px] w-[30px] h-[30px] md:h-[30px]" />
            <FaInstagram size={30} className="md:w-[30px] w-[30px] h-[30px] md:h-[30px]" />
            <FaWhatsapp size={30} className="md:w-[30px] w-[30px] h-[30px] md:h-[30px]" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-blue-500 underline">info@gmail.com</p>
            <p className="text-blue-500 underline">+233000000000</p>
          </div>
        </div>
      </div>
      <p className="font-bold flex justify-center mt-25">All Right Reserved {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
