import React from 'react';
import { NavLink } from 'react-router-dom';

import Computer404 from './assets/computer404-min.svg';

import './404.css';

const Missing = () => (
  <main className="missing">
    <img
      alt="404"
      src={Computer404}
    />
    <p>
      Unfortunately the page you were looking for could not be found.
    </p>
    <NavLink
      className="missing__home-link"
      to="/"
    >
      <button type="button">
        Home
      </button>
    </NavLink>
  </main>
);
export default Missing;
