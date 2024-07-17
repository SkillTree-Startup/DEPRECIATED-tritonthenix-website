import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      <li><a href="#join">Join</a></li>
      <li><a href="#workouts">Workouts</a></li>
      <li><a href="#members">Members</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navigation;