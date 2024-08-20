import React, { useState } from 'react';
import './Card.css';

const Card = ({ imageUrl, eventName, time, date, location, theme }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className={`workoutcard ${theme}`}>
      <button className="workoutImageButton">
        <img src={imageUrl} alt="Workout" className="workoutImage" />
        <h3 className="eventName">{eventName}</h3>
        <div className="eventDetails">
          <div className="details">
            {/* <div className="info">
              <p className="smallText">{location}</p>
              <p className="smallText">{date}</p>
              <p className="smallText">{time}</p>
            </div> */}
            <div className="iconContainer">
              <button className={`likeButton ${liked ? 'liked' : ''}`} onClick={handleLike}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
                </button>
                <button className={`bookmarkButton ${bookmarked ? 'bookmarked' : ''}`} onClick={handleBookmark}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M2 2V15.5C1.99994 15.5868 2.02248 15.6722 2.06542 15.7476C2.10836 15.8231 2.17022 15.8861 2.24489 15.9304C2.31957 15.9747 2.40449 15.9988 2.4913 16.0003C2.57812 16.0018 2.66383 15.9807 2.74 15.939L8 13.069L13.26 15.939C13.3362 15.9807 13.4219 16.0018 13.5087 16.0003C13.5955 15.9988 13.6804 15.9747 13.7551 15.9304C13.8298 15.8861 13.8916 15.8231 13.9346 15.7476C13.9775 15.6722 14.0001 15.5868 14 15.5V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V2Z"/>
                  </svg>
              </button>
              <button className={`dislikeButton ${disliked ? 'disliked' : ''}`} onClick={handleDislike}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;