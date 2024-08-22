import React, { useState, useEffect } from 'react';
import styles from './MemberList.module.css';
import { fetchMemberData } from './MemberData'; // Import the fetch function

// Function to shuffle array elements
const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MemberList = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [displayedMembers, setDisplayedMembers] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Load members and set initial state
  useEffect(() => {
    const loadMembers = async () => {
      try {
        const memberData = await fetchMemberData();
        const shuffledMembers = shuffleArray(memberData).map(member => ({
          name: `${member['First Name']} ${member['Last Name']}`,
          bio: `Major: ${member['Major']}, College: ${member['College']}`,
          image: member['Upload a picture of yourself to be featured on our website!']
        }));
        setAllMembers(shuffledMembers);
      } catch (error) {
        console.error('Error loading member data:', error);
      }
    };

    loadMembers();
  }, []);

  // Handle screen resizing and set the number of displayed members
  useEffect(() => {
    const updateDisplayedMembers = () => {
      let numberOfMembers;
      if (screenWidth <= 640) {
        numberOfMembers = 1;  // Show 1 member on small screens
      } else if (screenWidth <= 991) {
        numberOfMembers = 2;  // Show 2 members on medium screens
      } else {
        numberOfMembers = 4;  // Show 4 members on large screens
      }
      setDisplayedMembers(allMembers.slice(0, numberOfMembers));
    };

    updateDisplayedMembers();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth, allMembers]);

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
