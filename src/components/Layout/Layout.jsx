import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import AnnouncementBanner from '../Header/AnnouncementBanner';
import Background from '../Background/BackgroundTiles'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Background />
    <AnnouncementBanner announcement="This is an important announcement!" />
    <Header />
    <main className={styles.mainContent}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;