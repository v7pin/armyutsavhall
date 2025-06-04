import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Groom's Father",
    image: "https://i.pravatar.cc/150?img=11",
    quote:
      "The decoration, food, and overall vibe were simply royal. Our guests were truly impressed. Thank you, Army Utsav Hall!",
  },
  {
    name: "Pooja Verma",
    role: "Bride",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "An unforgettable experience! From decor to music, everything was handled with class and elegance.",
  },
  {
    name: "Captain Ajay Singh",
    role: "Retired Army Officer",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Army Utsav Hall maintains the discipline and grandeur you'd expect from anything with 'Army' in the name. 5 stars!",
  },
  {
    name: "Meena Joshi",
    role: "Bride's Aunt",
    image: "https://i.pravatar.cc/150?img=38",
    quote: "बहुत ही शानदार अनुभव था। सभी व्यवस्थाएँ एकदम उत्तम थीं।",
  },
  {
    name: "Ankit Chauhan",
    role: "Wedding Photographer",
    image: "https://i.pravatar.cc/150?img=23",
    quote:
      "Lighting and backdrop were perfect for capturing timeless wedding moments.",
  },
  {
    name: "Seema Rathi",
    role: "Bride’s Mother",
    image: "https://i.pravatar.cc/150?img=41",
    quote: "शादी के हर पल को खास बना दिया Army Utsav Hall ने। धन्यवाद!",
  },
  {
    name: "Rahul Kapoor",
    role: "Friend of Groom",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "DJ and food were next level! Danced all night, ate even more!",
  },
  {
    name: "Harshita Mehta",
    role: "Guest",
    image: "https://i.pravatar.cc/150?img=26",
    quote: "Décor was magical and staff was very courteous. Loved the vibe!",
  },
  {
    name: "Ramesh Yadav",
    role: "Family Member",
    image: "https://i.pravatar.cc/150?img=33",
    quote: "इतनी सुंदर व्यवस्था और समय पर सेवा बहुत तारीफ के काबिल है।",
  },
  {
    name: "Dr. Kavita Bansal",
    role: "Guest Speaker",
    image: "https://i.pravatar.cc/150?img=18",
    quote:
      "Spoke at an engagement ceremony here — the AV setup and ambience were top-notch.",
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
