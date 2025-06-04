import { motion } from "framer-motion";
import React from "react";
import ShashiImg from "../assets/shashi.jpg";
import SanjayImg from "../assets/sanjay.jpg";

//
export default function FoundersSection({ language = "en" }) {
  const translations = {
    en: {
      heading: "Meet Our Founders",
      founders: [
        {
          name: "Sanjay Kumar Singh",
          position: "Retd. Subedar, Indian Army",
          image: SanjayImg,
        },
        {
          name: "Shashi Kumar Singh",
          position: "Retd. Subedar Major, Indian Army",
          image: ShashiImg,
        },
      ],
    },
    hi: {
      heading: "हमारे संस्थापक",
      founders: [
        {
          name: "संजय कुमार सिंह",
          position: "से.नि. सूबेदार, भारतीय सेना",
          image: SanjayImg,
        },
        {
          name: "शशि कुमार सिंह",
          position: "से.नि. सूबेदार मेजर, भारतीय सेना",
          image: ShashiImg,
        },
      ],
    },
  };

  const { heading, founders } = translations[language] || translations.en;

  return (
    <section
      id="founders"
      className="relative bg-[#2a0717] py-24 px-6 text-yellow-100 overflow-hidden"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-10, -40, -60] }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-md">
          {heading}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            className="relative group backdrop-blur-md bg-[#f2e8c6]/10 border border-yellow-200/30 rounded-3xl p-6 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 z-0"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl text-yellow-100 font-semibold shine-text relative inline-block">
                    {founder.name}
                  </h3>
                  <p className="text-yellow-300 text-md mt-1">
                    {founder.position}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
