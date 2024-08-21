import React, { useState, useEffect } from 'react';
import styles from './MemberList.module.css';

const members = [
  { name: 'Alex Johnson', bio: 'Here members can write a short bio about their experiences', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faa380a88ce784cf595bbb7bb352e06eb' },
  { name: 'Taylor Smith', bio: 'Here members can write a short bio about their experiences', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd4a66864f0f1470da698014238fef995' },
  { name: 'Riley Brown', bio: 'Here members can write a short bio about their experiences', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe1262eb4b50e499d9d5e6bea90a771f9' },
  { name: 'Jordan Davis', bio: 'Marketing Specialist', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3c50a0582c6c418abada5c25103249eb' },
  { name: 'Test1 +4', bio: 'Marketing Specialist', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3c50a0582c6c418abada5c25103249eb' },
  { name: 'Test2 +4', bio: 'Marketing Specialist', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3c50a0582c6c418abada5c25103249eb' },
  { name: 'Test3 +4', bio: 'Marketing Specialist', image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3c50a0582c6c418abada5c25103249eb' },
];

const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MemberList = () => {
  const [displayedMembers, setDisplayedMembers] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setDisplayedMembers(shuffleArray(members).slice(0, 1));
      } else if (window.innerWidth <= 991) {
        setDisplayedMembers(shuffleArray(members).slice(0, 2));
      } else {
        setDisplayedMembers(shuffleArray(members).slice(0, 4)); // Adjusted to show only 4 cards at the largest size
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.memberList}>
      <h2 className={styles.memberListTitle}>Our Members</h2>
      <div className={styles.memberGrid}>
        {displayedMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <img src={member.image} alt={member.name} className={styles.memberImage} />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberBio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberList;