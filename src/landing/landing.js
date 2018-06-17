import React from 'react';

import Description from './assets/description-min.svg';
import MainImage from './__image/landing__image';
import Name from './assets/name-min.svg';

import './landing.css';

const Landing = () => (
  <div className="landing">
    <div className="landing__name">
      <img
        alt="James Knight, PhD"
        className="landing__image"
        src={Name}
      />
    </div>
    <div className="landing__main-image">
      <MainImage />
    </div>
    <div className="landing__description">
      <img
        alt="Programmer and scientist"
        className="landing__image"
        src={Description}
      />
    </div>
  </div>
);
export default Landing;
