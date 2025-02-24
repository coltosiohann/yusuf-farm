import React from "react";
import bull from "../../images/bull.jpg";
import sheep from "../../images/sheep.jpg";
import halal from "../../images/halal.jpg";
import { motion } from "framer-motion";

const AnimalTradingRo = () => {
  const animals = [
    {
      title: "Comerț cu Tauri",
      description:
        "Comerțul cu tauri premium asigură accesul la genetică de top, îmbunătățind calitatea efectivului și productivitatea fermelor de carne și lactate.",
      image: bull,
    },
    {
      title: "Comerț cu Oi",
      description:
        "Comerțul cu oi premium oferă genetică superioară pentru lână de calitate excepțională, producție de carne și practici de creștere sustenabile.",
      image: sheep,
    },
    {
      title: "Certificat Halal",
      description:
        "Halal se referă la alimente și practici care respectă legile dietetice islamice, punând accent pe curățenie, surse etice și tratament uman.",
      image: halal,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Secțiunea Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1554747706-2e474e1ae0c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Comerț cu Animale"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Comerț cu Animale
          </motion.h1>
        </div>
      </section>

      {/* Secțiunea de Introducere */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#B20202]">
            Comerț Premium cu Animale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Ferma Yusuf, ne specializăm în comerțul etic cu animale premium, 
            conectând crescătorii cu animale de calitate și asigurând cele mai înalte 
            standarde de bunăstare a animalelor și excelență în creștere.
          </p>
        </motion.div>

        {/* Secțiunea Carduri */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {animals.map((animal, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#F05742] transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#F05742]">
                  {animal.title}
                </h3>
                <p className="text-gray-600">{animal.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secțiunea Standardele Comerțului */}
        <motion.div
          className="bg-[#F05742] text-white rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Standardele Noastre de Comerț</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Asigurarea Calității</h4>
              <p className="text-white">
                Fiecare animal din programul nostru de comerț trece prin verificări 
                complete de sănătate și verificare genetică pentru a asigura cele mai 
                înalte standarde de calitate.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Practici Etice</h4>
              <p className="text-white">
                Prioritizăm bunăstarea animalelor și practicile durabile de creștere 
                în toate operațiunile noastre comerciale.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AnimalTradingRo;
