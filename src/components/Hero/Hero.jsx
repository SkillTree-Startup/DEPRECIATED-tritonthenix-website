import React from 'react';
import styles from './Hero.module.css';

//images
import freestyle from '../../assets/images/IMG_9353.jpeg';
import stretch from '../../assets/images/stretch.jpg'
import pushup from '../../assets/images/pushup2.jpg'

const images = [
  freestyle,
  stretch,
  pushup
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Hero = ({ title, body, buttonText }) => (
  <section className={styles.hero}>
    <img src={getRandomImage()} alt="Hero" className={styles.heroImage} />
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroBody}>{body}</p>
      <button className={styles.heroButton}>{buttonText}</button>
    </div>
  </section>
);

export default Hero;
