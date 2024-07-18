import React from 'react';
import styles from './WorkoutSchedule.module.css';
import Card from './Card';

const WorkoutSchedule = () => (
  <section className={styles.workoutSchedule}>
    <div className={styles.workoutTop}>
    <div className={styles.workoutImage}>
    <Card 
        imgSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F103ec2c7fc7c46ffa0cf49e115677cad"
        spanTag="January 1, 2024"
        constentHead="This is a Card Title"
        constentPara="This is the card content. It gives a brief description of the card."
        likes="1000"
        bookmarks="500"
        dislikes="25"
        color="#FF5733"
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
      <Card
        imgSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F103ec2c7fc7c46ffa0cf49e115677cad"
        spanTag="January 1, 2024"
        constentHead="This is a Card Title"
        constentPara="This is the card content. It gives a brief description of the card."
        likes="1000"
        bookmarks="500"
        dislikes="25"
        color="#FF5733"
      />
      <Card
        imgSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd9d14db4dfd84ad9b4bab297ade3a6b7"
        spanTag="February 1, 2024"
        constentHead="This is another Card Title"
        constentPara="This is more card content."
        likes="800"
        bookmarks="300"
        dislikes="15"
        color="#33A1FF"
      />
      <Card
        imgSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe29ee6d02a0a4a79b0e04dab1a66cd83"
        spanTag="March 1, 2024"
        constentHead="Yet Another Card Title"
        constentPara="This is even more card content."
        likes="1200"
        bookmarks="700"
        dislikes="35"
        color="#85FF33"
      />
      <Card
        imgSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fce5f9ce8520940019e645dc65b9b0199"
        spanTag="April 1, 2024"
        constentHead="Final Card Title"
        constentPara="This is the final card content."
        likes="1500"
        bookmarks="900"
        dislikes="45"
        color="#FF3381"
      />
    </div>
  </section>
);

export default WorkoutSchedule;
