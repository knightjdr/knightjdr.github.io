import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Bars from './navbar__menu-bars';

import './navbar__menu.css';

const SmallScreenMenu = ({
  links,
  closeBackdrop,
  showMenu,
  viewMenu,
}) => (
  <div className="navbar__menu">
    <button
      className="navbar__menu-button"
      onClick={showMenu}
      type="button"
    >
      {Bars()}
    </button>
    <button
      className="navbar__menu-backdrop"
      onClick={closeBackdrop}
      style={{
        pointerEvents: viewMenu ? 'auto' : 'none',
      }}
      type="button"
    >
      <ul className={`navbar__menu-inner ${viewMenu ? 'navbar__menu-inner_show' : 'navbar__menu-inner_hide'}`}>
        {
          links.map(link => (
            <li key={link.text}>
              <NavLink
                className="navbar__menu-link"
                to={link.route}
              >
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </button>
  </div>
);

SmallScreenMenu.propTypes = {
  closeBackdrop: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  showMenu: PropTypes.func.isRequired,
  viewMenu: PropTypes.bool.isRequired,
};

export default SmallScreenMenu;
