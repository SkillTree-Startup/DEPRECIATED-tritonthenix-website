import React from 'react';
import styles from './WorkoutSchedule.module.css';

const WorkoutSchedule = () => (
  <section className={styles.workoutSchedule}>
    <div className={styles.workoutTop}>
      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F103ec2c7fc7c46ffa0cf49e115677cad" alt="Workout" className={styles.workoutImage} />
      <div className={styles.scheduleContent}>
        <h2 className={styles.scheduleTitle}>Workout Schedule</h2>
        <p className={styles.scheduleDescription}>
          Description: Here is where we can write a description about how Saturday workouts are formatted and how they are run. We can talk about the purpose of the workouts as well as hype up the head trainer.
        </p>
      </div>
    </div>
    <div className={styles.imageGallery}>
      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa471dbb6e5d44da798d638de42c1d397" alt="" className={styles.galleryImage} />
      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd9d14db4dfd84ad9b4bab297ade3a6b7" alt="" className={styles.galleryImage} />
      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe29ee6d02a0a4a79b0e04dab1a66cd83" alt="" className={styles.galleryImage} />
      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fce5f9ce8520940019e645dc65b9b0199" alt="" className={styles.galleryImage} />
    </div>
  </section>
);

export default WorkoutSchedule;
