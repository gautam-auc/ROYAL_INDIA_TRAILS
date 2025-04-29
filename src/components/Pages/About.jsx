import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';

export const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // ensures animation happens only once
          });
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero text-center">
                <div className="overlay" data-aos="fade-down">
                    <h1 className="display-5 text-white">About Royal India Trails</h1>
                    <p className="lead text-white">Discover India with comfort, culture, and care.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="about-intro container py-5">
                <h2 className="text-primary mb-4">Our Story</h2>
                <p>
                    Royal India Trails was founded with a passion to showcase the diverse beauty of India.
                    From historical monuments to breathtaking landscapes, we curate unforgettable journeys with personalized service and affordable pricing.
                </p>
                <p>
                    Whether you're exploring the Taj Mahal or relaxing in Kerala's backwaters, our mission is to make every moment truly royal.
                </p>
            </section>

            {/* Features */}
            <section className="about-features bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-5 text-warning">✨ Why Travel With Us?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="feature-card p-4 shadow-sm rounded bg-white h-100">
                                <i className="fas fa-map-marked-alt fa-2x text-primary mb-3"></i>
                                <h5>Curated Destinations</h5>
                                <p>Handpicked locations that reflect India’s true spirit.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card p-4 shadow-sm rounded bg-white h-100">
                                <i className="fas fa-star fa-2x text-success mb-3"></i>
                                <h5>Top Rated Service</h5>
                                <p>Consistent 5-star experiences from real travelers.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card p-4 shadow-sm rounded bg-white h-100">
                                <i className="fas fa-globe-asia fa-2x text-danger mb-3"></i>
                                <h5>Local Experts</h5>
                                <p>Guided by locals who bring culture and history alive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta py-5 text-center text-white">
                <div className="container">
                    <h2 className="mb-3">Start Your Royal Journey Today</h2>
                    <p>Let us plan your perfect Indian adventure. Book your next trip now!</p>
                    <a href="/contact" className="btn btn-warning px-4 mt-3">Contact Us</a>
                </div>
            </section>
        </div>
    );
};