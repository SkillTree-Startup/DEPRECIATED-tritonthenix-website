import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import JoinUsSection from './components/JoinUsSection/JoinUsSection';
import WorkoutSchedule from './components/WorkoutSchedule/WorkoutSchedule';
import MemberSection from './components/MemberSection/MemberSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <JoinUsSection />
        <WorkoutSchedule />
        <MemberSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
