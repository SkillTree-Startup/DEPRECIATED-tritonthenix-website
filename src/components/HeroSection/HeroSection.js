import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="HeroSection">
      <blockquote>"It is a disgrace to grow old through sheer carelessness..."</blockquote>
      <div className="slider">
        <div className="slide">Second slide</div>
      </div>
      <div className="cta-buttons">
        <button>Join</button>
        <button>Events</button>
      </div>
    </section>
  );
}

export default HeroSection;
