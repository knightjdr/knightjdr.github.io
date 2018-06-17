import PropTypes from 'prop-types';
import React from 'react';

import './loading.css';

const Loading = ({
  color,
}) => {
  const dotColor = {
    light: 'loading__dot_theme-light',
    medium: 'loading__dot_theme-medium',
  };
  return (
    <div className="loading">
      <svg className="loading__svg">
        <circle className={`loading__dot-left ${dotColor[color]}`} />
      </svg>
      <svg className="loading__svg">
        <circle className={`loading__dot-middle ${dotColor[color]}`} />
      </svg>
      <svg className="loading__svg">
        <circle className={`loading__dot-right ${dotColor[color]}`} />
      </svg>
    </div>
  );
};

Loading.defaultProps = {
  color: 'medium',
};

Loading.propTypes = {
  color: PropTypes.string,
};

export default Loading;
