import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HallGlimpse from "./HallGlimpse.jsx";

// 🧠 Automatically import all category images
const weddingImages = Object.values(
  import.meta.glob("/src/assets/gallery/wedding/*.{jpg,jpeg,png}", {
    eager: true,
  })
).map((mod) => mod.default);

const birthdayImages = Object.values(
  import.meta.glob("/src/assets/gallery/birthday/*.{jpg,jpeg,png}", {
    eager: true,
  })
).map((mod) => mod.default);

const ringImages = Object.values(
  import.meta.glob("/src/assets/gallery/ring/*.{jpg,jpeg,png}", { eager: true })
).map((mod) => mod.default);

const categories = {
  Wedding: weddingImages,
  Birthday: birthdayImages,
  "Ring Ceremony": ringImages,
};

const translations = {
  en: {
    title: "Our Royal Gallery",
    banquetTitle: "A Glimpse of Our Banquet Hall",
    categories: {
      Wedding: "Wedding",
      Birthday: "Birthday",
      "Ring Ceremony": "Ring Ceremony",
    },
    more: "Show More",
    less: "Show Less",
  },
  hi: {
    title: "हमारी शाही गैलरी",
    banquetTitle: "हमारे बैंक्वेट हॉल की एक झलक",
    categories: {
      Wedding: "विवाह",
      Birthday: "जन्मदिन",
      "Ring Ceremony": "रिंग सेरेमनी",
    },
    more: "और दिखाएं",
    less: "कम करें",
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Gallery({ language = "en" }) {
  const [selectedCategory, setSelectedCategory] = useState("Wedding");
  const [showExtra, setShowExtra] = useState(false);
  const images = categories[selectedCategory];
  const t = translations[language];

  useEffect(() => {
    setShowExtra(false); // Reset toggle when category changes
  }, [selectedCategory]);

  const maxVisible = 6;
  const extraImages =
    images.length > maxVisible ? images.slice(maxVisible) : [];

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-[#2c0c19] to-[#240B15] py-20 px-4 text-yellow-100"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <div className="mb-24">
        <HallGlimpse title={t.banquetTitle} />
      </div>

      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold mb-10 text-yellow-300 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>

      {/* Category Switcher */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#4a0f25] border border-yellow-600 rounded-full px-6 py-2 flex gap-4 shadow-inner shadow-yellow-700">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm md:text-base px-4 py-1.5 rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-yellow-300 text-[#3b0a1e] font-bold shadow-lg"
                  : "text-yellow-100 hover:text-yellow-300"
              }`}
            >
              {t.categories[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* First 6 Images */}
      <motion.div
        key={selectedCategory}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {images.slice(0, maxVisible).map((src, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="overflow-hidden rounded-3xl border border-yellow-500 shadow-xl group relative"
          >
            <motion.img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover transform transition duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b0a1e]/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl border-2 border-yellow-300"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle Button */}
      {extraImages.length > 0 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowExtra(!showExtra)}
            className="flex items-center gap-2 mx-auto px-6 py-2 rounded-full bg-yellow-300 text-[#3b0a1e] font-semibold shadow-md hover:scale-105 transition"
          >
            {showExtra ? t.less : t.more}
            {showExtra ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      )}

      {/* Extra Images Section */}
      {showExtra && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {extraImages.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl border border-yellow-500 shadow-xl group relative"
            >
              <img
                src={src}
                alt={`Gallery extra ${idx + 1}`}
                className="w-full h-64 object-cover transform transition duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b0a1e]/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl border-2 border-yellow-300"></div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
