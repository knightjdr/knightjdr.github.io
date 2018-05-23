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
      <div
        className="Timeline-panel-container"
        style={{
          transform: `translateX(${(activeSection - 1) * 33.33}%)`,
        }}
      >
        <div
          className="Timeline-panel"
          style={{
            opacity: activeSection === 2 ? 1 : 0,
          }}
        >
          <div className="Timeline-section-title">
            { Details[2].title }
          </div>
          { TimelineItems(Details[2].items, itemSelection, handleItem) }
        </div>
        <div
          className="Timeline-panel"
          style={{
            opacity: activeSection === 1 ? 1 : 0,
          }}
        >
          <div className="Timeline-section-title">
            { Details[1].title }
          </div>
          { TimelineItems(Details[1].items, itemSelection, handleItem) }
        </div>
        <div
          className="Timeline-panel"
          style={{
            opacity: activeSection === 0 ? 1 : 0,
          }}
        >
          <div className="Timeline-section-title">
            { Details[0].title }
          </div>
          { TimelineItems(Details[0].items, itemSelection, handleItem) }
        </div>
      </div>
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
