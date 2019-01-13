/* eslint no-new: 0 */

import React, { Component } from 'react';
import Vivus from 'vivus';

import { ReactComponent as Description } from './description.svg';

class DescriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { classes: ['landing__description'] };
  }

  componentDidMount = () => {
    const options = {
      duration: 100,
    };
    this.vivus = new Vivus('landing__description', options, () => {
      this.setState(({ classes }) => ({
        classes: [...classes, 'landing__description_fill'],
      }));
    });
  }

  componentWillUnmount = () => {
    this.vivus.destroy();
  }

  render() {
    const { classes } = this.state;
    const className = classes.join(' ');
    return (
      <div className={className}>
        <Description />
      </div>
    );
  }
}

export default DescriptionContainer;
