import React from "react";
import colorfrontal from "../../front/images1/colorfrontal.png";
import colorwig from "../../front/images1/colorwig.png";
import colordye from "../../front/images1/hairdye.png";
import backgroundvmc from "../../front/images1/backgroundvmv.png";
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
              src={colorfrontal}
              alt="Color Frontals"
              className="img-fluid rounded shadow image-effect"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Luxury Color Frontals</h2>

            <p className="text-muted fs-5">
              Complete your look with our premium HD and transparent color
              frontals. Available in beautiful natural and vibrant shades,
              designed to blend seamlessly while delivering a flawless,
              salon-quality finish.
            </p>
          </div>
        </div>

        {/* Color Wigs */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={colorwig}
              alt="Color Wigs"
              className="img-fluid rounded shadow image-effect"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Premium Color Wigs</h2>

            <p className="text-muted fs-5">
              Express your personality with our collection of luxury color wigs.
              From bold reds and vibrant blues to elegant blondes and rich
              brunettes, every wig is crafted using premium-quality fibers or
              100% human hair.
            </p>
          </div>
        </div>

        {/* Hair Dye */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={colordye}
              alt="Hair Dye"
              className="img-fluid rounded shadow image-effect"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Professional Hair Dye Collection</h2>

            <p className="text-muted fs-5">
              Discover vibrant, long-lasting hair color with our professional
              hair dye collection. Whether you're looking for classic natural
              shades or bold fashion colors, our formulas provide brilliant
              shine, rich pigmentation, and healthy-looking results.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};