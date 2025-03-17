import React, { useState } from "react";
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
import Showcase from "./Showcase";

const AboutProduct = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const products = [
    {
      title: "Lion's Mane",
      category: "medicinal",
      description: "Supports brain health and immunity",
      image: firstMushroom,
      benefits: ["Memory Enhancement", "Nerve Health", "Mental Clarity"]
    },
    {
      title: "Shiitake",
      category: "gourmet",
      description: "Rich umami flavor and immune support",
      image: secondMushroom,
      benefits: ["Heart Health", "Immune Support", "Rich in Vitamins"]
    },
    {
      title: "Reishi",
      category: "medicinal",
      description: "Ancient wisdom for modern wellness",
      image: thirdMushroom,
      benefits: ["Immune Support", "Stress Reduction", "Heart Health"]
    },
    {
      title: "Oyster",
      category: "gourmet",
      description: "Delicate texture and versatile taste",
      image: fourthMushroom,
      benefits: ["Heart Health", "Immune Support", "Rich in Vitamins"]
    },
    {
      title: "Chaga",
      category: "medicinal",
      description: "Powerful antioxidant properties",
      image: fifthMushroom,
      benefits: ["Immune Support", "Antioxidant", "Heart Health"]
    },
    {
      title: "Cordyceps",
      category: "medicinal",
      description: "Natural energy and vitality boost",
      image: sixthMushroom,
      benefits: ["Energy Boost", "Immune Support", "Heart Health"]
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
    <div id="about" className="min-h-screen bg-[#f5fff5] text-[#1b5e20] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#2e7d32] via-[#1b5e20] to-[#2e7d32] bg-clip-text text-transparent"
          >
            Mushroom Magic
          </motion.h1>
          <motion.p 
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            className="mt-6 text-xl text-[#2e7d32]/80"
          >
            Discover the healing power of nature's most mysterious organisms
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-16">
          {['all', 'medicinal', 'gourmet'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all
                ${activeCategory === category 
                  ? 'bg-[#2e7d32] text-white' 
                  : 'bg-transparent border border-[#2e7d32]/30 text-[#2e7d32]/70 hover:border-[#2e7d32]'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Modified for mobile slider */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(product => activeCategory === 'all' || product.category === activeCategory)
            .map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2e7d32]/10 to-[#1b5e20]/20 backdrop-blur-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e20] via-[#1b5e20]/50 to-transparent opacity-60"/>
                <div className="absolute bottom-0 p-6 space-y-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-[#2e7d32]/20 text-[#2e7d32]">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                  <p className="text-white/80">{product.description}</p>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="text-[#2e7d32]">✦</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Mobile Products Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full"
          >
            {products
              .filter(product => activeCategory === 'all' || product.category === activeCategory)
              .map((product, index) => (
                <SwiperSlide key={product.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2e7d32]/10 to-[#1b5e20]/20 backdrop-blur-sm"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e20] via-[#1b5e20]/50 to-transparent opacity-60"/>
                    <div className="absolute bottom-0 p-6 space-y-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-[#2e7d32]/20 text-[#2e7d32]">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                      <p className="text-white/80">{product.description}</p>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                            <span className="text-[#2e7d32]">✦</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* Features Section - Modified for mobile slider */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-4">
              Our Quality Promise
            </h2>
            <p className="text-xl text-[#1b5e20]/80 max-w-2xl mx-auto">
              Every mushroom we offer meets these exacting standards, ensuring you receive nature's finest
            </p>
          </motion.div>

          {/* Desktop Features Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#2e7d32]/10 to-[#1b5e20]/20 border border-[#2e7d32]/10 hover:border-[#2e7d32]/30 transition-all"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#2e7d32]/10 flex items-center justify-center">
                  <span className="text-[#2e7d32]">✦</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2e7d32] mb-2">{feature.title}</h3>
                <p className="text-[#1b5e20]/80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Features Slider */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              className="w-full"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-[#2e7d32]/10 to-[#1b5e20]/20 border border-[#2e7d32]/10 hover:border-[#2e7d32]/30 transition-all"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full bg-[#2e7d32]/10 flex items-center justify-center">
                      <span className="text-[#2e7d32]">✦</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2e7d32] mb-2">{feature.title}</h3>
                    <p className="text-[#1b5e20]/80">{feature.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
