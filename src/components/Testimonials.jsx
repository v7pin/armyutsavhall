import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Ramesh Prasad",
    role: "दूल्हे के पिता",
    image: "../1.jpg",
    quote:
      "सजावट, खाना और माहौल सब कुछ राजसी था। मेहमान बहुत खुश हुए। Army Utsav Hall का धन्यवाद।",
  },
  {
    name: "Anjali Singh",
    role: "Bride",
    image: "../3.jpg",
    quote:
      "शादी का अनुभव बहुत ही खास रहा। डेकोर से लेकर म्यूजिक तक, सब कुछ शानदार था।",
  },
  {
    name: "Rajeev Mishra",
    role: "Retired Army Officer",
    image: "../2.jpg",
    quote:
      "Army Utsav Hall में अनुशासन और भव्यता की झलक साफ दिखती है। पूरी टीम को 5 स्टार!",
  },
  {
    name: "Sunita Devi",
    role: "दुल्हन की मौसी",
    image: "../4.jpg",
    quote: "बहुत ही बढ़िया अनुभव था। हर चीज़ समय पर और व्यवस्थित थी।",
  },
  {
    name: "Ravi Tiwari",
    role: "Wedding Photographer",
    image: "../5.jpg",
    quote: "लाइटिंग और बैकड्रॉप बेहतरीन थे। हर फोटो एक यादगार पल बन गया।",
  },

  {
    name: "Suman Patel",
    role: "Bride's Cousin",
    image: "../7.jpg",
    quote:
      "Everything was so beautifully arranged. I clicked a lot of great pictures!",
  },
  {
    name: "Manoj Kumar",
    role: "Guest",
    image: "../6.jpg",
    quote:
      "The hall was clean, the staff was polite, and the vibe was just perfect.",
  },
  {
    name: "Nisha Raj",
    role: "Friend of Bride",
    image: "../8.jpg",
    quote: "We had so much fun dancing! Food and decor were amazing too.",
  },

  {
    name: "Meera Yadav",
    role: "दुल्हन की माँ",
    image: "../9.jpg",
    quote: "Army Utsav Hall ने शादी को यादगार बना दिया। दिल से धन्यवाद!",
  },
  {
    name: "Vikram Singh",
    role: "दूल्हे का दोस्त",
    image: "../10.jpg",
    quote: "DJ और खाना दोनों शानदार थे! पूरी रात नाचे और खूब खाया।",
  },
  {
    name: "Kavita Kumari",
    role: "Guest",
    image: "../11.jpg",
    quote: "डेकोरेशन बहुत सुंदर था और स्टाफ बहुत ही विनम्र था।",
  },
  {
    name: "Munna Yadav",
    role: "परिवार के सदस्य",
    image: "../12.jpg",
    quote: "बहुत शानदार व्यवस्था और सेवा समय पर दी गई। सराहनीय प्रयास।",
  },
  {
    name: "Dr. Neelam Pandey",
    role: "Guest Speaker",
    image: "../13.jpg",
    quote:
      "एंगेजमेंट प्रोग्राम में बोलने का मौका मिला — AV सिस्टम और माहौल लाजवाब था।",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Testimonials({ language = "en" }) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const visibleCount =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;

  const paginate = (newDirection) => {
    setIndex(([prev]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(testimonials[(index + i) % testimonials.length]);
    }
    return arr;
  };

  const headings = {
    en: "What Our Guests Say",
    hi: "हमारे मेहमानों की राय",
  };

  const heading = headings[language] || headings.en;

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-br from-[#1e0613] to-[#250715] py-24 px-4 text-yellow-100 overflow-hidden"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold mb-16 text-yellow-300 drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>

      <div
        {...swipeHandlers}
        className="relative w-full overflow-hidden h-[300px]"
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full flex flex-col md:flex-row gap-10 justify-center items-center"
          >
            {getVisibleTestimonials().map((t, i) => (
              <motion.div
                key={i}
                className="relative bg-[#4a0f25] bg-opacity-80 backdrop-blur-lg border border-yellow-600 rounded-3xl shadow-2xl p-8 max-w-sm w-full hover:scale-[1.03] transition-all duration-300 group overflow-hidden"
              >
                <FaQuoteLeft className="text-yellow-300 text-3xl absolute -top-4 -left-4 opacity-30 group-hover:opacity-60 transition duration-300" />

                <p className="text-sm text-yellow-100 italic leading-relaxed mb-8 relative z-10">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-200">
                      {t.name}
                    </h4>
                    <p className="text-xs text-yellow-300">{t.role}</p>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-10 blur-xl bg-yellow-300 group-hover:opacity-20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              i === index ? "bg-yellow-400" : "bg-yellow-100 opacity-30"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
