import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import JoinUsSection from './components/JoinUsSection/JoinUsSection';
import WorkoutSchedule from './components/WorkoutSchedule/WorkoutSchedule';
import MemberSection from './components/MemberSection/MemberSection';
import Footer from './components/Footer/Footer';
import './App.css';
import BackgroundTiles from './components/BackgroundTiles';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink and scroll from react-scroll

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function AppTest() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <WorkoutSchedule id="families" />
        <MemberSection id="about" />
        <BackgroundTiles />
        <Footer id="contact" />
      </main>
    </div>
  );
}

export default AppTest;
