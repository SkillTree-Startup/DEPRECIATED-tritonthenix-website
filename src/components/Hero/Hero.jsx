import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ title, body, buttonText, image }) => (
  <section className={styles.hero}>
    <img src={image} alt="Hero" className={styles.heroImage} />
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroBody}>{body}</p>
      <button className={styles.heroButton}>{buttonText}</button>
    </div>
  </section>
);

export default Hero;
