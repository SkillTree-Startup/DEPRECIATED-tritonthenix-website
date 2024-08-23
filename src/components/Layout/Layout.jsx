import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AnnouncementBanner from '../Header/AnnouncementBanner';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true); // scrolling down
      } else {
        setIsScrollingDown(false); // scrolling up
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={styles.layout}>
      <AnnouncementBanner announcement="⚠️❗FALL MERCH IS HERE❗⚠️ Message us @TritonThenix on instagram to get yours today!" />
      <div className={`${styles.header} ${isScrollingDown ? styles.hidden : ''}`}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
