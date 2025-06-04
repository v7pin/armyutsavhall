import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaMapMarkedAlt } from "react-icons/fa";

const translations = {
  en: {
    heading: "📍 Visit Army Utsav Hall",
    location: "Location",
    address: "Address",
    getDirections: "Get Directions",
    phone: "Phone",
    instagram: "Instagram",
    features: "Parking available • Rooms Available • CCTV Monitored",
  },
  hi: {
    heading: "📍 पधारें आर्मी उत्सव हॉल  ",
    location: "स्थान",
    address: "पता",
    getDirections: "दिशा प्राप्त करें",
    phone: "फ़ोन",
    instagram: "इंस्टाग्राम",
    features: "पार्किंग उपलब्ध • रूम उपलब्ध • सीसीटीवी निगरानी",
  },
};

export default function MapSection({ language = "en" }) {
  const t = translations[language];

  return (
    <section
      id="map"
      className="bg-gradient-to-br from-[#1e0613] to-[#34091a] py-24 px-6 text-yellow-100"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-16 drop-shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t.heading}
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Block */}
        <motion.div
          className="space-y-6 bg-[#4a0f25] bg-opacity-80 rounded-3xl p-8 border border-yellow-700 shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-yellow-200 flex items-center gap-2">
            <MapPin className="text-yellow-300" size={24} />
            {t.location}
          </h3>
          <p className="text-base leading-relaxed">
            Army Utsav Hall
            <br />
            <strong>{t.address}:</strong> Islampur - Jatipur Rd, Murgiachak,
            Islampur, Bihar 801303
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Army+Utsav+Hall,+Islampur+-+Jatipur+Rd,+Murgiachak,+Islampur,+Bihar+801303"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-300 text-[#34091a] font-semibold rounded-full shadow hover:bg-yellow-200 transition"
          >
            <FaMapMarkedAlt /> {t.getDirections}
          </a>

          <div className="flex flex-col gap-2 text-yellow-300 pt-4">
            <a
              href="tel:08969670080"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={18} /> 089696 70080
            </a>
            <a
              href="tel:09881052888"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={18} /> 098810 52888
            </a>
          </div>

          <div className="flex items-center gap-2 text-yellow-300">
            <FaInstagram size={18} />
            <a
              href="https://www.instagram.com/armyutsavhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t.instagram}
            </a>
          </div>

          <p className="text-sm text-yellow-400 pt-2">{t.features}</p>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          className="rounded-3xl overflow-hidden border border-yellow-700 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Army Utsav Hall Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.785921312377!2d85.2163039!3d25.1429275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2c164bc24be99%3A0xd97b62cdf5d70a04!2sArmy%20Utsav%20Hall!5e0!3m2!1sen!2sin!4v1748885000718!5m2!1sen!2sin"
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
