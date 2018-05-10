import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './logo';
import LogoAccent from './logo-accent';
import SmallScreenMenu from './small-screen-menu-container';

import './navbar.css';

const Navbar = ({
  background,
  fixed,
  links,
  smallScreen,
}) => {
  const className = background ? 'Navbar-default' : 'Navbar-transparent';
  const linksElement = smallScreen ?
    <SmallScreenMenu links={links} />
    :
    links.map(link => (
      <NavLink
        className="Navbar-link"
        key={link.text}
        to={link.route}
      >
        { link.text }
      </NavLink>
    ));
  const logo = background ? LogoAccent() : Logo();
  return (
    <div
      className={`Navbar ${className}`}
      style={{
        position: fixed ? 'fixed' : 'absolute',
      }}
    >
      <NavLink
        className="Navbar-logo-link"
        to="/"
      >
        {logo}
      </NavLink>
      <div className="Navbar-link-container">
        { linksElement }
      </div>
    </div>
  );
};

Navbar.propTypes = {
  background: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  smallScreen: PropTypes.bool.isRequired,
};

export default Navbar;
