import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import AnnouncementBanner from '../Header/AnnouncementBanner';
import Background from '../Background/BackgroundTiles'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <AnnouncementBanner announcement="⚠️❗FALL MERCH IS HERE❗⚠️ Message us @TritonThenix on instagram to get yours today!" />
    <Header />
    <main className={styles.mainContent}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;