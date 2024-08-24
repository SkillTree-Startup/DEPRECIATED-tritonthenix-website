import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './Hero.module.css';

// Images
import freestyle from '../../assets/images/IMG_9353.jpeg';
import stretch from '../../assets/images/stretch.jpg';
import pushup from '../../assets/images/pushup2.jpg';
import logo from '../../assets/svg/logo.svg';

const images = [
  freestyle,
  stretch,
  pushup
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Hero = ({ body, buttonText, onBingoClick }) => {
  const [cookies, setCookie] = useCookies(['buttonClicked', 'bingoCompleted']);
  const [buttonLabel, setButtonLabel] = useState(buttonText);
  const [buttonLink, setButtonLink] = useState("https://forms.gle/bV2UhPJ5idsXzSMy9");

  useEffect(() => {
    if (cookies.bingoCompleted) {
      setButtonLabel(null); // Hide the button
    } else if (cookies.buttonClicked) {
      setButtonLabel("BINGO");
    } else {
      setButtonLabel(buttonText);
      setButtonLink("https://forms.gle/bV2UhPJ5idsXzSMy9"); // Set the button link for the first click
    }
  }, [cookies.bingoCompleted, cookies.buttonClicked, buttonText]);

  const handleButtonClick = () => {
    if (!cookies.buttonClicked) {
      setCookie('buttonClicked', 'true', { path: '/' });
      setButtonLabel("BINGO");
      setButtonLink("https://forms.gle/bV2UhPJ5idsXzSMy9"); // Ensure this link is used on the first click
      window.open(buttonLink, '_blank'); // Open the link in a new tab
    } else if (buttonLabel === "BINGO") {
      setCookie('bingoCompleted', 'true', { path: '/' }); // Set bingoCompleted cookie to true
      onBingoClick(); // Trigger the replacement of the Hero component with the Bingo component
      setButtonLabel(null); // Hide the button immediately after bingo is completed
    }
  };

  return (
    <section className={styles.hero}>
      <img src={getRandomImage()} alt="Hero" className={styles.heroImage} />
      <div className={styles.filter}></div>
      <div className={styles.heroContent}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <p className={styles.heroBody}>{body}</p>
        {buttonLabel && (
          <button className={styles.heroButton} onClick={handleButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
