import PropTypes from 'prop-types';
import React from 'react';

import ConnectorClass from './connector-class';
import Details from './timeline-details';
import OuterButtonClass from './outerbutton-class';

import './timeline.css';

const Timeline = ({
  activeSection,
  lastSection,
  handleClick,
}) => (
  <div className="Timeline">
    <div className="Timeline-buttons">
      <div className={`Timeline-outer-button Timeline-education-outer ${OuterButtonClass(activeSection, lastSection, 0)}`} />
      <div className={`Timeline-outer-button Timeline-career-outer ${OuterButtonClass(activeSection, lastSection, 1)}`} />
      <div className={`Timeline-outer-button Timeline-publication-outer ${OuterButtonClass(activeSection, lastSection, 2)}`} />
      <div className={`Timeline-connector Timeline-connector-left ${ConnectorClass(activeSection, lastSection, 0)}`} />
      <div className={`Timeline-connector Timeline-connector-right ${ConnectorClass(activeSection, lastSection, 1)}`} />
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
      <div className="Timeline-section-title">
        { Details[activeSection].title }
      </div>
      <div className="Timeline-item-container">
        <div className="Timeline-item-year">
          { Details[activeSection].items[0].year }
        </div>
        <div className="Timeline-item-content">
          <div className="Timeline-item-details-container">
            <div className="Timeline-item-title">
              { Details[activeSection].items[0].title }
            </div>
            { Details[activeSection].items[0].details }
          </div>
          <div>
            <a
              href={Details[activeSection].items[0].link}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                alt={Details[activeSection].items[0].imgAlt}
                className="Timeline-item-img"
                src={Details[activeSection].items[0].img}
              />
            </a>
          </div>
        </div>
        <div className="Timeline-item-end" />
      </div>
    </div>
  </div>
);

Timeline.propTypes = {
  activeSection: PropTypes.number.isRequired,
  lastSection: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Timeline;
