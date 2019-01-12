import React from 'react';

import MainImage from './__image/landing__image';

import './landing.css';

const Landing = () => (
  <section className="landing">
    <h1 className="landing__name">
      <span>JAMES KNIGHT</span>
      <span>PhD</span>
    </h1>
    <div className="landing__main-image">
      <MainImage />
    </div>
    <h2 className="landing__description">
      <span>Programmer</span>
      <span>Scientist</span>
    </h2>
  </section>
);
export default Landing;
