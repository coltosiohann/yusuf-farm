import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import yusufkebap from "../../images/yusufkebap.png";
import farm from "../../images/FERMA.jpg";
import { motion } from "framer-motion";

const Offerings = () => {
  const offerings = [
    {
      title: "Restaurant De la Fermă la Masă",
      description:
        "Experimentați o masă excelentă cu ingrediente provenite direct de la ferma noastră. Meniul nostru sezonier prezintă cele mai bune produse locale pregătite de bucătari experți.",
      image: yusufkebap,
      url: "https://yusufkebapdoner.ro/", // External link
      external: true,
    },
    {
      title: "Fermă Durabilă",
      description:
        "Vizitați ferma noastră unde cultivăm legume și fructe organice și creștem animale în libertate. Aflați despre practicile agricole durabile și bucurați-vă de produse proaspete.",
      image: farm,
      url: "/animal-trading", // Internal link
      external: false,
    },
    {
      title: "Magazin și Piață",
      description:
        "Cumpărați produse proaspete, produse artizanale și meșteșuguri locale din magazinul nostru. Luați acasă cele mai bune produse ale Fermei Yusuf și sprijiniți artizanii locali.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      url: "/story", // Internal link
      external: false,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Oferte fermă"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ce Oferim
          </motion.h1>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, staggerChildren: 0.2 },
                },
              }}
            >
              {/* Image Section */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-[#F05742]">
                  {offering.title}
                </h2>
                <p className="text-gray-700 text-lg">{offering.description}</p>

                {/* Conditional Rendering for External vs Internal Links */}
                {offering.external ? (
                  <a
                    href={offering.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Află Mai Multe
                  </a>
                ) : (
                  <Link
                    to={offering.url}
                    className="inline-block mt-6 bg-gradient-to-r from-[#F05742] to-[#B20202] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Află Mai Multe
                  </Link>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offerings;
