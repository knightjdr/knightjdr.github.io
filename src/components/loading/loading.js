import PropTypes from 'prop-types';
import React from 'react';

import './loading.css';

const dotColor = {
  default: 'Loading-dot-default',
  light: 'Loading-dot-light',
};

const Loading = ({
  color,
}) => (
  <div className="Loading-container">
    <svg className="Loading-svg">
      <circle className={`Loading-dot-left ${dotColor[color]}`} />
    </svg>
    <svg className="Loading-svg">
      <circle className={`Loading-dot-middle ${dotColor[color]}`} />
    </svg>
    <svg className="Loading-svg">
      <circle className={`Loading-dot-right ${dotColor[color]}`} />
    </svg>
  </div>
);

Loading.defaultProps = {
  color: 'default',
};

Loading.propTypes = {
  color: PropTypes.string,
};

export default Loading;
