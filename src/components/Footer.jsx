import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-gray-400 py-6 text-center border-t border-white/10"
    >
      <p>© {new Date().getFullYear()} Coffee Haven. All Rights Reserved.</p>
      <p className="mt-2 text-sm">
        Developed by <span className="text-amber-600">Omit</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
