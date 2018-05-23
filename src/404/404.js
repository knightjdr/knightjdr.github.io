import React from 'react';
import { NavLink } from 'react-router-dom';

import Computer404 from './assets/computer404-min.svg';

import './404.css';

const Missing = () => (
  <div className="Missing">
    <img
      alt="404"
      className="Missing-image"
      src={Computer404}
    />
    <div className="Missing-text">
      Unfortunately the page you were looking for could not be found.
    </div>
    <NavLink to="/">
      <button className="button-pointer Missing-home-button">
        Home
      </button>
    </NavLink>
  </div>
);
export default Missing;
