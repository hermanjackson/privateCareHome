import React, {useContext} from 'react'
import { Link, useHistory  } from "react-router-dom";
import { Slider } from '../components/inc/Slider'
import { Vmc } from '../components/inc/Vmc';
import {Context} from "./appContext";
import wig1 from './images1/wig1.png';
import wig2 from './images1/wig2.png';
import "../styles/home.css";
import comingsoon from "./images1/comingsoon.png";





export const Home = () => {
    const { store, } = useContext(Context);
   
    const history = useHistory();
    const handleClick = (item) => {
        history.push({
          pathname: '/allservices',
          state: { serviceData: item },
        });
      };
   
    
    return (
        <div>
          
            <Slider/>


           <section className="section py-5 bg-light">
  <div className="container">
    <div className="row text-center mb-4">
      <div className="col-md-12">
        <h3 className="main-heading display-5 fw-bold text-dark mb-3">
          Shop Our Luxury Hair Collection
        </h3>
        <div className="underline mx-auto mb-4"></div>
        <p className="lead text-muted">
          Choose from premium frontal wigs and soft, silky single bundles.
        </p>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-md-6 mb-4">
        <Link to="/wig" className="text-decoration-none">
          <div className="hair-card shadow">
            <img src={wig1} alt="Frontal Wigs" className="hair-card-img" />
          </div>
        </Link>
      </div>

      <div className="col-md-6 mb-4">
        <Link to="/bundle" className="text-decoration-none">
          <div className="hair-card shadow">
            <img src={wig2} alt="Single Bundles" className="hair-card-img" />
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>
        <Vmc/>
        <section className="section bg-c-light border-top py-5">
  <div className="container">
    <div className="row">
      <h3 className="main-heading text-center">Shop Now</h3>
      <div className="underline mx-auto mb-4"></div>

      {store.allServices.map((item, index) => {
        return (
          <div className="col-md-4 mb-5" key={index}>
            <div className="product-card">
              <img
                src={item.image}
                className="product-image"
                alt={item.label}
              />

              <div className="product-content">
                <h4>{item.label}</h4>

                <p>{item.description}</p>

                <Link to="/Contact">
                  <button
                    onClick={() => handleClick(item)}
                    className="shop-btn"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
       <section
  className="coming-soon-section"
  style={{
    backgroundImage: `linear-gradient(rgba(25,18,12,0.45), rgba(25,18,12,0.45)), url(${comingsoon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 20px",
  }}
>
  <div className="container text-center">

    <h1
      style={{
        fontSize: "4rem",
        fontWeight: "700",
        color: "#ffffff",
        letterSpacing: "4px",
        marginBottom: "20px",
      }}
    >
      NEW HAIR COLLECTION
    </h1>

    <h2
      style={{
        color: "#D4AF37",
        fontSize: "2.8rem",
        fontWeight: "600",
        marginBottom: "35px",
      }}
    >
      COMING SOON
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        color: "#ffffff",
        fontSize: "1.2rem",
        lineHeight: "2",
      }}
    >
      Discover our upcoming collection of luxury hair bundles,
      lace front wigs, closures, frontals, premium hair care,
      and professional beauty products designed to help you
      look and feel your absolute best.

      <br /><br />

      Beautiful styles. Premium quality.
      Luxury you deserve.
    </p>

    <button
      className="mt-5"
      style={{
        background: "transparent",
        color: "#fff",
        border: "2px solid #D4AF37",
        padding: "14px 45px",
        borderRadius: "40px",
        fontSize: "18px",
        fontWeight: "600",
        letterSpacing: "1px",
        transition: "0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "#D4AF37";
        e.target.style.color = "#2b1a10";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "transparent";
        e.target.style.color = "#fff";
      }}
    >
      Coming Soon
    </button>

  </div>
</section>
  </div>

    )
}
