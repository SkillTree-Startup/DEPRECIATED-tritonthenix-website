import React from 'react';
import styles from './MobileMenu.module.css';

const MobileMenu = () => (
  <nav className={styles.mobileMenu}>
    <ul className={styles.mobileNavList}>
      <li><a href="#join">Join</a></li>
      <li><a href="#workouts">Workouts</a></li>
      <li><a href="#members">Members</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>
);

export default MobileMenu;