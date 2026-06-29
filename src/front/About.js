import React from "react";
import { motion } from "framer-motion";
import about from "./images1/about.png";
import { Link } from "react-router-dom";
import "./../styles/aboutus.css"; // Make sure this CSS file exists and is linked

export const Aboutus = () => {
  const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const cards = [
  {
    title: "Compassionate Personalized Care",
    content:
      "Every resident is unique. We provide individualized care plans designed to promote independence, dignity, comfort, and overall well-being in a warm family-like environment.",
  },
  {
    title: "Safe & Comfortable Living",
    content:
      "Our private care home offers a clean, secure, and welcoming atmosphere where residents can feel at home while receiving professional support from experienced caregivers.",
  },
  {
    title: "Dedicated Support Services",
    content:
      "From personal care assistance and medication reminders to meal preparation, housekeeping, transportation, and companionship, we are committed to providing quality care every day.",
  },
];

return (
  <section
    style={{
      backgroundImage: `linear-gradient(rgba(20,15,10,.30), rgba(20,15,10,.30)), url(${about})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "90px 0",
      minHeight: "100vh",
    }}
  >
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h1
        style={{
        fontSize: "3.5rem",
        fontWeight: "700",
        color: "#fff",
          textShadow: "0 2px 10px rgba(0,0,0,.55)",
         }}
>
        Welcome to Essence of Love
      </h1>

        <div
          style={{
            width: "90px",
            height: "4px",
            background: "#d4af37",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        />

        <p
  style={{
    maxWidth: "850px",
    margin: "0 auto",
    color: "#f5f5f5",
    fontSize: "1.2rem",
    lineHeight: "1.9",
    textShadow: "0 2px 8px rgba(0,0,0,.45)",
  }}
>
  At <strong>Essence of Love Private Care Home</strong>, we believe
  every individual deserves to live with dignity, comfort, and
  respect. Our mission is to provide compassionate, personalized
  care in a safe and welcoming home where residents feel valued,
  supported, and treated like family. We are committed to enhancing
  quality of life by delivering dependable care that promotes
  independence, peace of mind, and overall well-being.
</p>
      </motion.div>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              style={{
                background: "rgba(255,255,255,.18)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                borderRadius: "20px",
                padding: "35px",
                height: "100%",
                boxShadow: "0 15px 35px rgba(0,0,0,.25)",
                border: "1px solid rgba(212,175,55,.45)",
                borderBottom: "5px solid #d4af37",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textShadow: "0 2px 8px rgba(0,0,0,.45)",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#f5f5f5",
                  lineHeight: "1.8",
                  textShadow: "0 2px 8px rgba(0,0,0,.35)",
                }}
              >
                {card.content}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/Contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid #d4af37",
              borderRadius: "50px",
              padding: "15px 45px",
              fontWeight: "700",
              fontSize: "18px",
              cursor: "pointer",
              letterSpacing: "1px",
            }}
          >
            Schedule a Tour
          </motion.button>
        </Link>
      </div>
    </div>
  </section>
 );
};




