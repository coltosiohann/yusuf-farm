import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Contact us"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#B20202]">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8">
              We'd love to hear from you! Whether you have questions about our
              offerings, want to make a reservation, or are interested in
              organizing an event, please don't hesitate to reach out.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#F05742] mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+40732800000"
                    className="text-gray-600 underline hover:text-[#F05742] transition duration-200"
                  >
                    +40732800000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#F05742] mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:yowsef@yusuf-farm.ro"
                    className="text-gray-600 underline hover:text-[#F05742] transition duration-200"
                  >
                    yowsef@yusuf-farm.ro
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#F05742] mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">J8FV+P54, ROMANIA 117036</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white p-8 rounded-lg shadow-lg border border-[#F05742]">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05742] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05742] focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05742] focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F05742] to-[#B20202] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
