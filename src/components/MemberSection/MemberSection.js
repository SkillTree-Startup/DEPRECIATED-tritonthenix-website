import React from 'react';
import MemberCard from './MemberCard';
import './MemberSection.css';

function MemberSection() {
  return (
    <section className="MemberSection">
      <h2>Our Members</h2>
      <div className="member-cards">
      <MemberCard
        imageUrl="https://via.placeholder.com/80"
        userName="User Name"
        familyName="Family Name"
        percentage={43}
      />
        <MemberCard
        imageUrl="https://via.placeholder.com/80"
        userName="User Name"
        familyName="Family Name"
        percentage={43}
      />
        <MemberCard
        imageUrl="https://via.placeholder.com/80"
        userName="User Name"
        familyName="Family Name"
        percentage={43}
      />
      </div>
    </section>
  );
}

export default MemberSection;
