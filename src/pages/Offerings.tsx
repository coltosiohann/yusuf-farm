import React from "react";

// Import images
import yusufkebap from "../images/yusufkebap.png";
import farm from "../images/story1.jpg";

const Offerings = () => {
  const offerings = [
    {
      title: "Farm-to-Table Restaurant",
      description:
        "Experience exquisite dining with ingredients sourced directly from our farm. Our seasonal menu showcases the best of local produce prepared by expert chefs.",
      image: yusufkebap, // Imported image
      url: "https://yusufkebapdoner.ro/", // Add URL for this offering
    },
    {
      title: "Sustainable Farm",
      description:
        "Visit our working farm where we grow organic vegetables, fruits, and raise free-range livestock. Learn about sustainable farming practices and enjoy fresh produce.",
      image: farm, // Imported image
      url: "./", // Add URL for this offering
    },
    {
      title: "Farm Store & Market",
      description:
        "Shop for fresh produce, artisanal products, and local crafts in our farm store. Take home the best of Yusuf Farm's products and support local artisans.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      url: "./", // Add URL for this offering
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Farm offerings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">What We Offer</h1>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={offering.image} // Use dynamic image from imported paths
                  alt={offering.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#B20202]">
                  {offering.title}
                </h2>
                <p className="text-gray-700 text-lg">{offering.description}</p>
                <a
                  href={offering.url} // Use the URL property
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security attributes for external links
                  className="inline-block mt-6 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
