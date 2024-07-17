import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerSection}>
        <h3>About Us</h3>
        <p>TRITONTHENIX is dedicated to self-improvement through fitness and bodyweight training.</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#join">Join</a></li>
          <li><a href="#workouts">Workouts</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Connect With Us</h3>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2023 TRITONTHENIX. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;