import React, { Component } from 'react';

import Timeline from './timeline';

class TimelineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
      lastSection: 0,
      itemSelection: 0,
    };
  }
  handleClick = (index) => {
    this.setState(({ activeSection }) => ({
      activeSection: index,
      itemSelection: 0,
      lastSection: activeSection,
    }));
  }
  handleItem = (index) => {
    this.setState({
      itemSelection: index,
    });
  }
  render() {
    return (
      <Timeline
        activeSection={this.state.activeSection}
        handleClick={this.handleClick}
        handleItem={this.handleItem}
        itemSelection={this.state.itemSelection}
        lastSection={this.state.lastSection}
      />
    );
  }
}

export default TimelineContainer;
