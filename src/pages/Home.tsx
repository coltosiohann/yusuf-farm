import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F05742] to-[#B20202]">
                Yusuf Farm
              </span>
            </h1>
            <p className="text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
              Discover the beauty of sustainable farming, authentic experiences, 
              and farm-to-table living, all in one extraordinary destination.
            </p>
            <Link
              to="/offerings"
              className="mt-8 inline-flex items-center bg-[#F05742] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#B20202] transition-colors duration-200"
            >
              Explore Our Offerings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B20202] mb-6">
            Why Choose Yusuf Farm?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Yusuf Farm, we believe in creating memorable experiences that connect you with nature, 
            sustainability, and the joys of farm life. Here's what makes us unique:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Card 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-full mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#B20202] mb-2">
                Sustainable Farming
              </h3>
              <p className="text-gray-600">
                We use eco-friendly practices to grow crops that are healthy for you and kind to the planet.
              </p>
            </div>
            {/* Card 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-full mx-auto mb-6">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#B20202] mb-2">
                Farm-to-Table Dining
              </h3>
              <p className="text-gray-600">
                Taste the difference with fresh, locally sourced ingredients in every dish.
              </p>
            </div>
            {/* Card 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-full mx-auto mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-[#B20202] mb-2">
                Family-Friendly Experiences
              </h3>
              <p className="text-gray-600">
                Enjoy fun activities that bring families closer together and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
