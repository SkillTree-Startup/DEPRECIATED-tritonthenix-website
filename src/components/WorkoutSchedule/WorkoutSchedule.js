import React from 'react';
import WorkoutCard from './WorkoutCard';
import './WorkoutSchedule.css';

function WorkoutSchedule() {
  return (
    <section className="WorkoutSchedule">
      <h2>Workout Schedule</h2>
      <div className="workout-cards">
      <WorkoutCard
        eventName="DragonFire Workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="Mon, Wed, Fri"
        location="Muir Fit Park"
      />
      <WorkoutCard
        eventName="King Family Workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="2pm-3pm"
        date="Tues, Thurs"
        location="Muir Fit Park"
      />
      <WorkoutCard
        eventName="Jack's Family Workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg"
        time="1pm-4pm"
        date="Mon, Tues, Fri"
        location="Muir Fit Park"
        theme="dark"
      />
      <WorkoutCard
        eventName="Gabe's Family Workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="Sun, Wed, Thurs"
        location="Muir Fit Park"
        theme="dark"
      />
      <WorkoutCard
        eventName="Sophia's Family Workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="Mon, Wed, Fri"
        location="Muir Fit Park"
      />
      <WorkoutCard
        eventName="Saturday Workout"
        description="This is an example workout description."
        imageUrl="https://images.pexels.com/photos/3943939/pexels-photo-3943939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        time="5pm-7pm"
        date="Saturday"
        location="Muir Bar Park"
      />
      </div>
    </section>
  );
}

export default WorkoutSchedule;
