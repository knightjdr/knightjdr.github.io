import PropTypes from 'prop-types';
import React from 'react';

import Details from './timeline__content-details';
import Items from './timeline__content-items';

import './timeline__content.css';

const panelInner = (activeSection, handleItem, itemSelection, index) => (
  <div
    className="timeline__content-panel-inner"
    style={{
      opacity: activeSection === index ? 1 : 0,
    }}
  >
    <h4>{Details[index].title}</h4>
    { Items(Details[index].items, itemSelection, handleItem) }
  </div>
);

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
      { panelInner(activeSection, handleItem, itemSelection, 2)}
      { panelInner(activeSection, handleItem, itemSelection, 1)}
      { panelInner(activeSection, handleItem, itemSelection, 0)}
    </div>
  </div>
);

Content.propTypes = {
  activeSection: PropTypes.number.isRequired,
  handleItem: PropTypes.func.isRequired,
  itemSelection: PropTypes.number.isRequired,
};

export default Content;
