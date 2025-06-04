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
    icon: <FaGlassCheers className="text-3xl md:text-4xl text-yellow-300" />,
    title: { en: "Royal Hall", hi: "शाही हॉल" },
    desc: {
      en: "Spacious & decorated royal venue for your grand occasions.",
      hi: "आपके भव्य कार्यक्रमों के लिए विशाल और सुसज्जित शाही हॉल।",
    },
  },
  {
    icon: <FaUtensils className="text-3xl md:text-4xl text-yellow-300" />,
    title: { en: "Catering", hi: "कैटरिंग" },
    desc: {
      en: "Delicious vegetarian & non-vegetarian cuisines.",
      hi: "स्वादिष्ट शाकाहारी और मांसाहारी व्यंजन।",
    },
  },
  {
    icon: <FaPalette className="text-3xl md:text-4xl text-yellow-300" />,
    title: { en: "Decor", hi: "सजावट" },
    desc: {
      en: "Royal floral & thematic decoration options.",
      hi: "शाही फूलों और थीम आधारित सजावट विकल्प।",
    },
  },
  {
    icon: <FaCar className="text-3xl md:text-4xl text-yellow-300" />,
    title: { en: "Parking", hi: "पार्किंग" },
    desc: {
      en: "Spacious valet & self-parking available.",
      hi: "विस्तृत वैलेट और स्वयं पार्किंग की सुविधा।",
    },
  },
  {
    icon: <FaMusic className="text-3xl md:text-4xl text-yellow-300" />,
    title: { en: "DJ & Music", hi: "डीजे और संगीत" },
    desc: {
      en: "Energetic DJ setup & sound system for lively vibes.",
      hi: "जोश से भरपूर डीजे सेटअप और शानदार साउंड सिस्टम।",
    },
  },
];

export default function Service({ language = "en" }) {
  return (
    <section
      id="services"
      className="relative bg-[#3b0a1e] bg-gradient-to-b from-[#2A0717] to-[#240715]  py-24 px-4 text-yellow-100"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold mb-20 text-yellow-300 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {language === "en" ? "Our Royal Services" : "हमारी शाही सेवाएं"}
      </motion.h2>

      {/* Circle Layout */}
      <div className="relative w-full max-w-4xl mx-auto h-[500px] sm:h-[550px]">
        {services.map((service, index) => {
          const angle = (360 / services.length) * index;
          const radius = 200;

          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute w-[180px] h-[180px] rounded-full bg-[#4a0f25]/60 border border-yellow-600 shadow-lg backdrop-blur-md p-5 text-center flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                left: `calc(50% + ${x}px - 90px)`,
                top: `calc(50% + ${y}px - 90px)`,
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
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-md font-semibold text-yellow-200">
                {service.title[language]}
              </h3>
              <p className="text-xs text-yellow-100 mt-1 leading-tight">
                {service.desc[language]}
              </p>
            </motion.div>
          );
        })}

        {/* Center Circle */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-yellow-300/20 backdrop-blur-lg border border-yellow-400 flex items-center justify-center shadow-inner text-yellow-200 font-bold text-center text-sm px-4"
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
