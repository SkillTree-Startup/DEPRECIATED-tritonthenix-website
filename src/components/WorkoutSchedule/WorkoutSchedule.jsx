import React from 'react';
import styles from './WorkoutSchedule.module.css';
import Card from './Card';

const WorkoutSchedule = () => (
  <section className={styles.workoutSchedule}>
    <div className={styles.workoutTop}>
    <div className={styles.workoutImage}>
      <Card
          eventName="DragonFire Workout"
          description="This is an example workout description."
          imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          time="5pm-7pm"
          date="Mon, Wed, Fri"
          location="Muir Fit Park"
        />
    </div>
      <div className={styles.scheduleContent}>
        <h2 className={styles.scheduleTitle}>Workout Schedule</h2>
        <p className={styles.scheduleDescription}>
          Description: Here is where we can write a description about how Saturday workouts are formatted and how they are run. We can talk about the purpose of the workouts as well as hype up the head trainer.
        </p>
      </div>
    </div>
    <div className={styles.imageGallery}>
      <div className={styles.galleryImage}>
        <Card
          eventName="DragonFire Workout"
          description="This is an example workout description."
          imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          time="5pm-7pm"
          date="Mon, Wed, Fri"
          location="Muir Fit Park"
        />
      </div>
      <div className={styles.galleryImage}>
        <Card
          eventName="DragonFire Workout"
          description="This is an example workout description."
          imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          time="5pm-7pm"
          date="Mon, Wed, Fri"
          location="Muir Fit Park"
        />
      </div><div className={styles.galleryImage}>
        <Card
          eventName="DragonFire Workout"
          description="This is an example workout description."
          imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          time="5pm-7pm"
          date="Mon, Wed, Fri"
          location="Muir Fit Park"
        />
      </div>
      <div className={styles.galleryImage}>
        <Card
          eventName="DragonFire Workout"
          description="This is an example workout description."
          imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          time="5pm-7pm"
          date="Mon, Wed, Fri"
          location="Muir Fit Park"
        />
      </div>
      <div className={styles.galleryImage}>
        <Card
          eventName="DragonFire Workout"
          description="This is an example workout description."
          imageUrl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          time="5pm-7pm"
          date="Mon, Wed, Fri"
          location="Muir Fit Park"
        />
      </div>
    </div>
  </section>
);

export default WorkoutSchedule;