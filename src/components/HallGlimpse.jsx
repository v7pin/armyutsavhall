import { motion } from "framer-motion";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🧠 Dynamically load all hall images with caption
const banquetImages = Object.entries(
  import.meta.glob("/src/assets/hall/*.{jpg,jpeg,png}", { eager: true })
)
  .map(([path, mod]) => {
    const fileName = path.split("/").pop().split(".")[0];
    const parts = fileName.split("-");
    const caption = parts[1] ? parts.slice(1).join(" ") : "Hall View";
    return {
      src: mod.default,
      caption,
    };
  })
  .sort((a, b) => a.caption.localeCompare(b.caption)); // Optional: alphabetical

// Custom Arrows
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-yellow-100 text-black p-2 rounded-full shadow-md cursor-pointer hover:bg-yellow-300 transition"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-yellow-100 text-black p-2 rounded-full shadow-md cursor-pointer hover:bg-yellow-300 transition"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
}

export default function HallGlimpse({ title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto relative">
      <motion.h2
        className="text-2xl md:text-5xl font-bold text-center mb-10 text-shadow-yellow-200"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {title}
      </motion.h2>

      <Slider {...settings}>
        {banquetImages.map((img, index) => (
          <motion.div
            key={index}
            className="px-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-sm shadow-xl border border-gray-200 transition-transform transform hover:-rotate-2 hover:scale-[1.03] duration-500 max-w-sm mx-auto">
              <div className="bg-white border border-gray-300 p-2 rounded-sm">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-[300px] object-cover rounded-sm shadow-md"
                />
              </div>
              <div
                className="text-center lg:text-2xl mt-3 pb-5 px-2 text-sm text-gray-700 font-medium italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {img.caption}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
