import React from 'react';
import WorkoutCard from './WorkoutCard';
import './WorkoutSchedule.css';

function WorkoutSchedule() {
  return (
    <section className="WorkoutSchedule">
      <h2>Workout Schedule</h2>
      <div className="workout-cards">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </div>
    </section>
  );
}

export default WorkoutSchedule;
