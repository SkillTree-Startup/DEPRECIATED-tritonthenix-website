import React from "react";
import styles from './Hero.css';

function Hero({ title, body, buttonText, image }) {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
      <button className={styles.button}>{buttonText}</button>
      <img src={image} alt="Hero" className={styles.image} />
    </div>
  );
}

export default Hero;