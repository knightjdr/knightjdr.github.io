import React from 'react';

import ComputerBack from './images/computer-back';
import Description from '../assets/images/description-min.svg';
import Name from '../assets/images/name-min.svg';

import './landing.css';

const Landing = () => (
  <div className="Landing">
    <div className="Landing-name">
      <img
        alt="James Knight, PhD"
        src={Name}
      />
    </div>
    <div className="Landing-image">
      <ComputerBack />
    </div>
    <div className="Landing-description">
      <img
        alt="Programmer and scientist"
        src={Description}
      />
    </div>
  </div>
);
export default Landing;
