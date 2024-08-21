import React from 'react';
import styles from './Footer.module.css';

const InstagramSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.75 2H16.25C19.0972 2 21.25 4.15278 21.25 7V16.25C21.25 19.0972 19.0972 21.25 16.25 21.25H7.75C4.90278 21.25 2.75 19.0972 2.75 16.25V7C2.75 4.15278 4.90278 2 7.75 2ZM16.25 0.75H7.75C3.95278 0.75 0.75 3.95278 0.75 7.75V16.25C0.75 20.0472 3.95278 23.25 7.75 23.25H16.25C20.0472 23.25 23.25 20.0472 23.25 16.25V7.75C23.25 3.95278 20.0472 0.75 16.25 0.75ZM12 6.5C9.51472 6.5 7.5 8.51472 7.5 11C7.5 13.4853 9.51472 15.5 12 15.5C14.4853 15.5 16.5 13.4853 16.5 11C16.5 8.51472 14.4853 6.5 12 6.5ZM12 13.75C10.7574 13.75 9.75 12.7426 9.75 11.5C9.75 10.2574 10.7574 9.25 12 9.25C13.2426 9.25 14.25 10.2574 14.25 11.5C14.25 12.7426 13.2426 13.75 12 13.75ZM17.4062 6.58333C17.9896 6.58333 18.4583 6.11458 18.4583 5.53125C18.4583 4.94792 17.9896 4.47917 17.4062 4.47917C16.8229 4.47917 16.3542 4.94792 16.3542 5.53125C16.3542 6.11458 16.8229 6.58333 17.4062 6.58333Z" fill="#888888"/>
  </svg>
);

const DiscordSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.369c-1.185-.525-2.448-.9-3.76-1.108-.167.277-.353.646-.486.935-1.43-.217-2.86-.217-4.287 0-.134-.29-.32-.658-.486-.935-1.315.208-2.575.583-3.761 1.108-2.384 3.477-3.035 6.88-2.721 10.245 1.569 1.17 3.086 1.902 4.603 2.367.371-.504.704-1.03.99-1.577-.55-.204-1.073-.46-1.576-.756.133-.097.266-.192.397-.288 3.027 1.4 6.312 1.4 9.32 0 .133.1.265.19.397.288-.503.296-1.027.552-1.575.756.285.547.619 1.073.99 1.577 1.518-.465 3.035-1.197 4.603-2.367.374-4.045-.632-7.395-2.721-10.245zm-11.005 7.916c-.99 0-1.796-.933-1.796-2.08s.8-2.081 1.797-2.081c.992 0 1.798.934 1.796 2.081 0 1.147-.8 2.08-1.797 2.08zm5.379 0c-.992 0-1.797-.933-1.797-2.08s.8-2.081 1.797-2.081c.992 0 1.797.934 1.797 2.081 0 1.147-.8 2.08-1.797 2.08z" fill="#888888"/>
  </svg>
);

const EmailSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4.5c0-.827.673-1.5 1.5-1.5h17c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-15zm9.247 7.967l-8.497-5.3v11.333h17v-11.333l-8.497 5.3c-.312.195-.695.195-1.007 0zm-7.432-6.967l8.433 5.267 8.432-5.267h-16.865z" fill="#888888"/>
  </svg>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerSection}>
        <h3>About Us</h3>
        <p>TRITONTHENIX is dedicated to self-improvement through fitness and bodyweight training.</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#join">Join</a></li>
          <li><a href="#workouts">Workouts</a></li>
          <li><a href="#members">Members</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Connect With Us</h3>
        <div className={styles.icons}>
          <a href="https://www.instagram.com/tritonthenix" target="_blank" rel="noopener noreferrer">
            <InstagramSVG />
          </a>
          <a href="https://www.discord.gg/hHvv8UkUrw" target="_blank" rel="noopener noreferrer">
            <DiscordSVG />
          </a>
          <a href="mailto:tritonthenix@ucsd.edu">
            <EmailSVG />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2023 TRITONTHENIX. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
