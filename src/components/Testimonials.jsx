import React from "react";
import { testimonials } from "../constants/review";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(255, 182, 85, 0.3)" },
};


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black px-6 text-white relative overflow-hidden">
      {/* Decorative floating gradient circles */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full animate-pulse-slow"></div>

      {/* Section Title */}
      <div className="text-center mb-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          What Customers Say
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Real experiences from our beloved customers.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl shadow-xl cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
              />
              <h4 className="text-xl font-semibold text-amber-400">{t.name}</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">{t.message}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
