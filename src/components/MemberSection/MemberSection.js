import React from 'react';
import MemberCard from './MemberCard';
import './MemberSection.css';

function MemberSection() {
  return (
    <section className="MemberSection">
      <h2>Our Members</h2>
      <div className="member-cards">
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </section>
  );
}

export default MemberSection;
