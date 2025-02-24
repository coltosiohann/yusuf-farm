import React, { useState } from 'react';
import glr1 from '../../images/glr1.jpg';
import glr2 from '../../images/glr2.jpg';
import glr3 from '../../images/glr3.jpg';
import glr4 from '../../images/glr4.jpg';
import glr5 from '../../images/glr5.jpg';
import glr6 from '../../images/glr6.jpg';
import glr7 from '../../images/glr7.jpg';
import glr8 from '../../images/glr8.jpg';
import glr9 from '../../images/glr9.jpg';
import glr10 from '../../images/glr10.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Datele pentru imagini locale
  const images = [
    { url: glr1, title: "Peisaj Fermă", category: "Peisaje" },
    { url: glr2, title: "Vaci la Pășunat", category: "Animale" },
    { url: glr3, title: "Vaci Premium", category: "Animale" },
    { url: glr4, title: "De la Fermă la Masă", category: "Mâncare" },
    { url: glr5, title: "Magazin de Fermă", category: "Magazin" },
    { url: glr6, title: "Oi Tradiționale", category: "Animale" },
    { url: glr7, title: "Cai de Spectacol", category: "Animale" },
    { url: glr8, title: "Legume Organice", category: "Produse" },
    { url: glr9, title: "Viața la Fermă", category: "Peisaje" },
    { url: glr10, title: "Apus peste Fermă", category: "Peisaje" },
  ];

  return (
    <div className="bg-white">
      {/* Imaginea principală */}
      <div className="relative h-[400px]">
        <img src={glr1} alt="Galerie Fermă" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Galeria Noastră</h1>
        </div>
      </div>

      {/* Grila de imagini */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pentru vizualizare imagine completă */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Imagine mărită"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
