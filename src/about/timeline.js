import PropTypes from 'prop-types';
import React from 'react';

import './timeline.css';

const titles = [
  'Education',
  'Career',
  'Publications',
];

const connectorClass = (selection, last, index) => {
  let className = '';
  // Add transition.
  if (
    selection === 0 ||
    (
      selection === 1 &&
      index === 1
    )
  ) {
    className = 'Timeline-connector-right-transition';
  } else {
    className = 'Timeline-connector-left-transition';
  }

  return className;
};

const outerButtonClass = (selection, last, index) => {
  let className = '';
  // Add transition.
  if (selection === index) {
    className = 'Timeline-button-center-transition';
  } else if (selection > index) {
    className = 'Timeline-button-right-transition';
  } else {
    className = 'Timeline-button-left-transition';
  }

  // Add delay.
  if (selection === index) {
    className += ' Timeline-button-end-transition';
  } else if (last === index) {
    className += ' Timeline-button-start-transition';
  } else if (index === 1) {
    className += ' Timeline-button-inter-transition';
  } else {
    className += ' Timeline-button-start-transition';
  }

  return className;
};

const Timeline = ({
  activeSection,
  lastSection,
  handleClick,
}) => (
  <div className="Timeline">
    <div className="Timeline-buttons">
      <div className={`Timeline-outer-button Timeline-education-outer ${outerButtonClass(activeSection, lastSection, 0)}`} />
      <div className={`Timeline-outer-button Timeline-career-outer ${outerButtonClass(activeSection, lastSection, 1)}`} />
      <div className={`Timeline-outer-button Timeline-publication-outer ${outerButtonClass(activeSection, lastSection, 2)}`} />
      <div className={`Timeline-connector Timeline-connector-left ${connectorClass(activeSection, lastSection, 0)}`} />
      <div className={`Timeline-connector Timeline-connector-right ${connectorClass(activeSection, lastSection, 1)}`} />
      <button
        className="Timeline-button Timeline-education-button"
        onClick={() => { handleClick(0); }}
      />
      <button
        className="Timeline-button Timeline-career-button"
        onClick={() => { handleClick(1); }}
      />
      <button
        className="Timeline-button Timeline-publication-button"
        onClick={() => { handleClick(2); }}
      />
    </div>
    <div className="Timeline-content">
      { titles[activeSection] }
    </div>
  </div>
);

Timeline.propTypes = {
  activeSection: PropTypes.number.isRequired,
  lastSection: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Timeline;
