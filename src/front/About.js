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
    title: "Luxury Hair Collections",
    content:
      "We offer premium-quality hair bundles, frontals, closures, and wigs designed to provide beauty, confidence, and long-lasting style.",
  },
  {
    title: "Premium Hair Products",
    content:
      "Our carefully selected shampoos, conditioners, oils, serums, and styling products help keep your hair healthy, soft, and beautiful every day.",
  },
  {
    title: "Exceptional Customer Care",
    content:
      "Your satisfaction is our priority. Our team is committed to providing outstanding service, fast support, and a luxury shopping experience.",
  },
];

return (
  <section
    style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,.82), rgba(255,255,255,.82)), url(${about})`,
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
        transition={{ duration: .8 }}
        className="text-center mb-5"
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            color: "#111",
          }}
        >
          About Us
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
            maxWidth: "800px",
            margin: "0 auto",
            color: "#555",
            fontSize: "1.2rem",
            lineHeight: "1.9",
          }}
        >
          We believe everyone deserves beautiful, luxurious hair. Our mission is
          to provide premium-quality hair extensions and professional hair care
          products that help you look and feel your absolute best.
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
                duration: .6,
                delay: index * .2,
              }}
              style={{
                background: "rgba(255,255,255,.92)",
                borderRadius: "20px",
                padding: "35px",
                height: "100%",
                boxShadow: "0 12px 30px rgba(0,0,0,.12)",
                borderBottom: "5px solid #d4af37",
              }}
            >
              <h3
                style={{
                  color: "#111",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
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
            whileTap={{ scale: .95 }}
            style={{
              background: "linear-gradient(135deg,#d4af37,#f7dc6f)",
              color: "#111",
              border: "none",
              borderRadius: "50px",
              padding: "15px 45px",
              fontWeight: "700",
              fontSize: "18px",
              boxShadow: "0 10px 25px rgba(212,175,55,.4)",
              cursor: "pointer",
            }}
          >
            Contact Us
          </motion.button>
        </Link>

      </div>

    </div>
  </section>
);
};
