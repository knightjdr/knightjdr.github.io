import React from 'react';
import { NavLink } from 'react-router-dom';

import Computer404 from './assets/computer404-min.svg';

import './404.css';

const Missing = () => (
  <div className="missing">
    <img
      alt="404"
      className="missing__image"
      src={Computer404}
    />
    <div className="missing__text">
      Unfortunately the page you were looking for could not be found.
    </div>
    <NavLink
      className="missing__home-link"
      to="/"
    >
      <button
        className="missing__home-button"
        type="button"
      >
        Home
      </button>
    </NavLink>
  </div>
);
export default Missing;
