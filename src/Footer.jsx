import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

import zephraLogo from './assets/images/zephyra_logo.png';


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // Optional: Adds smooth scrolling
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <Link to="/" onClick={scrollToTop} >
            <img src={zephraLogo} alt="Zephyra Dynamics Logo" className="footer-logo" />
          </Link>
          <p className="company-description">Zephyra Dynamics is at the forefront of designing and developing electric vertical takeoff and landing (eVTOL) aircraft to address the pressing need for sustainable, efficient, and accessible air transportation.</p>
          <p className="copyright">&copy; {new Date().getFullYear()} Zephyra Dynamics. All rights reserved.</p>
        </div>

        <div className="footer-section contact-section">
          <h3>Get in Touch</h3>
          <address>
            <p className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              123 Main Street, Budgan<br />Srinagar, Kashmir-19001
            </p>
            <p className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@zephyra-dynamics.com
            </p>
            <p className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              +91 8088139381
            </p>
          </address>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={scrollToTop} className="footer-link">Home</Link></li>
            <li><Link to="/technology" onClick={scrollToTop} className="footer-link">Technology</Link></li>
            <li><Link to="/about" onClick={scrollToTop} className="footer-link">About Us</Link></li>
            <li><Link to="/careers" onClick={scrollToTop} className="footer-link">Careers</Link></li>
            <li><Link to="/privacy-policy" onClick={scrollToTop} className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" onClick={scrollToTop} className="footer-link">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section social-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/zephyradynamics?igsh=MTI2NnlyMG1rd2I4OQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com/company/zephyradynamics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
              <FaLinkedin size={24} />
            </a>
            <a href=" https://x.com/zephyradynamics?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon twitter">
              <SiX size={24} />
            </a>
          </div>
          
          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;