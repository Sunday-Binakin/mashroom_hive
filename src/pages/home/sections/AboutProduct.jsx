import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import firstMushroom from "../../../../public/images/mushroom_1.jpg"
import secondMushroom from "../../../../public/images/mushroom_2.jpg"
import thirdMushroom from "../../../../public/images/mushroom (1).jpg"
import fourthMushroom from "../../../../public/images/mushroom (3).jpg"
import fifthMushroom from "../../../../public/images/mushroom (4).jpg"
import sixthMushroom from "../../../../public/images/mushroom (5).jpg"
import seventhMushroom from "../../../../public/images/mushroom_7.jpg"

const AboutProduct = () => {
  const products = [
    {
      title: "Lion's Mane",
      category: "Medicinal",
      description: "Supports brain health and immunity",
      color: "bg-amber-50"
    },
    {
      title: "Shiitake",
      category: "Gourmet",
      description: "Rich umami flavor and immune support",
      color: "bg-stone-50"
    },
    {
      title: "Reishi",
      category: "Medicinal",
      description: "Ancient wisdom for modern wellness",
      color: "bg-orange-50"
    },
    {
      title: "Oyster",
      category: "Gourmet",
      description: "Delicate texture and versatile taste",
      color: "bg-yellow-50"
    },
    {
      title: "Chaga",
      category: "Medicinal",
      description: "Powerful antioxidant properties",
      color: "bg-amber-50"
    },
    {
      title: "Cordyceps",
      category: "Medicinal",
      description: "Natural energy and vitality boost",
      color: "bg-stone-50"
    }
  ];

  const features = [
    { title: "Organic", desc: "100% naturally grown without pesticides" },
    { title: "Fresh", desc: "Harvested daily for peak freshness" },
    { title: "Sustainable", desc: "Eco-friendly growing practices" },
    { title: "Premium", desc: "Highest quality standards" }
  ];

  const galleryImages = [
    {
      src: firstMushroom,
      alt: "Fresh mushrooms",
      className: "col-span-1 row-span-2"
    },
    {
      src: secondMushroom,
      alt: "Mushroom variety",
      className: "col-span-1 row-span-1"
    },
    {
      src: thirdMushroom,
      alt: "Organic mushrooms",
      className: "col-span-1 row-span-1"
    },
    {
      src: fourthMushroom,
      alt: "Premium selection",
      className: "col-span-1 row-span-2"
    },
    {
      src: fifthMushroom,
      alt: "Gourmet mushrooms",
      className: "col-span-1 row-span-1"
    },
    {
      src: sixthMushroom,
      alt: "Medicinal mushrooms",
      className: "col-span-1 row-span-1"
    },
    {
      src: seventhMushroom,
      alt: "Gourmet mushrooms",
      className: "col-span-1 row-span-1"
    }
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-stone-50 via-amber-50 to-stone-100 py-16 sm:py-24 lg:py-32 font-['Poppins'] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12 sm:space-y-16 lg:space-y-24"
        >
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6">
            <motion.h2 
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight px-4"
            >
              Discover the Magic of <span className="text-amber-600 relative">
                Mushrooms
                <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 -z-10 transform -rotate-1"></span>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4"
            >
              We cultivate and harvest the finest selection of gourmet and medicinal mushrooms, 
              grown with care in our state-of-the-art facilities.
            </motion.p>
          </div>

          {/* Modified Image Gallery */}
          <div className="space-y-8 sm:space-y-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-stone-800 mb-8 sm:mb-12 lg:mb-16"
            >
              Discover Our <span className="text-amber-600">Finest Mushrooms</span>
            </motion.h3>
            
            {/* Mobile Slider for Images */}
            <div className="block sm:hidden">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={16}
                slidesPerView={1.2}
                centeredSlides={true}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="w-full px-4"
                style={{
                  "--swiper-pagination-color": "#d97706",
                  "--swiper-navigation-color": "#d97706",
                }}
              >
                {galleryImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <motion.div 
                      className="relative overflow-hidden rounded-xl h-[400px]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white font-medium text-lg">{image.alt}</p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid (unchanged) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[250px] lg:auto-rows-[350px]">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.15 }
                  }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-xl sm:rounded-3xl shadow-lg ${
                    index === 0 || index === 3 
                      ? "col-span-1 row-span-1 sm:row-span-2" 
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <p className="text-white font-medium text-base sm:text-lg">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modified Products Section */}
          <div className="block sm:hidden">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className={`${product.color} p-6 rounded-2xl shadow-md`}
                  >
                    <div className="space-y-3">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-amber-700 bg-amber-100">{product.category}</span>
                      <h3 className="text-xl font-bold text-stone-800">{product.title}</h3>
                      <p className="text-base text-stone-600">{product.description}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Products Grid (unchanged) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.15,
                    duration: 0.6
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className={`${product.color} p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500`}
              >
                <div className="space-y-3 sm:space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-amber-700 bg-amber-100">{product.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-800">{product.title}</h3>
                  <p className="text-base sm:text-lg text-stone-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modified Features Section */}
          <div className="block sm:hidden">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">{feature.title}</h3>
                    <p className="text-base text-stone-600">{feature.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Features Grid (unchanged) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-base sm:text-lg text-stone-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProduct;
