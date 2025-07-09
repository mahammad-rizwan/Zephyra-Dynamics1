import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // Optional: Adds smooth scrolling
    });
  };

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="menu-wrapper">
      <button
        ref={buttonRef}
        className={`hamburger-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Main menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav 
        ref={menuRef} 
        className={`main-nav ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="nav-content">
    <Link 
      to="/" 
      className="nav-link" 
      onClick={() => {
        scrollToTop();
        toggleMenu();
      }}
    >
      <span>Home</span>
    </Link>
    <Link 
      to="/technology" 
      className="nav-link" 
      onClick={() => {
        scrollToTop();
        toggleMenu();
      }}
    >
      <span>Technology</span>            
    </Link>
    <Link 
      to="/about" 
      className="nav-link" 
      onClick={() => {
        scrollToTop();
        toggleMenu();
      }}
    >
      <span>About</span>
    </Link>
    <Link 
      to="/careers" 
      className="nav-link" 
      onClick={() => {
        scrollToTop();
        toggleMenu();
      }}
    >
      <span>Careers</span>
    </Link>
  </div>
      </nav>
      
      {isOpen && <div className="nav-overlay"></div>}
    </div>
  );
};

export default MenuBar;