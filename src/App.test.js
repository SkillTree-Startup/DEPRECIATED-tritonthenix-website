import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import JoinUsSection from './components/JoinUsSection/JoinUsSection';
import WorkoutSchedule from './components/WorkoutSchedule/WorkoutSchedule';
import MemberSection from './components/MemberSection/MemberSection';
import Footer from './components/Footer/Footer';
import './App.css';
import BackgroundTiles from './components/BackgroundTiles';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function AppTest() {
  return (
    <div className="App">
      <main>
        <WorkoutSchedule />
        <BackgroundTiles />
      </main>
    </div>
  );
}

export default AppTest;
