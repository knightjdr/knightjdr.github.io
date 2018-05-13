import React, { Component } from 'react';

import Timeline from './timeline';

class TimelineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
      lastSection: 0,
    };
  }
  handleClick = (index) => {
    this.setState(({ activeSection }) => ({
      activeSection: index,
      lastSection: activeSection,
    }));
  }
  render() {
    return (
      <Timeline
        activeSection={this.state.activeSection}
        lastSection={this.state.lastSection}
        handleClick={this.handleClick}
      />
    );
  }
}

export default TimelineContainer;
