import React from 'react';

import Description from './__description/landing__description-container';
import WorkingDesk from './__image/landing__image';
import Name from './__name/landing__name';

import './landing.css';

const Landing = () => (
  <section className="landing">
    <Name />
    <WorkingDesk />
    <Description />
  </section>
);

export default Landing;
