import PropTypes from 'prop-types';
import React from 'react';

import Links from './__links/navbar__links';
import Logo from './__logo/navbar__logo';

import './navbar.css';

const Navbar = ({
  background,
  fixed,
  isSmallScreen,
  links,
}) => {
  const className = background ? 'navbar_theme-dark' : 'navbar_theme-transparent';
  return (
    <nav
      className={`navbar navbar_position-top ${className}`}
      style={{
        position: fixed ? 'fixed' : 'absolute',
      }}
    >
      <Logo color={background ? 'accent' : 'primary'} />
      <Links
        links={links}
        isSmallScreen={isSmallScreen}
      />
    </nav>
  );
};

Navbar.propTypes = {
  background: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Navbar;
