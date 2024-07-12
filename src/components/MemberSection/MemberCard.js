import React from 'react';
import './MemberCard.css';

function MemberCard({ imageUrl, userName, familyName, percentage }) {
  return (
    <div className="MemberCard">
      <img src={imageUrl} alt="Member" className="MemberImage" />
      <div className="MemberTextContainer">
        <h3 className="MemberUserName">{userName}</h3>
        <p className="MemberFamilyName">{familyName}</p>
      </div>
      <div className="ProgressBarContainer">
        <div className="ProgressBar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default MemberCard;
