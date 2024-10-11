import React, { useEffect, useState, useRef } from 'react';
import logo from '/src/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle scroll event to toggle 'scrolled' class
  useEffect(() => {
    const scrollThreshold = 50;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the page is loaded with scroll
    handleScroll();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu toggle for mobile view
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={isScrolled ? 'scrolled' : ''}>
      <div className="nav">
        <div className="nav__logo">
          <img src={logo} alt="Sports Center Logo" />
        </div>
        {/* Hamburger Menu Icon */}
        <button
          ref={hamburgerRef}
          className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
        </button>
        <nav
          ref={navLinksRef}
          className={`nav__links ${menuOpen ? 'active' : ''}`}
        >
          <ul>
            <li><a href="#" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#classes" onClick={handleLinkClick}>Classes</a></li>
            <li><a href="#trainers" onClick={handleLinkClick}>Trainers</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            <li><a className="pill pill-xs pill-orange" href="#contact" onClick={handleLinkClick}>JOIN US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
