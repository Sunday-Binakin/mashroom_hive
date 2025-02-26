import React from "react";
import firstMushroom from "../../../../public/images/mushroom_1.jpg"
import secondMushroom from "../../../../public/images/mushroom_2.jpg"

const AboutProduct = () => {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-stone-100 py-16 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-stone-800 leading-tight">
              Discover the Magic of <span className="text-amber-600"> Mushrooms</span>
            </h2>
            <p className="text-lg text-stone-600">
              We cultivate and harvest the finest selection of gourmet and medicinal mushrooms, 
              grown with care in our state-of-the-art facilities.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">Organic</h3>
                <p className="text-stone-600">100% naturally grown without pesticides</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">Fresh</h3>
                <p className="text-stone-600">Harvested daily for peak freshness</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={firstMushroom} 
              alt="Fresh mushrooms" 
              className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            />
            <img 
              src={secondMushroom} 
              alt="Mushroom variety" 
              className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
