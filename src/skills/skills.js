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
      <div className="Skills-terminal">
        <div className="Skills-terminal-bar">
          <div className="Skills-terminal-bar-title">
            skills.js
          </div>
          <div className="Skills-terminal-button-container">
            <div className="Skills-terminal-close">
              ×
            </div>
            <div className="Skills-terminal-minimize">
              −
            </div>
            <div className="Skills-terminal-maximize">
              ⬌
            </div>
          </div>
        </div>
        <div className="Skills-terminal-code">
          <div>
            <span className="Skills-code-purple Skills-space">const</span>
            <span className="Skills-code-red Skills-space">Skills</span>
            <span className="Skills-code-grey">= {'{'}</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-green Skills-space">backEnd:</span>
            <span className="Skills-code-grey">[],</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-green Skills-space">frontEnd:</span>
            <span className="Skills-code-grey">[],</span>
          </div>
          <div>
            <span className="Skills-code-grey">{'}'};</span>
          </div>
          <div>
            <span className="Skills-code-purple Skills-space">export default</span>
            <span className="Skills-code-red">Skills</span>
            <span className="Skills-code-grey">;</span>
          </div>
        </div>
      </div>
    </ReactTos>
  </div>
);
export default Skills;
