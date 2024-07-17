import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import AnnouncementBanner from '../Header/AnnouncementBanner';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <AnnouncementBanner announcement="This is an important announcement!" />
    <Header />
    <main className={styles.mainContent}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;