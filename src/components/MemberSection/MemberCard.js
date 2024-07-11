import React from 'react';
import './MemberCard.css';

function MemberCard() {
  return (
    <div className="MemberCard">
      <img src="member-placeholder.png" alt="Member" />
      <h3>User Name</h3>
      <p>Hear members share their experiences.</p>
      <progress value="45" max="100">45%</progress>
    </div>
  );
}

export default MemberCard;
