import React from 'react';
import WorkoutCard from './WorkoutCard';
import './WorkoutSchedule.css';

function WorkoutSchedule() {
  return (
    <section className="WorkoutSchedule">
      <h2>Workout Schedule</h2>
      <div className="workout-cards">
      <WorkoutCard
        eventName="Triton Fitness Summit"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="July, 15th"
        location="Muir Fit Park"
      />
      <WorkoutCard
        eventName="Battle Ropes"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="July, 15th"
        location="Muir Fit Park"
      />
      <WorkoutCard
        eventName="accessorize your workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg"
        time="5pm-7pm"
        date="July, 15th"
        location="Muir Fit Park"
      />
      <WorkoutCard
        eventName="Yoga with the girls"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="July, 15th"
        location="Muir Fit Park"
      />
      </div>
    </section>
  );
}

export default WorkoutSchedule;
