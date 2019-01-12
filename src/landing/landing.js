import React from 'react';

import Description from './__description/landing__description-container';
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
    <Description />
  </section>
);
export default Landing;
