import React, {useContext} from 'react'
import { Link, useHistory  } from "react-router-dom";
import { Slider } from '../components/inc/Slider'
import { Vmc } from '../components/inc/Vmc';
import {Context} from "./appContext"



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
    <div className="row">
      <div className="col-md-12 text-center">
        <h3 className="main-heading display-5 fw-bold text-primary mb-3">
          Empower Your Future with Our Coding Program
        </h3>
        <div className="underline mx-auto mb-4"></div>
        <p className="lead text-muted px-4">
          Ready to launch your tech career? Our programming school offers a
          fully immersive experience designed to take you from beginner to
          professional developer. With a hands-on curriculum, dedicated
          instructors, and real-world projects, we don’t just teach you how to
          code — we prepare you to thrive in the industry.
          <br /><br />
          Enroll today and get:
          <ul className="list-unstyled mt-3">
            <li>✅ 24/7 student support — whenever you need help, we’re here</li>
            <li>✅ Personalized mentorship & 1-on-1 guidance</li>
            <li>✅ Real-world portfolio projects to impress employers</li>
            <li>✅ A <strong>job guarantee</strong> after successful completion</li>
          </ul>
          Whether you're just starting or upskilling for a career pivot, we're
          with you every step of the way. Let’s build your future — one line of
          code at a time.
        </p>
        <Link to="/Contact" className="btn btn-warning shadow mt-4">
          Learn More
        </Link>
      </div>
    </div>

    {/* New Three Columns Section */}
    <div className="row mt-5 text-center">
      <div className="col-md-4 mb-4">
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "15px",
            background: "linear-gradient(135deg, #00c6ff, #0072ff)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.25rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          💼 100% Job Guarantee
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "15px",
            background: "linear-gradient(135deg, #f7971e, #ffd200)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.25rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          🕒 24/7 Student Support
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "15px",
            background: "linear-gradient(135deg, #00b09b, #96c93d)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.25rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          🎯 100% Success Rate
        </div>
      </div>
    </div>
  </div>
</section>
        <Vmc/>
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                <h3 className="main-heading text-center">Our Services</h3>
                        <div className="underline mx-auto"></div>
                        {store.allServices.map((item, index) =>{
             return(
                <div className="col-md-4 " key={index}>
                <div className="card shawdow">
                <img src={item.image} className="w-100 border-bottom" alt="services"/>
                <div className="card-body">
                    <h6>{item.label}</h6>
                    <div className="underline"></div>
                    <p>{item.description}</p>
                   
                    <p className="card-text">
                 <Link to="/Contact">  
                    <button
                      onClick={() => handleClick(item)}
                        type="button"
                    className="contact-button"
                      >
                      Learn More
                      </button>
                  </Link> 
                   			
					          </p>
                </div>
        
                </div>
               
        
            </div>
           

             )
         })};
      
        
     
     
    
    </div>
            </div>
            
            
        </section>
        <section className="section bg-white py-5">
  <div className="container text-center">
    <h1 className="mb-4">Who is hiring our students?</h1>
    <p className="lead mb-5">
      Our network of partners is constantly growing. With the dedicated effort of Lambe workers and our career support service, we proudly boast an employment rate of ~84% within 100 days of graduation.
      We keep hearing how our graduates' skills amaze the companies that hired them. <br />
      <em>"I'm continually impressed by the depth of knowledge possessed by Lambe students. In fact, one of my hires from the program ended up becoming a team leader."</em>
    </p>

    {/* Carousel Start */}
    <div id="companyCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="your-path-to-facebook-logo.png" className="d-block mx-auto" alt="Facebook" style={{ width: "150px", height: "auto" }} />
        </div>
        <div className="carousel-item">
          <img src="your-path-to-apple-logo.png" className="d-block mx-auto" alt="Apple" style={{ width: "150px", height: "auto" }} />
        </div>
        <div className="carousel-item">
          <img src="your-path-to-amazon-logo.png" className="d-block mx-auto" alt="Amazon" style={{ width: "150px", height: "auto" }} />
        </div>
        <div className="carousel-item">
          <img src="your-path-to-netflix-logo.png" className="d-block mx-auto" alt="Netflix" style={{ width: "150px", height: "auto" }} />
        </div>
        <div className="carousel-item">
          <img src="your-path-to-google-logo.png" className="d-block mx-auto" alt="Google" style={{ width: "150px", height: "auto" }} />
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#companyCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#companyCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* Carousel End */}

  </div>
</section>

        

        </div>
    )
}
