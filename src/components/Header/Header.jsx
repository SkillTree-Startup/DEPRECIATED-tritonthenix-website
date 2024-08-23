import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import logo from '../../assets/svg/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <img 
          src={logo} 
          alt="Logo" 
          className={styles.logo} 
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} // Add this line to indicate the logo is clickable
        />
        <Navigation />
        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
