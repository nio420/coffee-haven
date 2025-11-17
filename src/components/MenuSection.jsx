import React from "react";
import MenuCard from "./MenuCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const menuItems = [
  { id: 1, name: "Espresso", price: "$3.50", category: "Hot" },
  { id: 2, name: "Cappuccino", price: "$4.50", category: "Hot" },
  { id: 3, name: "Latte", price: "$4.75", category: "Hot" },
  { id: 4, name: "Macchiato", price: "$3.75", category: "Hot" },
  { id: 5, name: "Mocha", price: "$5.00", category: "Hot" },
  { id: 6, name: "Americano", price: "$3.25", category: "Hot" },
  { id: 7, name: "Flat White", price: "$4.25", category: "Hot" },
  { id: 8, name: "Frappuccino", price: "$5.50", category: "Cold" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(255, 182, 85, 0.3)" },
};

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="py-20 px-6 bg-linear-to-b from-black via-black/90 to-black relative overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-14 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Special Menu
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore our handcrafted coffee collection made with rich flavors and passion.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover="hover"
          >
            <MenuCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MenuSection;
