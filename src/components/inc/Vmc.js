import React from "react";
import transportation from "../../front/images1/transportation.png";
import houseKeeping from "../../front/images1/houseKeeping.png";
import mealPrep from "../../front/images1/mealPrep.png";
import backgroundvmc from "../../front/images1/logins.png";
import "../../styles/vmc.css";

export const Vmc = () => {
  return (
    <section className="section py-5"
  style={{
    backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${backgroundvmc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}>
      <div className="container">

        {/* Color Frontals */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={transportation}
              alt="Color Frontals"
              className="img-fluid rounded shadow image-effect"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Safe & Reliable Transportation</h2>

          <p className="text-muted fs-5">
           We provide dependable transportation for medical appointments,
          errands, community outings, and other scheduled activities.
          Our caring staff ensures every resident travels safely,
          comfortably, and arrives on time.
          </p>
          </div>
        </div>

        {/* Color Wigs */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={houseKeeping}
              alt="Color Wigs"
              className="img-fluid rounded shadow image-effect"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Professional Housekeeping</h2>

          <p className="text-muted fs-5">
            A clean, organized, and comfortable home is essential to
            our residents' well-being. Our housekeeping services help
            maintain a safe, welcoming environment where every resident
            can relax and feel at home.
          </p>
          </div>
        </div>

        {/* Hair Dye */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={mealPrep}
              alt="Hair Dye"
              className="img-fluid rounded shadow image-effect"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Nutritious Meal Preparation</h2>

          <p className="text-muted fs-5">
          Fresh, balanced meals are thoughtfully prepared each day to
          meet the dietary needs and personal preferences of every
          resident. We believe that good nutrition plays an important
          role in promoting health, comfort, and overall quality of life.
        </p>
          </div>
        </div>

      </div>
    </section>
  );
};