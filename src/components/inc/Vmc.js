import React from 'react'
import image10 from "../../front/images1/school1.jpg"
import image15 from "../../front/images1/school6.jpg"
import image1 from "../../front/images1/school3.jpg"
import './../../styles/vmc.css';

export const Vmc = () => {
    return (
        <section className="section bg-c-light border-top py-4">
    <div className="container">

        {/* Row 1: Our Mission */}
        <div className="row align-items-center mb-4 animate-fade">
            <div className="col-md-6 mb-3 mb-md-0 text-center">
                <img 
                    src={image15} 
                    alt="Mission" 
                    className="img-fluid rounded shadow image-effect"
                    style={{ maxWidth: '85%' }}
                />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <h4 className="mb-3 fs-3">Our Mission</h4>
                    <p className="fs-5">
                        At our programming school, our mission is to empower individuals of all backgrounds 
                        to unlock their full potential through code. We’re here to guide you toward a future 
                        full of opportunity, confidence, and tech-driven success.
                    </p>
                </div>
            </div>
        </div>

        {/* Row 2: Expert Guidance (Image on right) */}
        <div className="row align-items-center mb-4 animate-fade flex-md-row-reverse">
            <div className="col-md-6 mb-3 mb-md-0 text-center">
                <img 
                    src={image10} 
                    alt="Expert Guidance" 
                    className="img-fluid rounded shadow image-effect"
                    style={{ maxWidth: '85%' }}
                />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <h4 className="mb-3 fs-3">Expert Guidance</h4>
                    <p className="fs-5">
                        Our team of experienced instructors and industry pros is passionate about teaching 
                        and committed to your growth. With hands-on projects and personalized support, we’re 
                        with you every step of the way.
                    </p>
                </div>
            </div>
        </div>

        {/* Row 3: What We Believe */}
        <div className="row align-items-center animate-fade">
            <div className="col-md-6 mb-3 mb-md-0 text-center">
                <img 
                    src={image1} 
                    alt="What We Believe" 
                    className="img-fluid rounded shadow image-effect"
                    style={{ maxWidth: '85%' }}
                />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <h4 className="mb-3 fs-3">What We Believe</h4>
                    <p className="fs-5">
                        We believe that anyone can learn to code with the right tools and encouragement. 
                        That’s why we’ve built an inclusive, inspiring space where real learning happens — 
                        and real careers are launched.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}