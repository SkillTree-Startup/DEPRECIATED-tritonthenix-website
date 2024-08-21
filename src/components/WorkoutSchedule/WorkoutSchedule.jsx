import React, { useEffect, useState } from 'react';
import styles from './WorkoutSchedule.module.css';
import Card from './Card';
import { fetchWorkoutsData } from './WorkoutData'; // Ensure the path is correct

const WorkoutSchedule = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const loadWorkoutsData = async () => {
      try {
        const data = await fetchWorkoutsData();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts data:', error);
      }
    };

    loadWorkoutsData();
  }, []);

  return (
    <section className={styles.workoutSchedule}>
      <div className={styles.workoutTop}>
        {workouts.length > 0 && workouts[0] && (
          <div className={styles.workoutImage}>
            <Card
              eventName={workouts[0].eventName}
              description={workouts[0].description}
              imageUrl={workouts[0].imageUrl}
              trainer={workouts[0].trainer}
              time={workouts[0].time}
              days={workouts[0].days}
              location={workouts[0].location}
              theme={workouts[0].theme}
            />
          </div>
        )}
        <div className={styles.scheduleContent}>
          <h2 className={styles.scheduleTitle}>Workout Schedule</h2>
          <p className={styles.scheduleDescription}>
            Description: Here is where we can write a description about how Saturday workouts are formatted and how they are run. We can talk about the purpose of the workouts as well as hype up the head trainer.
          </p>
        </div>
      </div>
      <div className={styles.imageGallery}>
        {workouts.slice(1).map((workout, index) => (
          <div key={index} className={styles.galleryImage}>
            <Card
              eventName={workout.eventName}
              description={workout.description}
              imageUrl={workout.imageUrl}
              trainer={workout.trainer}
              time={workout.time}
              days={workout.days}
              location={workout.location}
              theme={workout.theme}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutSchedule;
