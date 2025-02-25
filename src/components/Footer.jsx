import React from "react";
// import mushroom from '../images/mushroom_hive.jpg'
// import { FaFacebook } from 'react-icons/fa';
import logo from '../../public/images/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="p-6 flex flex-col bg-[#f5fff5]">
      <div className="flex flex-row justify-around mx-5 gap-2.5 md:gap-3 ">
      {/* <div className="flex flex-row justify-between mx-5 gap-2.5 md:gap-3 "> */}
        <div className="flex flex-col md:flex-row mb-4 md:w-[50rem] ">
        {/* <div className="flex flex-col md:flex-row mb-4 md:w-[50rem] bg-amber-300"> */}
          <img src={logo} alt="img" className="h-30 w-35 md:h-70 md:w-70" />
          <p className="px-4 w-30 h-12 md:w-48 -mt-6 md:text-2xl md:mt-16 md:ml-8 md:text-justify text-center">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div className="flex flex-col md:flex-col justify-center mt-6 gap-0.5 md:gap-0 md:w-[25rem]  items-center">
        {/* <div className="flex flex-col md:flex-col justify-center mt-6 gap-0.5 md:gap-0 md:w-[25rem] bg-amber-400 items-center"> */}
          <p className="font-semibold md:text-3xl hover:text-amber-700 cursor-pointer">Home</p>
          <p className="font-semibold md:text-3xl hover:text-amber-700 cursor-pointer">About</p>
          <p className="font-semibold md:text-3xl hover:text-amber-700 cursor-pointer">Company</p>
          <p className="font-semibold md:text-3xl hover:text-amber-700 cursor-pointer">Services</p>
          <p className="font-semibold md:text-3xl hover:text-amber-700 cursor-pointer">Contact</p>
        </div>
        
        <div className="flex flex-col items-center mt-8 gap-2 md:items-start md:gap-2.5 mr-3 md:w-[25rem]  ">
        {/* <div className="flex flex-col items-center mt-8 gap-2 md:items-start md:gap-2.5 mr-3 md:w-[25rem] bg-green-400"> */}
          <p className="text-[15px] font-bold text-center md:text-2xl md:mt-8 md:flex md:justify-center md:mx-auto">Additional Resources</p>
          <div className="flex justify-evenly gap-3 md:flex md:justify-center md:mx-auto">
            <FaFacebookF size={30} className="md:w-[30px] w-[20px] h-[30px] md:h-[30px]" />
            <FaInstagram size={30} className="md:w-[30px] w-[20px] h-[30px] md:h-[30px]" />
            <FaWhatsapp size={30} className="md:w-[30px] w-[20px] h-[30px] md:h-[30px]" />
          </div>
          <div className="text-center md:text-left md:flex md:flex-col md:justify-center md:mx-auto gap-3">
            <p className="text-blue-500 text-xs underline">info@gmail.com</p>
            <p className="text-blue-500 text-xs underline">+233000000000</p>
          </div>
        </div>
      </div>
      <p className="font-bold flex justify-center mt-25 md:mt-1">All Right Reserved {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
