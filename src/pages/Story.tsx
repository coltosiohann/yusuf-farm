import React from 'react';

const Story = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">A Legacy of Excellence</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1985, Yusuf Farm began as a small family operation with a big dream: to create a sustainable farm
              that would serve the community while preserving the environment for future generations.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown from a modest farm into a diverse agricultural enterprise, but our core values
              remain the same: commitment to quality, respect for nature, and dedication to our community.
            </p>
            <p className="text-gray-600">
              Today, Yusuf Farm is proud to offer not just fresh produce and farm products, but also unique dining
              experiences and educational opportunities for visitors of all ages.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Historic farm"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Modern farm"
              className="rounded-lg mt-8"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We implement eco-friendly farming practices and renewable energy solutions to minimize our environmental impact.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in supporting local communities through employment, education, and sustainable food production.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
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