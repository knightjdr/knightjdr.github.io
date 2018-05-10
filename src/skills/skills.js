import React from 'react';
import ReactTos from 'react-tos';

import './skills.css';

const Skills = () => (
  <div className="Skills-container">
    <ReactTos
      className="Skills-flex-container"
      config={{ startingScale: 0.95 }}
    >
      <div className="Skills-title">
        Skills
      </div>
      <div className="Skills-details">
        Although formally trained as a molecular biologist, I have been programming
        since 2000. In 2015 I became a full-time progammer and now work as a
        bioinformatician at the Lunenfeld-Tanenbaum Research Institute in Toronto
        creating web apps that help biologists to analyze, manage and visualize their
        data.
      </div>
    </ReactTos>
  </div>
);
export default Skills;
