import { motion } from "framer-motion";
import { FaUsers, FaLandmark } from "react-icons/fa";
import { MdPlayCircle } from "react-icons/md";

export default function AboutUs({ language = "en" }) {
  const content = {
    en: {
      heading: "About Army Utsav Hall",
      description: `
      Welcome to Army Utsav Hall – a majestic yet affordable venue crafted for timeless celebrations including weddings, engagements, birthdays, and meetings.
      Nestled in a prime location, our hall blends royal decor with modern elegance, ensuring your events are grand without being heavy on your budget.
    `,
      foundersNote:
        "Founded with pride by two veterans of the Indian Army, our venue stands as a tribute to discipline, honor, and excellence.",
      capacity: "Seating Capacity: Up to 500 guests",
      area: "Total Area: 10,000+ sq.ft. of elegantly designed space",
      videoTitle: "Watch Venue Overview",
    },
    hi: {
      heading: "आर्मी उत्सव हॉल के बारे में",
      description: `
      आर्मी उत्सव हॉल में आपका स्वागत है – यह एक भव्य और किफायती स्थल है, जहाँ आप अपनी शादियाँ, सगाई, जन्मदिन और कार्यक्रम जैसे उत्सव मना सकते हैं।
      प्रमुख स्थान पर स्थित यह हॉल शाही सजावट और आधुनिक सुविधाओं के साथ, कम बजट में भव्य आयोजनों का अनुभव देता है।
    `,
      foundersNote:
        "भारतीय सेना के दो पूर्व सैनिकों द्वारा स्थापित, यह हॉल अनुशासन, सम्मान और उत्कृष्टता का प्रतीक है।",
      capacity: "सीटिंग क्षमता: 500 मेहमानों तक",
      area: "कुल क्षेत्रफल: 10,000+ वर्गफुट सुंदरता से सुसज्जित",
      videoTitle: "हॉल का वीडियो देखें",
    },
  };

  const data = content[language];

  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, #1b0a10, #320c1d)",
        color: "#fef3c7",
        padding: "80px 20px",
        fontFamily: "'Cinzel', serif",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "400px",
          background: "#861657",
          opacity: 0.15,
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <motion.div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          style={{
            color: "#facc15",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px #000",
          }}
          className="text-yellow-300 text-4xl md:text-5xl font-bold"
        >
          {data.heading}
        </h2>

        <div
          style={{
            width: "100px",
            height: "5px",
            backgroundColor: "#facc15",
            margin: "0 auto 30px",
            borderRadius: "999px",
            animation: "pulse 2s infinite",
          }}
        />

        <motion.p
          style={{
            fontSize: "18px",
            fontStyle: "italic",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {data.foundersNote}
        </motion.p>

        <motion.p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            fontFamily: "'Ubuntu', sans-serif", // ✅ Updated font
            marginBottom: "40px",
            whiteSpace: "pre-line",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {data.description}
        </motion.p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {[
            {
              icon: <FaLandmark />,
              label: language === "hi" ? "कुल क्षेत्रफल" : "Total Area",
              value: data.area
                .replace("Total Area: ", "")
                .replace("कुल क्षेत्रफल: ", ""),
            },
            {
              icon: <FaUsers />,
              label: language === "hi" ? "सीटिंग क्षमता" : "Seating Capacity",
              value: data.capacity
                .replace("Seating Capacity: ", "")
                .replace("सीटिंग क्षमता: ", ""),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at top left, #5f0f40, #320c1d)",
                border: "3px solid #facc15",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(250, 204, 21, 0.2)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <div
                style={{
                  fontSize: "34px",
                  color: "#facc15",
                  marginBottom: "10px",
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginBottom: "4px",
                  color: "#fef9c3",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  color: "#fcd34d",
                  padding: "0 12px",
                }}
              >
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        style={{
          marginTop: "60px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 2,
          position: "relative",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3
          style={{
            fontSize: "24px",
            color: "#facc15",
            fontWeight: "600",
            marginBottom: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <MdPlayCircle
            style={{ fontSize: "28px", animation: "pulse 2s infinite" }}
          />
          {data.videoTitle}
        </h3>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "16px",
            border: "4px solid #facc15",
            boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/jJkgaNTq8hI"
            title="Army Utsav Hall Video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}
