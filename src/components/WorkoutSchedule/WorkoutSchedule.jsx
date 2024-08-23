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
              time={workouts[0].time}
              days={workouts[0].days}
              location={workouts[0].location}
              other={workouts[0].other}
              theme={workouts[0].theme}
              link={workouts[0].link}
            />
          </div>
        )}
        <div className={styles.scheduleContent}>
          <h2 className={styles.scheduleTitle}>Workout Schedule</h2>
          <p className={styles.scheduleDescription}>
            At TritonThenix, our workouts are more than just exercises—they’re a community-driven experience designed to challenge and inspire. Whether you're a beginner or an experienced athlete, our bodyweight training sessions are tailored to help you achieve your fitness goals. We focus on calisthenics, emphasizing strength, flexibility, and endurance through movements like pull-ups, push-ups, dips, and more. Each workout is led by knowledgeable trainers who ensure that every participant can progress at their own pace while pushing their limits. Our sessions are held in a supportive and energetic environment where you can improve your skills, build confidence, and connect with fellow members. Join us at TritonThenix to elevate your fitness and be part of a vibrant community that’s dedicated to bringing bodyweight fitness to the forefront.          </p>
        </div>
      </div>
      <div className={styles.imageGallery}>
        {workouts.slice(1).map((workout, index) => (
          <div key={index} className={styles.galleryImage}>
            <Card
              eventName={workout.eventName}
              description={workout.description}
              imageUrl={workout.imageUrl}
              time={workout.time}
              days={workout.days}
              location={workout.location}
              other={workout.other}
              theme={workout.theme}
              link={workout.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutSchedule;
