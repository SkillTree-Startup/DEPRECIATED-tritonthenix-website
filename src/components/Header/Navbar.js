import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from '../../assets/svg/logo.svg'; // Update the path to your SVG file
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 50; // Adjust as needed
      setNavbarVisible(!isScrolled);
      if (showLinks && isScrolled) {
        setShowLinks(false);
      }
    }

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showLinks]);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowLinks(false); // Hide links after clicking on a link
  };

  return (
    <nav className={`Navbar ${navbarVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" onClick={scrollToTop} />
      </div>
      <div className="menu-icon" onClick={() => setShowLinks(!showLinks)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className={showLinks ? 'hide-icon' : ''}
        >
          <path
            d="M4 7H26M4 15H26M4 23H26"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul ref={navRef} className={showLinks ? 'nav-links show' : 'nav-links'}>
        <li>
          <ScrollLink activeClass="active" to="home" spy={true} smooth={true} onClick={scrollToTop}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink activeClass="active" to="events" spy={true} smooth={true} onClick={scrollToTop}>
            Events
          </ScrollLink>
        </li>
        <li>
          <ScrollLink activeClass="active" to="families" spy={true} smooth={true} onClick={scrollToTop}>
            Families
          </ScrollLink>
        </li>
        <li>
          <ScrollLink activeClass="active" to="about" spy={true} smooth={true} onClick={scrollToTop}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} onClick={scrollToTop}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
