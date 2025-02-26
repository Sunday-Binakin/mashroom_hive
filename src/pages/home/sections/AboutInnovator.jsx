import React from 'react';
import Innovator from '../../../../public/images/innovator.jpg';

const AboutInnovator = () => {
  return (
    <>
    <div className="text-center mb-12">
      <h1 className="text-6xl font-extrabold text-[#1B5E20] mb-4">About Innovator</h1>
      {/* <p className="text-lg text-[#1B5E20]">Explore the vision and creativity that drives our innovative journey.</p> */}
    </div>

    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-300 p-8 border-b-2">
      {/* Page Heading */}
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#1B5E20] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 border-4 border-[#1B5E20] rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-40 right-10 w-36 h-36 bg-[#1B5E20] opacity-15 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#1B5E20] opacity-15 rotate-45 animate-bounce"></div>

      {/* Main Card Container */}
      <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row max-w-5xl transition-transform duration-500 transform hover:scale-105">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={Innovator}
            alt="Innovator"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#1B5E20] transition-colors duration-300 hover:text-[#1B5E20]">Welcome to Our Innovator's Journey!</h2>
          <p className="text-[#1B5E20] mt-4 text-base leading-relaxed">
            Discover the passion and dedication behind our innovative solutions. Our team is committed to excellence and sustainability, ensuring that every step we take is towards a better future.
          </p>
          {/* <p className="text-xs text-[#1B5E20] mt-4">
            Images from <a href="#" className="text-[#1B5E20] underline hover:text-[#1B5E20]">Freepik</a>
          </p> */}
          {/* <button className="mt-6 bg-[#1B5E20] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#1B5E20] transition transform hover:scale-105">
            LEARN MORE
          </button> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutInnovator;