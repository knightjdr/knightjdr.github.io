import PropTypes from 'prop-types';
import React from 'react';

import Connector from './timeline__connector';
import ButtonBg from './timeline__buttons-bg';

import './timeline__buttons.css';

const Buttons = ({
  activeSection,
  handleClick,
  lastSection,
}) => {
  const careerClick = () => { handleClick(1); };
  const educationClick = () => { handleClick(0); };
  const publicationClick = () => { handleClick(2); };
  return (
    <div className="timeline__buttons">
      <div className={`timeline__button-bg timeline__button-education-bg ${ButtonBg(activeSection, lastSection, 0)}`} />
      <div className={`timeline__button-bg timeline__button-career-bg ${ButtonBg(activeSection, lastSection, 1)}`} />
      <div className={`timeline__button-bg timeline__button-publication-bg ${ButtonBg(activeSection, lastSection, 2)}`} />
      <div className={`timeline__connector timeline__connector-left ${Connector(activeSection, lastSection, 0)}`} />
      <div className={`timeline__connector timeline__connector-right ${Connector(activeSection, lastSection, 1)}`} />
      <button
        className="timeline__button timeline__button-education"
        onClick={educationClick}
        type="button"
      >
        Education
      </button>
      <button
        className="timeline__button timeline__button-career"
        onClick={careerClick}
        type="button"
      >
        Career
      </button>
      <button
        className="timeline__button timeline__button-publication"
        onClick={publicationClick}
        type="button"
      >
        Publications
      </button>
    </div>
  );
};


Buttons.propTypes = {
  activeSection: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  lastSection: PropTypes.number.isRequired,
};

export default Buttons;
