import PropTypes from 'prop-types';
import React from 'react';

import Buttons from './__buttons/timeline__buttons';
import Content from './__content/timeline__content';

import './timeline.css';

const Timeline = ({
  activeSection,
  handleClick,
  handleItem,
  itemSelection,
  lastSection,
}) => (
  <div className="timeline">
    <Buttons
      activeSection={activeSection}
      handleClick={handleClick}
      lastSection={lastSection}
    />
    <Content
      activeSection={activeSection}
      handleItem={handleItem}
      itemSelection={itemSelection}
    />
  </div>
);

Timeline.propTypes = {
  activeSection: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleItem: PropTypes.func.isRequired,
  itemSelection: PropTypes.number.isRequired,
  lastSection: PropTypes.number.isRequired,
};

export default Timeline;
