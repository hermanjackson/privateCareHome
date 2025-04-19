import React from 'react'
import { Link,  } from "react-router-dom";

export const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h6 className="main-heading">Company Information</h6>
                <hr/>
                <p className="text-whit">
             okeechobee blvd suit 100 <br></br>
             Store Hours MON - SUN / 8AM - 8PM

                </p>
                </div>
                    
  
<div className="col-md-4 ">
    <h6>Quick links</h6>
    <hr/>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/aboutsus">About</Link></div>
    <div><Link to="/contact">Contact</Link></div>
    
    
    </div>
    <div className="col-md-4 ">
        <h6>Contact Information</h6>
        <hr/>
        <div><p className="text-white mb-1"> lambe academyee</p></div>
        <div><p className="text-white mb-1"> 561-541-6108</p></div>
        
    </div>
   

</div>

</div>
        
        
        
    </section>

    )
}