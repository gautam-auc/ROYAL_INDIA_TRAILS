import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero text-center">
                <div className="overlay" data-aos="fade-down">
                    <h1 className="display-5 text-white">Contact Us</h1>
                    <p className="lead text-white">We'd love to hear from you — reach out anytime!</p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="contact-content container py-5">
                <div className="row g-5">
                    {/* Contact Info */}
                    <div className="col-md-5" data-aos="fade-right">
                        <h3>Get In Touch</h3>
                        <div className="contact-info">
                            <p><i className="fas fa-map-marker-alt me-2 text-danger"></i> New Delhi, India</p>
                            <p><i className="fas fa-phone-alt me-2 text-success"></i> +91 98765 43210</p>
                            <p><i className="fas fa-envelope me-2 text-primary"></i> contact@royalindiatrails.com</p>
                            <p><i className="fas fa-clock me-2 text-warning"></i> Mon - Sat: 9AM - 7PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-7" data-aos="fade-left">
                        <form className="contact-form shadow p-4 rounded bg-white">
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" placeholder="example@email.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
