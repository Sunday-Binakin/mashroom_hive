import React from "react";

const AboutInnovator = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[#f5fff5]">
        <div className="absolute inset-0 bg-[radial-gradient(#d1ffd1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Column */}
            <div className="relative h-[600px] lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/90 to-green-500/90 mix-blend-multiply"></div>
              <img
                src="/path-to-innovator-image.jpg"
                alt="Innovator Portrait"
                className="h-full w-full object-cover"
              />
              
              {/* Floating Achievement Cards */}
              <div className="absolute top-8 -right-12 bg-white rounded-xl p-4 shadow-xl transform rotate-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-[#f5fff5] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -left-12 bg-white rounded-xl p-4 shadow-xl transform -rotate-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-[#f5fff5] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">50+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
                    Meet Our Innovator
                  </h3>
                  <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                    John Doe
                  </h2>
                  <p className="mt-2 text-xl text-emerald-600">
                    Founder & Chief Innovation Officer
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  A visionary leader with an unwavering commitment to innovation, 
                  John has been at the forefront of transformative solutions in 
                  [industry]. His unique perspective and strategic approach have 
                  revolutionized how businesses navigate the digital landscape.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {/* Expertise Areas */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-emerald-100"></div>
                      <span className="text-sm font-medium text-emerald-600">Expertise</span>
                      <div className="h-px flex-1 bg-emerald-100"></div>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Strategic Innovation
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Digital Transformation
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Business Strategy
                      </li>
                    </ul>
                  </div>

                  {/* Education/Certifications */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-emerald-100"></div>
                      <span className="text-sm font-medium text-emerald-600">Education</span>
                      <div className="h-px flex-1 bg-emerald-100"></div>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                        MBA, Harvard Business School
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                        BS, Computer Science
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-full hover:from-emerald-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl">
                    Connect with Me
                  </button>
                  <button className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-[#f5fff5] transition-all">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
