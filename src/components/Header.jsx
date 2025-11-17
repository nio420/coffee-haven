import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaBars } from "react-icons/fa6";
import { X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const favorites = useSelector((state) => state.favorites.items);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  // NAV ITEMS
  const navItems = [
    { title: "Home", link: "#hero" },
    { title: "Menu", link: "#menu" },
    { title: "About", link: "#about" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "Contact", link: "#contact" },
  ];

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120, // controls the speed/sharpness
        damping: 15, // controls the smoothness
      }}
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20`}
    >
      {/* <header className="fixed w-full top-0 left-0 z-999 transition duration-300 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20"> */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* LOGO */}
        <motion.h1
          className="text-3xl font-extrabold text-amber-500 dark:text-amber-600 cursor-pointer drop-shadow-md"
          onClick={() => scrollToSection("#hero")}
          whileHover={{ scale: 1.1 }}
        >
          CoffeeHaven
        </motion.h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.title}
              onClick={() => scrollToSection(item.link)}
              className="text-white/90 hover:text-amber-400 font-medium transition cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.title}
            </motion.button>
          ))}

          {/* FAVORITES */}
          <motion.div
            className="relative flex items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="material-icons text-white hover:text-red-400 transition">
              Favorite
            </span>
            {favorites.length > 0 && (
              <span className="ml-1 -mt-0.5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </motion.div>

          {/* THEME TOGGLE */}
          <motion.button
            onClick={() => dispatch(toggleTheme())}
            className="ml-4 px-3 py-1 rounded-full border border-amber-300 text-white hover:bg-amber-400 hover:text-black transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>
        </nav>

        {/* MOBILE MENU hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X
              className="text-white cursor-pointer hover:text-amber-500"
              size={28}
            />
          ) : (
            <FaBars
              className="text-white cursor-pointer hover:text-amber-500"
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden bg-black/60 backdrop-blur-xl px-6 pb-4 space-y-3 border-t border-white/20 cursor-pointer"
        >
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => {
                scrollToSection(item.link);
                setMenuOpen(false);
              }}
              className="block cursor-pointer w-full text-left text-white hover:text-amber-400 py-1 transition"
            >
              {item.title}
            </button>
          ))}

          {/* FAVORITES & THEME */}
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="relative flex items-center cursor-pointer">
              <span className="material-icons text-white text-xl">
                Favorite
              </span>
              {favorites.length > 0 && (
                <span className="ml-1 -mt-0.5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </div>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="px-3 py-1 border border-amber-300 rounded-full text-white hover:bg-amber-400 hover:text-black transition cursor-pointer"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
