import React, { useEffect, useState } from 'react';
import styles from './Events.module.css';
import Card from '../WorkoutSchedule/Card';
import { fetchEventsData } from './EventsData'; // Ensure the path is correct

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEventsData = async () => {
      try {
        const data = await fetchEventsData();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };

    loadEventsData();
  }, []);

  return (
    <section className={styles.events}>
      <div className={styles.eventsTop}>
        {events.length > 0 && events[0] && (
          <div className={styles.mainEventImage}>
            <Card
              eventName={events[0].eventName}
              description={events[0].description}
              imageUrl={events[0].imageUrl}
              trainer={events[0].trainer}
              time={events[0].time}
              days={events[0].days}
              location={events[0].location}
              theme={events[0].theme}
            />
          </div>
        )}
        <div className={styles.eventsContent}>
          <h2 className={styles.eventsTitle}>Events</h2>
          <p className={styles.eventsDescription}>
            Description: Here is where we can write a description about how Saturday workouts are formatted and how they are run. We can talk about the purpose of the workouts as well as hype up the head trainer.
          </p>
        </div>
      </div>
      <div className={styles.eventGallery}>
        {events.slice(1).map((event, index) => (
          <div key={index} className={styles.galleryImage}>
            <Card
              eventName={event.eventName}
              description={event.description}
              imageUrl={event.imageUrl}
              trainer={event.trainer}
              time={event.time}
              days={event.days}
              location={event.location}
              theme={event.theme}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
