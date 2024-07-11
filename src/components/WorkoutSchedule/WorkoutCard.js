import React from 'react';
import './WorkoutCard.css';

function WorkoutCard() {
  return (
    <div className="WorkoutCard">
      <img src="workout-image-placeholder.png" alt="Workout" />
      <h3>Workout Name</h3>
      <p>Description of the workout.</p>
    </div>
  );
}

export default WorkoutCard;
