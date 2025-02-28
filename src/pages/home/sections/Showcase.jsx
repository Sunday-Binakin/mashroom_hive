import React from "react";

const Showcase = () => {
  const mushrooms = [
    {
      id: 1,
      name: "Shiitake Mushroom",
      image: "/public//images/product_images/A0004.jpg", 
      description: "Rich umami flavor, perfect for Asian cuisine",
      price: "GH₵8.99"
    },
    {
      id: 2,
      name: "Oyster Mushroom",
      image: "/public//images/product_images/A0005.jpg",
      description: "Delicate texture with mild seafood-like flavor",
      price: "GH₵7.99"
    },
    {
      id: 3,
      name: "King Trumpet",
      image: "/public//images/product_images/A0007.jpg",
      description: "Meaty texture with subtle pine notes",
      price: "GH₵9.99"
    },
    {
      id: 4,
      name: "Lion's Mane",
      image: "/public//images/product_images/A0009.jpg", 
      description: "Unique texture, known for cognitive benefits",
      price: "GH₵12.99"
    },
    {
      id: 5,
      name: "Reishi",
      image: "/public//images/product_images/A0010.jpg",
      description: "Traditional medicinal mushroom for wellness",
      price: "GH₵14.99"
    },
    {
      id: 6,
      name: "Maitake",
      image: "/public//images/product_images/A0011.jpg",
      description: "Rich, woodsy flavor with immune benefits",
      price: "GH₵11.99"
    },
    {
      id: 7,
      name: "Enoki",
      image: "/public//images/product_images/A0012.jpg",
      description: "Delicate, crispy texture perfect for soups",
      price: "GH₵6.99"
    },
    {
      id: 8,
      name: "Cordyceps",
      image: "/public//images/product_images/A0013.jpg",
      description: "Energy-boosting medicinal mushroom",
      price: "GH₵15.99"
    },
    {
      id: 9,
      name: "Chaga",
      image: "/public//images/product_images/A0014.jpg",
      description: "Powerful antioxidant properties",
      price: "GH₵13.99"
    },
    {
      id: 10,
      name: "Turkey Tail",
      image: "/public//images/product_images/A0015.jpg",
      description: "Beautiful pattern, immune system support",
      price: "GH₵10.99"
    },
    {
      id: 11,
      name: "Wood Ear",
      image: "/public//images/product_images/A0016.jpg",
      description: "Crunchy texture, great in Asian dishes",
      price: "GH₵8.99"
    },
    {
      id: 12,
      name: "Porcini",
      image: "/public//images/product_images/A0017.jpg", 
      description: "Rich, nutty flavor perfect for Italian cuisine",
      price: "GH₵16.99"
    },
    {
      id: 13,
      name: "King Trumpet",
      image: "/public//images/product_images/A0018.jpg",
      description: "Meaty texture with mild seafood notes",
      price: "GH₵13.99"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => 
          prev === -3 ? 0 : prev - 1
        );
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="py-12 px-6 bg-gray-50 border-b-2">
      <h2 className="text-5xl font-bold text-center mb-12 text-green-600">Explore Our Mushroom Delights</h2>
      <div className="max-w-7xl mx-auto relative">
        <div className="overflow-hidden"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${currentSlide * 25}%)` }}
          >
            {mushrooms.map((mushroom) => (
              <div 
                key={mushroom.id}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={mushroom.image}
                      alt={mushroom.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{mushroom.name}</h3>
                    <p className="text-gray-600 mb-4">{mushroom.description}</p>
                    <p className="text-lg font-bold text-green-600">{mushroom.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
          onClick={() => setCurrentSlide(prev => Math.min(0, prev + 1))}
        >
          &#8592;
        </button>
        
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
          onClick={() => setCurrentSlide(prev => Math.max(-3, prev - 1))}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Showcase;
