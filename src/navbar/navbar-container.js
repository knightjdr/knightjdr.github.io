import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Navbar from './navbar';

const smallScreenSize = 700;

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: this.smallScreen(),
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      isSmallScreen: this.smallScreen(),
    });
  }

  smallScreen = () => {
    const isSmall = window.innerWidth <= smallScreenSize;
    return isSmall;
  }

  render() {
    const {
      background,
      fixed,
      links,
      showLogo,
    } = this.props;
    const { isSmallScreen } = this.state;
    return (
      <Navbar
        background={background}
        fixed={fixed}
        isSmallScreen={isSmallScreen}
        links={links}
        showLogo={showLogo}
      />
    );
  }
}

NavbarContainer.defaultProps = {
  background: false,
  fixed: true,
  links: [],
  showLogo: true,
};

NavbarContainer.propTypes = {
  background: PropTypes.bool,
  fixed: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  showLogo: PropTypes.bool,
};

export default NavbarContainer;
