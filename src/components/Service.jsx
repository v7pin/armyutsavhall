import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGlassCheers,
  FaUtensils,
  FaPalette,
  FaCar,
  FaMusic,
} from "react-icons/fa";

const services = [
  {
    icon: (
      <FaGlassCheers className="text-2xl sm:text-3xl md:text-4xl text-yellow-300" />
    ),
    title: { en: "Royal Hall", hi: "शाही हॉल" },
    desc: {
      en: "Spacious royal venue for grand events.",
      hi: "विशाल शाही आयोजन स्थल।",
    },
  },
  {
    icon: (
      <FaUtensils className="text-2xl sm:text-3xl md:text-4xl text-yellow-300" />
    ),
    title: { en: "Catering", hi: "कैटरिंग" },
    desc: {
      en: "Veg & non-veg cuisines.",
      hi: "स्वादिष्ट व्यंजन।",
    },
  },
  {
    icon: (
      <FaPalette className="text-2xl sm:text-3xl md:text-4xl text-yellow-300" />
    ),
    title: { en: "Decor", hi: "सजावट" },
    desc: {
      en: "Floral & theme decor.",
      hi: "थीम और फूलों की सजावट।",
    },
  },
  {
    icon: (
      <FaCar className="text-2xl sm:text-3xl md:text-4xl text-yellow-300" />
    ),
    title: { en: "Parking", hi: "पार्किंग" },
    desc: {
      en: "Valet & self-parking.",
      hi: "वैलेट और स्वयं पार्किंग।",
    },
  },
  {
    icon: (
      <FaMusic className="text-2xl sm:text-3xl md:text-4xl text-yellow-300" />
    ),
    title: { en: "DJ & Music", hi: "डीजे और संगीत" },
    desc: {
      en: "Lively DJ & sound setup.",
      hi: "ऊर्जावान डीजे और साउंड।",
    },
  },
];

export default function Service({ language = "en" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const circleSize = isMobile ? 110 : 180;
  const radius = isMobile ? 130 : 200;

  return (
    <section
      id="services"
      className="relative bg-[#3b0a1e] bg-gradient-to-b from-[#2A0717] to-[#240715] py-24 px-4 text-yellow-100"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-16 text-yellow-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {language === "en" ? "Our Royal Services" : "हमारी शाही सेवाएं"}
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto h-[480px] sm:h-[580px]">
        {services.map((service, index) => {
          const angle = (360 / services.length) * index;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute rounded-full bg-[#4a0f25]/60 border border-yellow-600 shadow-lg backdrop-blur-md p-3 sm:p-5 text-center flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                left: `calc(50% + ${x}px - ${circleSize / 2}px)`,
                top: `calc(50% + ${y}px - ${circleSize / 2}px)`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              <div className="mb-1">{service.icon}</div>
              <h3 className="text-xs sm:text-sm font-semibold text-yellow-200">
                {service.title[language]}
              </h3>
              <p className="text-[10px] sm:text-xs text-yellow-100 mt-1 leading-tight text-center px-1">
                {service.desc[language]}
              </p>
            </motion.div>
          );
        })}

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full bg-yellow-300/20 backdrop-blur-lg border border-yellow-400 flex items-center justify-center shadow-inner text-yellow-200 font-bold text-center text-[10px] sm:text-sm px-3 sm:px-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {language === "en" ? "Premium Experience" : "शाही अनुभव"}
        </motion.div>
      </div>
    </section>
  );
}
