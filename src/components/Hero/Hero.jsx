import React from 'react';
import styles from './Hero.module.css';

//images
import freestyle from '../../assets/images/IMG_9353.jpeg';
import stretch from '../../assets/images/stretch.jpg'
import pushup from '../../assets/images/pushup2.jpg'
import logo from '../../assets/svg/logo.svg'

const images = [
  freestyle,
  stretch,
  pushup
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Hero = ({ body, buttonText }) => (
  <section className={styles.hero}>
    <img src={getRandomImage()} alt="Hero" className={styles.heroImage} />
    <div className={styles.filter}></div>
    <div className={styles.heroContent}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <p className={styles.heroBody}>{body}</p>
      <button className={styles.heroButton}>{buttonText}</button>
    </div>
  </section>
);

export default Hero;
