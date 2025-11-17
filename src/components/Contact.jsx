import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-black px-6 text-white" id="contact">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6">
            Have questions or want to make a reservation? Reach out to us.
          </p>
          <p className="text-gray-300">
            📍 Location: Dhaka, Bangladesh <br />
            📞 Phone: +880 XXXX-XXX-XXX <br />✉ Email: support@coffeeshop.com
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          className="bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-xl space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 text-white"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 text-white"
          ></textarea>

          <motion.button
            className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
