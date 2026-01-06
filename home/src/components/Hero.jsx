import React from 'react';
import './Body.css'; // Assuming styles are in Body.css, or create Hero.css

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-badge">MOROCCO 2025</div>
        <h1 className="hero-title">COUPE D'AFRIQUE<br/>DES NATIONS</h1>
        <p className="hero-subtitle">21 DÉCEMBRE 2024 - 18 JANVIER 2025</p>
        <button className="cta-button">DÉCOUVRIR LE CALENDRIER</button>
      </div>
    </section>
  );
};

export default Hero;