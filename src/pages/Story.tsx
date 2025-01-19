import React from "react";
import story1 from "../images/story1.jpg"; // Importing the first image
import story2 from "../images/taur_story.jpg"; // Importing the second image
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Farm landscape"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#B20202]">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-700 mb-4">
              Yusuf Farm, established in 1920, is not just a farm but a living
              testament to a legacy that spans hundreds of years. Nestled in the
              serene countryside, this remarkable sanctuary is built upon
              traditions of sustainable farming and ethical animal husbandry
              that have been passed down through generations.
            </p>
            <p className="text-gray-700 mb-4">
              At the heart of Yusuf Farm lies its thriving livestock trade,
              specializing in the rearing and trading of bulls, sheep, and other
              livestock. Each animal is raised with the utmost care, enjoying
              expansive, verdant pastures and a balanced diet.
            </p>
            <p className="text-gray-700">
              Visitors to Yusuf Farm are often captivated by its tranquil
              beauty, where rolling hills meet open skies. It’s a place where
              you can witness the meticulous care given to every aspect of
              farming, inspiring all who visit to reconnect with nature.
            </p>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={story1}
              alt="Historic farm"
              className="rounded-lg shadow-lg"
            />
            <img
              src={story2}
              alt="Modern farm"
              className="rounded-lg shadow-lg mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-[#B20202]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <motion.div
              className="text-center p-8 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p>
                We implement eco-friendly farming practices and renewable energy
                solutions to minimize our environmental impact.
              </p>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div
              className="text-center p-8 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p>
                We believe in supporting local communities through employment,
                education, and sustainable food production.
              </p>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div
              className="text-center p-8 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>
                We continuously explore new farming techniques and technologies
                to improve our operations and products.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Story;
