import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slowZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl animate-fadeDown">
          Brewed With Passion
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-200 mt-4 mb-8 animate-fadeUp delay-200">
          Taste the perfect blend crafted for true coffee lovers.
        </p>

        {/* CTA Button */}
        <a
          className="px-8 py-3 bg-amber-600 hover:bg-amber-500 rounded-full text-lg font-semibold shadow-xl text-white transition transform hover:scale-105 animate-fadeUp delay-300 cursor-pointer"
          onClick={() => scrollToSection("#menu")}
        >
          Discover Our Menu
        </a>

        {/* Glass Card */}
        <div className="mt-10 mx-auto max-w-lg p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl animate-fadeUp delay-500">
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            “A good day starts with a great coffee. Enter our world of rich
            aroma, bold flavors, and handcrafted perfection.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
