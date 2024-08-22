import React from 'react';
import styles from './Navigation.module.css';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      <li><a href="#join" onClick={(e) => { e.preventDefault(); scrollToSection('join'); }}>Join</a></li>
      <li><a href="#workouts" onClick={(e) => { e.preventDefault(); scrollToSection('workouts'); }}>Workouts</a></li>
      <li><a href="#members" onClick={(e) => { e.preventDefault(); scrollToSection('members'); }}>Members</a></li>
      <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}>Events</a></li>
      <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
    </ul>
  </nav>
);

export default Navigation;
