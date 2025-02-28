import React from 'react';
import Innovator from '../../../../public/images/innovator.jpg';

const AboutInnovator = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-primary/10 to-white py-16 md:py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                About <span className="text-primary">Innovator</span>
              </h2>
              <div className="w-20 md:w-24 h-1 bg-primary/80"></div>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Discover the passion and dedication behind our innovative solutions. Our team is committed to excellence and sustainability, ensuring that every step we take is towards a better future.
            </p>
            
            {/* Feature Points - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {[
                { title: "Innovation", description: "Pushing boundaries with creative solutions" },
                { title: "Excellence", description: "Committed to highest quality standards" },
                { title: "Sustainability", description: "Building for a better tomorrow" },
                { title: "Leadership", description: "Guiding the way forward" }
              ].map(({ title, description }, index) => (
                <div key={index} className="group p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
                  <h3 className="font-semibold text-primary text-lg md:text-xl mb-2 md:mb-3">{title}</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 group">
              <img
                src={Innovator}
                alt="Innovator"
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden md:block absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border-2 border-primary/40 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="hidden md:block absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/40 rounded-2xl -z-10 transition-transform duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInnovator;