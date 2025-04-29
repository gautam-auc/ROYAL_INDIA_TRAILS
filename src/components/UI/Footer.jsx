import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-column">
          <h4>Royal India Trails</h4>
          <p>Explore the beauty of India with our expert travel guides and affordable packages.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/destinations">Destinations</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: support@royalindiatrails.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: New Delhi, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Royal India Trails. All rights reserved.</p>
      </div>
    </footer>
  );
};