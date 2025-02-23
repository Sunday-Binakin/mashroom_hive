import React from "react";
import mushroom from '../images/mushroom_hive.jpg'
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="p-6 flex justify-center   bg-gray-100">
    {/* <div className="p-6 flex justify-center align-middle bg-gray-700"> */}
      {/* <h4 className="text-xl font-bold text-white">Footer</h4> */}
      <div>
        <img src= {mushroom} alt="img" />
        <div>
          about company
        </div>
        <div className="flex flex-col">
        <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Home</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">About</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Company</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Services</p>
          <p className="font-semibold text-lg hover:text-amber-700 cursor-pointer">Contact</p>
        </div>
        <div>
          <p>Additional Resources</p>
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
