import { motion } from "framer-motion";
import React from "react";
import logo from "./../assets/logo.png";
import { Player } from "@lottiefiles/react-lottie-player";
import brideGroomAnimation from "./../assets/animate.json";

export default function HeroSection({ translations }) {
  const isHindi = translations.title === "आर्मी उत्सव हॉल";

  const shimmerStyle = {
    fontFamily: isHindi
      ? "'Tiro Devanagari Sanskrit', serif"
      : "'Cormorant Garamond', serif",
    fontWeight: 700,
    fontSize: "2.8rem",
    background: `linear-gradient(
      to right,
      #D4AF37 10%,
      #FFF8DC 20%,
      #D4AF37 30%,
      #B8860B 40%,
      #D4AF37 50%,
      #FFF8DC 60%,
      #D4AF37 70%,
      #B8860B 80%,
      #D4AF37 90%,
      #FFF8DC 100%
    )`,
    backgroundSize: "1000px 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 10s infinite linear",
    display: "inline-block",
    letterSpacing: "0.8px",
  };

  const taglineStyle = {
    fontFamily: isHindi ? "'Yatra One', cursive" : "'Great Vibes', cursive",
    color: "#ffefb7",
    textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
  };

  return (
    <section className="relative h-screen w-full bg-[#3b0a1e] overflow-hidden">
      {/* Load luxury Hindi fonts */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Yatra+One&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap');

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @media (min-width: 640px) {
          .shimmer-heading {
            font-size: 4.5rem !important;
          }
        }

        @media (min-width: 768px) {
          .shimmer-heading {
            font-size: 6rem !important;
          }
        }

        @media (min-width: 1024px) {
          .shimmer-heading {
            font-size: 7rem !important;
          }
        }
        `}
      </style>

      {/* Background Logo Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src={logo}
          alt="Army Utsav Logo"
          className="w-full h-full object-contain mx-auto"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white px-4 md:px-8"
      >
        <Player
          autoplay
          loop
          src={brideGroomAnimation}
          className="w-80 md:w-2/5 mb-3"
        />

        <h1
          style={shimmerStyle}
          className="shimmer-heading font-bold leading-tight"
        >
          {translations.title}
        </h1>

        <p className="mt-4 text-xl md:text-3xl" style={taglineStyle}>
          {translations.tagline}
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="tel:9690331047"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily: isHindi
                ? "'Tiro Devanagari Sanskrit', serif"
                : "inherit",
            }}
          >
            {translations.callUs || (isHindi ? "संपर्क करें" : "Call Us")}
          </a>
          <button
            className="px-6 py-3 border border-yellow-400 text-yellow-300 font-medium rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
            style={{
              fontFamily: isHindi ? "'Yatra One', cursive" : "inherit",
            }}
          >
            {translations.explore || (isHindi ? "और देखें" : "Explore More")}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
