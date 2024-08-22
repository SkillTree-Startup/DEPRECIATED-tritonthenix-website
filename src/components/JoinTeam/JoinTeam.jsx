import React from 'react';
import styles from './JoinTeam.module.css';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const JoinUs = ({ title, description, buttonText }) => (
  <section className={styles.joinTeam}>
    <div className={styles.joinContent}>
      <h1 className={styles.joinTitle}>{title}</h1>
      <p className={styles.joinDescription}>{description}</p>
    </div>
    <button 
      className={styles.learnMoreButton} 
      onClick={() => scrollToSection('contact')}
    >
      {buttonText}
    </button>
  </section>
);

export default JoinUs;
