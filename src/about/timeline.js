import PropTypes from 'prop-types';
import React from 'react';

import ConnectorClass from './connector-class';
import Details from './timeline-details';
import OuterButtonClass from './outerbutton-class';
import TimelineItems from './timeline-items';

import './timeline.css';

const Timeline = ({
  activeSection,
  handleClick,
  handleItem,
  itemSelection,
  lastSection,
}) => (
  <div className="Timeline">
    <div className="Timeline-buttons">
      <div className={`Timeline-outer-button Timeline-education-outer ${OuterButtonClass(activeSection, lastSection, 0)}`} />
      <div className={`Timeline-outer-button Timeline-career-outer ${OuterButtonClass(activeSection, lastSection, 1)}`} />
      <div className={`Timeline-outer-button Timeline-publication-outer ${OuterButtonClass(activeSection, lastSection, 2)}`} />
      <div className={`Timeline-connector Timeline-connector-left ${ConnectorClass(activeSection, lastSection, 0)}`} />
      <div className={`Timeline-connector Timeline-connector-right ${ConnectorClass(activeSection, lastSection, 1)}`} />
      <button
        className="Timeline-button Timeline-education-button button-pointer"
        onClick={() => { handleClick(0); }}
      />
      <button
        className="Timeline-button Timeline-career-button button-pointer"
        onClick={() => { handleClick(1); }}
      />
      <button
        className="Timeline-button Timeline-publication-button button-pointer"
        onClick={() => { handleClick(2); }}
      />
    </div>
    <div className="Timeline-content">
      <div className="Timeline-section-title">
        { Details[activeSection].title }
      </div>
      { TimelineItems(Details[activeSection].items, itemSelection, handleItem) }
    </div>
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
