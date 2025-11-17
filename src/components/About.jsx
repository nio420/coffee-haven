import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Floating Light Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      {/* Wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        
        {/* Left Image */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
            alt="About Coffee"
            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/20 rounded-3xl group-hover:bg-black/10 transition duration-500"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Café
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We started our journey with a simple belief — <strong>great coffee brings
            people together</strong>. Every cup we serve is made with handpicked beans,
            roasted to perfection, and brewed with passion.
          </motion.p>

          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A warm atmosphere, cozy seating, modern touch, and rich aroma…
            everything is crafted to give you an unforgettable experience.
          </motion.p>

          <motion.button
            className="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
