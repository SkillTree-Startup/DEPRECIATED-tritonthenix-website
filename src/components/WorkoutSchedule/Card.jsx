import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './Card.css';

const Card = ({ imageUrl, eventName, description, time, days, date, location, other, theme, link, icsFile }) => {
  const [cookies, setCookie] = useCookies(['bookmarkedEvents']);
  const [bookmarked, setBookmarked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Check if the event is already bookmarked from cookies
    const bookmarkedEvents = cookies.bookmarkedEvents || {};
    if (bookmarkedEvents[eventName]) {
      setBookmarked(true);
    }
  }, [cookies, eventName]);

  const handleBookmark = (e) => {
    e.stopPropagation(); // Prevents the card from expanding when the bookmark button is clicked

    const newBookmarked = !bookmarked;
    setBookmarked(newBookmarked);

    // Update cookies
    setCookie('bookmarkedEvents', {
      ...cookies.bookmarkedEvents,
      [eventName]: newBookmarked
    }, { path: '/' });

    if (newBookmarked) {
      // Trigger the download if it's not already bookmarked
      const linkElement = document.createElement('a');
      linkElement.href = icsFile;
      linkElement.download = `${eventName.replace(/\s+/g, '_')}.ics`;
      linkElement.click();
    }
  };

  const handleCardClick = (e) => {
    e.stopPropagation(); // Prevents other click handlers from firing
    if (link) {
      window.open(link, '_blank');
    }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`workoutCard ${theme}`} onClick={handleCardClick}>
      <div className={`workoutImageButton ${expanded ? 'expanded' : ''}`}>
        <div className="overlay"></div>
        <img src={imageUrl} alt="Workout" className="workoutImage" />
        <div className="eventHeader">
          <h1 className="eventName">{eventName}</h1>
          <button
            className={`bookmarkButton ${bookmarked ? 'bookmarked' : ''}`}
            onClick={handleBookmark}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M2 2V15.5C1.99994 15.5868 2.02248 15.6722 2.06542 15.7476C2.10836 15.8231 2.17022 15.8861 2.24489 15.9304C2.31957 15.9747 2.40449 15.9988 2.4913 16.0003C2.57812 16.0018 2.66383 15.9807 2.74 15.939L8 13.069L13.26 15.939C13.3362 15.9807 13.4219 16.0018 13.5087 16.0003C13.5955 15.9988 13.6804 15.9747 13.7551 15.9304C13.8298 15.8861 13.8916 15.8231 13.9346 15.7476C13.9775 15.6722 14.0001 15.5868 14 15.5V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V2Z" />
            </svg>
          </button>
        </div>
        <div className="eventDetails">
          <div className="descriptionContainer">
            <h2 className='days'>{days}</h2>
            <h2 className='date'>{date}</h2>
            <h2>{time}</h2>
            <h2>{location}</h2>
            {other && <h2 className='other'>{other}</h2>}
          </div>
        </div>

        <div className="summaryContainer">
            {description && <h2 className='summaryDescription'>{description}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Card;
