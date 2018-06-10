import React from 'react';

import './loading.css';

const Loading = () => (
  <div className="Loading-container">
    <svg className="Loading-svg">
      <circle className="Loading-dot-left" />
    </svg>
    <svg className="Loading-svg">
      <circle className="Loading-dot-middle" />
    </svg>
    <svg className="Loading-svg">
      <circle className="Loading-dot-right" />
    </svg>
  </div>
);

export default Loading;
