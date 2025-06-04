import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import crownImg from "./../assets/crown.png";
import { useState } from "react";

const Navbar = ({ lang, setLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  const navItems = [
    { en: "Home", hi: "मुखपृष्ठ" },
    { en: "Gallery", hi: "गैलरी" },
    { en: "About", hi: "हमारे बारे में" },
    { en: "Events", hi: "कार्यक्रम" },
    { en: "Services", hi: "सेवाएं" },
    { en: "Testimonials", hi: "साक्षात्कार" },
    { en: "Contact", hi: "संपर्क करें" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#3b0a1e]/90 text-yellow-200 shadow-lg z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="flex items-center gap-2">
            <img src={crownImg} alt="Army Utsav Hall" className="w-10 h-10" />
            <h1
              className="text-xl font-bold"
              style={{ fontFamily: "'Cinzel', serif", color: "#FFD700" }}
            >
              Army Utsav Hall
            </h1>
          </a>
        </div>

        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-yellow-400 transition-all">
              <a href={`#${item.en.toLowerCase()}`}>
                {lang === "en" ? item.en : item.hi}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-yellow-400 border border-yellow-400 px-3 py-1 text-xs rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            {lang === "en" ? "हिंदी" : "English"}
          </button>

          <button
            className="md:hidden text-yellow-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#3b0a1e]/95 text-yellow-100 px-6 py-4 space-y-4 text-sm"
          >
            {navItems.map((item, idx) => (
              <li key={idx} className="border-b border-yellow-700 pb-2">
                <a href={`#${item.en.toLowerCase()}`}>
                  {lang === "en" ? item.en : item.hi}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
