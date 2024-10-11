import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-wrapper">
      <div className="hero-content">
        <p className="pill pill-powerfull pill-blue">POWERFULL</p>
        <h1 className="hero__title">Group Practice With Trainer</h1>
        <p className="hero__text">
          Welcome to our Sports Center, where community meets excellence. Join our group sessions led by expert trainers
          to achieve your fitness goals in a motivating and supportive environment.
        </p>
        <div className="hero__buttons">
          <a className="pill pill-sm pill-blue" href="#contact">Sign Up</a>
          <a className="pill pill-sm pill-transparent" href="#classes">Details</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
