import React from "react";
import story1 from "../../images/story1.jpg"; // Importing the first image
import story2 from "../../images/taur_story.jpg"; // Importing the second image
import { motion } from "framer-motion";

const StoryRo = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Peisaj fermă"
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
            Povestea Noastră
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
              O Moștenire a Excelenței
            </h2>
            <p className="text-gray-700 mb-4">
              Ferma Yusuf, înființată în 1920, nu este doar o fermă, ci un
              testament viu al unei moșteniri care se întinde pe sute de ani.
              Așezată într-un peisaj rural liniștit, această fermă remarcabilă
              este construită pe tradiții de agricultură sustenabilă și creșterea
              etică a animalelor, transmise din generație în generație.
            </p>
            <p className="text-gray-700 mb-4">
              La baza Fermei Yusuf se află comerțul său prosper cu animale,
              specializat în creșterea și comercializarea taurilor, oilor și altor
              animale. Fiecare animal este crescut cu cea mai mare grijă, având
              acces la pășuni întinse și o dietă echilibrată.
            </p>
            <p className="text-gray-700">
              Vizitatorii fermei Yusuf sunt adesea captivați de frumusețea sa
              liniștită, unde colinele ondulate se întâlnesc cu cerul deschis.
              Este un loc unde poți observa grija meticuloasă oferită fiecărui
              aspect al agriculturii, inspirându-i pe toți să se reconecteze cu
              natura.
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
              alt="Ferma istorică"
              className="rounded-lg shadow-lg"
            />
            <img
              src={story2}
              alt="Ferma modernă"
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
            Valorile Noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <motion.div
              className="text-center p-8 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-4">Sustenabilitate</h3>
              <p>
                Implementăm practici agricole ecologice și soluții de energie
                regenerabilă pentru a minimiza impactul asupra mediului.
              </p>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div
              className="text-center p-8 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-4">Comunitate</h3>
              <p>
                Credem în sprijinirea comunităților locale prin locuri de muncă,
                educație și producție alimentară durabilă.
              </p>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div
              className="text-center p-8 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-4">Inovație</h3>
              <p>
                Explorăm continuu noi tehnici și tehnologii agricole pentru a ne
                îmbunătăți operațiunile și produsele.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default StoryRo;
