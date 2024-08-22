import React, { useEffect, useRef } from 'react';
import './AnnouncementBanner.css';

const AnnouncementBanner = ({ announcement }) => {
  const bannerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const bannerWidth = bannerRef.current.offsetWidth;
    const textWidth = textRef1.current.offsetWidth;

    if (textWidth > bannerWidth) {
      textRef1.current.classList.add('scrolling');
      textRef2.current.classList.add('scrolling');
    } else {
      textRef1.current.classList.remove('scrolling');
      textRef2.current.classList.remove('scrolling');
    }
  }, [announcement]);

  return (
    <div className="announcement-banner" ref={bannerRef}>
      <div className="announcement-text-wrapper">
        <div className="announcement-text" ref={textRef1}>
          {announcement}
        </div>
        <div className="announcement-text" ref={textRef2}>
          {announcement}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
