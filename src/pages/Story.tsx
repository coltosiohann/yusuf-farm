import React from "react";
import story1 from "../images/story1.jpg"; // Importing the first image
import story2 from "../images/story2.jpg"; // Importing the second image (add this file in your project structure)

const Story = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#B20202]">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-700 mb-4">
            Yusuf Farm, established in 2018, is not just a farm but a living testament to a legacy that spans hundreds of years. Nestled in the serene countryside, 
            this remarkable sanctuary is built upon traditions of sustainable farming and ethical animal husbandry that have been passed down through generations. 
            Though modern in its operations, Yusuf Farm retains the soul of a bygone era, where the bond between humans and nature was unbreakable, and the land was
             cherished as a sacred trust.
            </p>
            <p className="text-gray-700 mb-4">
            At the heart of Yusuf Farm lies its thriving livestock trade, specializing in the rearing and trading of bulls, sheep, and other livestock. Each animal
             is raised with the utmost care, enjoying expansive, verdant pastures, a balanced diet, and a life that honors their natural rhythms. This dedication to 
             excellence ensures that every animal embodies the highest standards of health, quality, and ethical treatment.
             But Yusuf Farm is more than just a business—it’s a celebration of heritage and a commitment to the future. Generations of farming wisdom have 
             shaped its practices, blending time-honored methods with cutting-edge agricultural innovations. This harmonious balance not only nurtures the animals
              but also preserves the health of the soil and the surrounding ecosystem, creating a sustainable model for generations to come.
            </p>
            <p className="text-gray-700">
            Visitors to Yusuf Farm are often captivated by its tranquil beauty, where rolling hills meet open skies, and the rhythmic sounds of nature provide a 
            soothing backdrop. It’s a place where you can witness the meticulous care given to every aspect of farming, from the planting of crops to the nurturing 
            of livestock. This deep respect for the land and its creatures is palpable in every corner of the farm, inspiring all who visit to reconnect with nature
             and appreciate its bounty.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src={story1}
              alt="Historic farm"
              className="rounded-lg shadow-lg"
            />
            <img
              src={story2} // Use the second imported image here
              alt="Modern farm"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#B20202]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="text-center p-6 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p>
                We implement eco-friendly farming practices and renewable energy solutions to minimize our environmental impact.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="text-center p-6 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p>
                We believe in supporting local communities through employment, education, and sustainable food production.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="text-center p-6 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>
                We continuously explore new farming techniques and technologies to improve our operations and products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
