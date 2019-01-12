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
    const { activeSection, itemSelection, lastSection } = this.state;
    return (
      <Timeline
        activeSection={activeSection}
        handleClick={this.handleClick}
        handleItem={this.handleItem}
        itemSelection={itemSelection}
        lastSection={lastSection}
      />
    );
  }
}

export default TimelineContainer;
