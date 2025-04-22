import React from "react";
import { motion } from "framer-motion";
import "./../styles/aboutus.css"; // Make sure this CSS file exists and is linked

export const Aboutus = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: "Supportive Learning Environment",
      color: "blue",
      content:
        "We cultivate a welcoming community where learners feel safe to ask questions, take risks, and grow at their own pace. Our mentors and peers work together to create an uplifting and encouraging space.",
    },
    {
      title: "Real-World Project Experience",
      color: "green",
      content:
        "Our hands-on curriculum is based on real-world challenges and tools used by professional developers. Students graduate with a strong portfolio and practical coding experience.",
    },
    {
      title: "Career-Focused Mentorship",
      color: "purple",
      content:
        "Beyond coding, we prepare students for successful tech careers through personalized mentorship, technical interview training, and job placement support.",
    },
  ];

  return (
    <div className="aboutus-container">
      <div>
        <h1 className="aboutus-title">What a Programming School Should Be</h1>

        <div className="card-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className={`card-title ${card.color}`}>{card.title}</h2>
              <p className="card-content">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="button-wrapper">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contact-button"
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
};
