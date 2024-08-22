import React, { useState } from 'react';
import styles from './Header.module.css';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import logo from '../../assets/svg/logo.svg'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <img src={logo} alt="Logo" className={styles.logo} />
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