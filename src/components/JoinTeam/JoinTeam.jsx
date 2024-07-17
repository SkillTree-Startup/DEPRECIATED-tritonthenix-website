import React from 'react';
import styles from './JoinTeam.module.css';

const JoinUs = ({ title, description, buttonText }) => (
  <section className={styles.joinTeam}>
    <div className={styles.joinContent}>
      <h1 className={styles.joinTitle}>{title}</h1>
      <p className={styles.joinDescription}>{description}</p>
    </div>
    <button className={styles.learnMoreButton}>{buttonText}</button>
  </section>
);

export default JoinUs;
