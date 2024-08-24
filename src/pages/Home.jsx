import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Bingo from '../components/Bingo/Bingo';
import JoinTeam from '../components/JoinTeam/JoinTeam';
import WorkoutSchedule from '../components/WorkoutSchedule/WorkoutSchedule';
import MemberList from '../components/MemberList/MemberList';
import Events from '../components/Events/Events';

const Home = () => {
  const [cookies] = useCookies(['bingoClicked']);
  const [showBingo, setShowBingo] = useState(false);

  useEffect(() => {
    if (cookies.bingoClicked) {
      setShowBingo(true);
    }
  }, [cookies.bingoClicked]);

  const handleBingoClick = () => {
    setShowBingo(true);
  };

  const handleBingoComplete = () => {
    setShowBingo(false);
  };

  return (
    <Layout>
      {showBingo ? (
        <Bingo 
          tasks={[
            'Attend a Saturday Workout', 'Come visit us during Tabeling', 'Attend a Social Event',
            'Meet all the Officers', 'Fill out our Interest Form', 'Follow TritonThenix on Instagram',
            'Invite a Friend to a Workout', 'Meet all the Bigs', 'Attend a Mini-Meet'
          ]}
          onComplete={handleBingoComplete} // Handle completion and return to Hero
        />
      ) : (
        <Hero
          title="TRITONTHENIX"
          body="Self Improvement through fitness and bodyweight training"
          buttonText="JOIN"
          onBingoClick={handleBingoClick}
        />
      )}
      <section id="join">
        <JoinTeam 
          title="JOIN OUR TEAM"
          description="We’d love to hear from you! Whether you’re looking for a full-time role, an internship, or volunteer opportunities, we have a place for you!"
          buttonText="Contact Us"
        />
      </section>
      <section id="workouts">
        <WorkoutSchedule />
      </section>
      <section id="members">
        <MemberList />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="contact">
      </section>
    </Layout>
  );
};

export default Home;
