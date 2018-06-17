import PropTypes from 'prop-types';
import React from 'react';

import Details from './timeline__content-details';
import Items from './timeline__content-items';

import './timeline__content.css';

const Content = ({
  activeSection,
  handleItem,
  itemSelection,
}) => (
  <div className="timeline__content">
    <div
      className="timeline__content-panel"
      style={{
        transform: `translateX(${(activeSection - 1) * 33.33}%)`,
      }}
    >
      <div
        className="timeline__content-panel-inner"
        style={{
          opacity: activeSection === 2 ? 1 : 0,
        }}
      >
        <div className="timeline__content-title">
          { Details[2].title }
        </div>
        { Items(Details[2].items, itemSelection, handleItem) }
      </div>
      <div
        className="timeline__content-panel-inner"
        style={{
          opacity: activeSection === 1 ? 1 : 0,
        }}
      >
        <div className="timeline__content-title">
          { Details[1].title }
        </div>
        { Items(Details[1].items, itemSelection, handleItem) }
      </div>
      <div
        className="timeline__content-panel-inner"
        style={{
          opacity: activeSection === 0 ? 1 : 0,
        }}
      >
        <div className="timeline__content-title">
          { Details[0].title }
        </div>
        { Items(Details[0].items, itemSelection, handleItem) }
      </div>
    </div>
  </div>
);

Content.propTypes = {
  activeSection: PropTypes.number.isRequired,
  handleItem: PropTypes.func.isRequired,
  itemSelection: PropTypes.number.isRequired,
};

export default Content;
