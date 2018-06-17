import React, { Component } from 'react';

import Skills from './skills';

const largeLines = 15;
const smallLines = 41;
const smallScreenSize = 680;

class SkillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.setLines(),
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
      lines: this.setLines(),
    });
  }
  setLines = () => (
    window.innerWidth < smallScreenSize ? smallLines : largeLines
  )
  render() {
    return (
      <Skills
        lines={this.state.lines}
      />
    );
  }
}

export default SkillsContainer;
