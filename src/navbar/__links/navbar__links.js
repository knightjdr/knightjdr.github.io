import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '../__menu/navbar__menu-container';

import './navbar__links.css';

const Links = ({
  isSmallScreen,
  links,
}) => {
  const linksElement = isSmallScreen
    ? <Menu links={links} />
    : (
      links.map(link => (
        <NavLink
          className="navbar-link"
          key={link.text}
          to={link.route}
        >
          { link.text }
        </NavLink>
      ))
    );
  return (
    <div className="navbar-links">
      { linksElement }
    </div>
  );
};

Links.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Links;
