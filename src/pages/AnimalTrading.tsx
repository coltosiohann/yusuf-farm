import React from 'react';

// Import images
import bull  from '../images/bull.jpg';
import sheep from '../images/sheep.jpg';
import halal from '../images/halal.jpg';


const AnimalTrading = () => {
  const animals = [
    {
      title: "Bull Trading",
      description: "Trading premium bulls ensures access to top-tier genetics, enhancing herd quality and productivity for beef and dairy farming operations.",
       image: bull,
    },
    {
      title: "Sheep Trading",
      description: "Trading premium sheep provides superior genetics for exceptional wool quality, meat production, and sustainable breeding practices.",
      image: sheep, // Use imported image
    },
    {
      title: "Halal Certificate",
      description: "Halal refers to food and practices that comply with Islamic dietary laws, emphasizing cleanliness, ethical sourcing, and humane treatment.",
      image: halal, // Use imported image
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1554747706-2e474e1ae0c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Animal Trading"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Animal Trading</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#B20202]">Premium Livestock Trading</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Yusuf Farm, we specialize in the ethical trading of premium livestock, 
            connecting breeders with quality animals while ensuring the highest 
            standards of animal welfare and breeding excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {animals.map((animal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#F05742]">
              <div className="h-64 overflow-hidden">
                <img
                  src={animal.image} // Use dynamic image from imported paths
                  alt={animal.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#F05742]">{animal.title}</h3>
                <p className="text-gray-600">{animal.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F05742] text-white rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">Our Trading Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
              <p className="text-white">
                Every animal in our trading program undergoes thorough health checks 
                and genetic verification to ensure the highest quality standards.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Ethical Practices</h4>
              <p className="text-white">
                We prioritize animal welfare and sustainable breeding practices in 
                all our trading operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalTrading;
