import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className={`container ${className} ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to="/">
      <div className='nav-left'>
        <img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/OCENALOGO.png' alt='main-logo' className='logo' />
        <img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/ocenawhite.png' alt='main-text' className='main-text' />
      </div>
      </Link>

      <button className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/service" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>

      <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
        <a href='https://doodle.com/bp/tubamahmood/meeting'><button id='btn1'>Book a Meeting</button></a> 
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default Navbar;