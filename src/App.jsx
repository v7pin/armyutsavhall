import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import FoundersSection from "./components/FoundersSection";
import Testimonials from "./components/Testimonials";
import MapSection from "./components/MapSection";
import Events from "./components/Events";
import GaneshaSection from "./components/GaneshaSection";
import FlowerSection from "./components/FlowerSection";
function App() {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      title: "Army Utsav Hall",
      tagline: "Where Celebrations Become Royal",
    },
    hi: {
      title: "आर्मी उत्सव हॉल",
      tagline: "जहां उत्सव बनते हैं शाही",
    },
  };

  return (
    <div className="min-h-screen bg-[#4b0f0f]">
      {/* Language Switcher */}
      <div className="flex justify-end p-4">
        <button
          className={`px-4 py-1 text-sm rounded-l-full ${
            lang === "en"
              ? "bg-[#D4AF37] text-[#4b0f0f]"
              : "bg-white text-[#4b0f0f]"
          }`}
          onClick={() => setLang("en")}
        >
          English
        </button>
        <button
          className={`px-4 py-1 text-sm rounded-r-full ${
            lang === "hi"
              ? "bg-[#D4AF37] text-[#4b0f0f]"
              : "bg-white text-[#4b0f0f]"
          }`}
          onClick={() => setLang("hi")}
        >
          हिन्दी
        </button>
      </div>

      {/* Hero Section */}
      <HeroSection translations={translations[lang]} />
      <Navbar lang={lang} setLang={setLang} />
      <GaneshaSection />
      <Gallery language={lang} />
      <FlowerSection />
      <AboutUs language={lang} />
      <Events language={lang} />
      <FoundersSection language={lang} />
      <Service language={lang} />
      <Testimonials language={lang} />
      <MapSection language={lang} />
    </div>
  );
}

export default App;
