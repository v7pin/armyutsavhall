import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/wedding.jpg";
import img2 from "../assets/reception.jpg";
import img3 from "../assets/ring.jpg";
import img4 from "../assets/meetings.jpg";
import img5 from "../assets/birthday.jpg";
import img6 from "../assets/special.jpeg";

const EventsSlider = ({ language = "en" }) => {
  const scrollRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const translations = {
    en: {
      heading: "Events We Organize",
      events: [
        { title: "Wedding", src: img1 },
        { title: "Reception", src: img2 },
        { title: "Ring Ceremony", src: img3 },
        { title: "Meetings", src: img4 },
        { title: "Birthdays", src: img5 },
        { title: "Special Occasions", src: img6 },
      ],
    },
    hi: {
      heading: "हम जिन आयोजनों का संचालन करते हैं",
      events: [
        { title: "शादी", src: img1 },
        { title: "रिसेप्शन", src: img2 },
        { title: "रिंग सेरेमनी", src: img3 },
        { title: "मीटिंग्स", src: img4 },
        { title: "जन्मदिन", src: img5 },
        { title: "विशेष अवसर", src: img6 },
      ],
    },
  };

  const t = translations[language];
  const events = t.events;

  // Wait for all images to load
  useEffect(() => {
    const images = document.querySelectorAll(".event-img");
    let loadedCount = 0;
    images.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (!loaded) return;
    const container = scrollRef.current;
    const scrollSpeed = 1;
    const scrollInterval = 20; // ms

    const intervalId = setInterval(() => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    }, scrollInterval);

    return () => clearInterval(intervalId);
  }, [loaded]);

  return (
    <div
      id="events"
      style={{
        background: "linear-gradient(to right, #1b0a10, #320c1d)",
        padding: "60px 20px",
        overflow: "hidden",
      }}
      className="bg-gradient-to-b from-[#260B16] to-[#2A0717] text-yellow-100"
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontFamily: "'Cinzel', serif",
          color: "#facc15",
          marginBottom: "50px",
          textShadow: "3px 3px 10px rgba(0,0,0,0.6)",
          letterSpacing: "1px",
        }}
        className="text-3xl md:text-4xl lg:text-5xl"
      >
        {t.heading}
      </h2>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "40px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "20px 0",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {[...events, ...events].map((event, index) => (
          <div
            key={index}
            style={{
              minWidth: "270px",
              height: "380px",
              overflow: "hidden",
              flexShrink: 0,
              transform:
                index % 2 === 0 ? "translateY(-20px)" : "translateY(20px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              position: "relative",
              backgroundColor: "#000",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src={event.src}
              alt={event.title}
              className="event-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.85)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(4px)",
                color: "#ffe58f",
                textAlign: "center",
                padding: "14px",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.5px",
                textShadow: "0 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              {event.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSlider;
