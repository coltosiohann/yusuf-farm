import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Farm landscape"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 h-full flex items-center justify-center text-center">
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Discover{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Yusuf Farm
              </span>
            </h1>
            <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto text-gray-100">
              Where sustainability meets luxury. Experience nature like never before.
            </p>
            <motion.div
              className="flex justify-center mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/offerings"
                className="px-8 py-4 bg-red-500 hover:bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300"
              >
                Explore Offerings <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Why Choose Yusuf Farm?
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Card 1 */}
            <motion.div
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                🌱
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-gray-800">Sustainable Farming</h3>
                <p className="mt-3 text-gray-600">
                  Eco-friendly practices that benefit both the planet and your plate.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                🍽️
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-gray-800">Farm-to-Table Dining</h3>
                <p className="mt-3 text-gray-600">
                  Indulge in fresh, locally sourced ingredients with every meal.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                💚
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-gray-800">Family-Friendly Experiences</h3>
                <p className="mt-3 text-gray-600">
                  Activities for all ages that build memories for a lifetime.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
