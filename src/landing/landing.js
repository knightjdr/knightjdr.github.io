import React from 'react';

import MainImage from './__image/landing__image';

import './landing.css';

const Landing = () => (
  <div className="landing">
    <div className="landing__name">
      <span>JAMES KNIGHT</span>
      <span>PhD</span>
    </div>
    <div className="landing__main-image">
      <MainImage />
    </div>
    <div className="landing__description">
      <span>Programmer</span>
      <span>Scientist</span>
    </div>
  </div>
);
export default Landing;
