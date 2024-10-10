import React, { useEffect, useState } from 'react';
import styles from './Events.module.css';
import Card from '../WorkoutSchedule/Card';
import { fetchEventsData } from './EventsData'; // Ensure the path is correct

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEventsData = async () => {
      try {
        const data = await fetchEventsData(); // Assume this fetches CSV data and includes 'rsvp' field
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };

    loadEventsData();
  }, []);

  // Function to generate the Google Form link based on RSVP status
  const generateEventLink = (eventName, rsvp) => {
    const baseGoogleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd58IUJbk6wyxfeBl3k4zwesKz41_f8sbEhwmcGETF44wiO8A/formResponse?entry.1035634596=";
    const rsvpLink = `https://docs.google.com/forms/d/e/1FAIpQLSd58IUJbk6wyxfeBl3k4zwesKz41_f8sbEhwmcGETF44wiO8A/viewform?usp=sf_link&entry.1035634596=${encodeURIComponent(eventName)}`;

    // If RSVP is required (rsvp = "yes"), return the RSVP link; otherwise, use the generated link
    return rsvp === 'Yes'
      ? rsvpLink
      : `${baseGoogleFormLink}${encodeURIComponent(eventName)}&entry.928333780=This+event+does+not+require+RSVP&submit=Submit`;
  };

  return (
    <section className={styles.events}>
      <div className={styles.eventsTop}>
        {events.length > 0 && events[0] && (
          <div className={styles.mainEventImage}>
            <Card
              eventName={events[0].eventName}
              description={events[0].description}
              imageUrl={events[0].imageUrl}
              time={events[0].time}
              date={events[0].date}
              location={events[0].location}
              other={events[0].other}
              theme="main event"
              link={generateEventLink(events[0].eventName, events[0].rsvp)} // Pass 'rsvp' status
              calendar={events[0].calendar}
            />
          </div>
        )}
        <div className={styles.eventsContent}>
          <h2 className={styles.eventsTitle}>Events</h2>
          <p className={styles.eventsDescription}>
            TritonThenix isn't just about fitness—it's about building lasting friendships and creating unforgettable memories. Our social events are designed to bring our community together outside of workouts, offering a chance to unwind, have fun, and connect with fellow members. From beach days and barbecues to themed parties and outdoor adventures, our events cater to a wide range of interests and are open to all members. These gatherings are the perfect opportunity to bond with your workout partners, celebrate achievements, and enjoy the camaraderie that makes TritonThenix more than just a fitness club. Whether you're new to the community or a seasoned member, our social events are a cornerstone of the TritonThenix experience, fostering a sense of belonging and making every moment at UCSD even more special.
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
              time={event.time}
              date={event.date}
              location={event.location}
              theme="event"
              other={event.other}
              link={generateEventLink(event.eventName, event.rsvp)} // Pass 'rsvp' status
              calendar={event.calendar}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
