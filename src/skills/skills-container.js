import React, { Component } from 'react';

import Skills from './skills';

const LARGE_LINES = 16;
const SMALL_LINES = 44;
const SMALL_SCREEN_SIZE = 680;

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
    window.innerWidth < SMALL_SCREEN_SIZE ? SMALL_LINES : LARGE_LINES
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
