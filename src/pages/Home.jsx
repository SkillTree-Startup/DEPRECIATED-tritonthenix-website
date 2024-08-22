import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import JoinTeam from '../components/JoinTeam/JoinTeam';
import WorkoutSchedule from '../components/WorkoutSchedule/WorkoutSchedule';
import MemberList from '../components/MemberList/MemberList';
import Events from '../components/Events/Events';

const Home = () => (
  <Layout>
    <Hero
      title="TRITONTHENIX"
      body="Self Improvement through fitness and bodyweight training"
      buttonText="JOIN"
      image="https://cdn.builder.io/api/v1/image/assets%2Fa8b7168136f64220b5633a354f9263d0%2Fa99c5659c5ad4b898005f32e7fb12de7"
    />
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

export default Home;
