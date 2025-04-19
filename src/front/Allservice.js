import React from 'react';
import { useLocation ,Link} from 'react-router-dom';
import '../styles/services.css';


export const Allservice = props => {
	
  
	const location = useLocation();
  const { serviceData } = location.state || {};

  if (!serviceData) {
    return <div>No service data found.</div>;
  }

  return (
    <>
    <div className="service-card-wrapper">
    <div className="left-message">
      <h2>Thank you for your interest!</h2>
      <p>Our team will reach out to you shortly to provide more details and answer any questions you may have.</p>
    </div>
		    <div className="service-card">
		<img src={serviceData.image} alt="" className="service-image"></img>
	<div className="service-content">
    
	  
	  <h1 className="service-title">{serviceData.title}</h1>
      <p className="service-description">{serviceData.description}</p>
      <Link to="/Contact">
	  <button className="contact-button" >
          Contact / More Info
        </button>
      </Link >
		</div>
     
    </div>
	</div>
  </>
  );
}