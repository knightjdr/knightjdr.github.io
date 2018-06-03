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
            coding.js
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
            <span className="Skills-code-red Skills-space">CodingSkills</span>
            <span className="Skills-code-grey">= &#123;</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-green Skills-space">backEnd:</span>
            <span className="Skills-code-grey">&#123;</span>
          </div>
          <div className="Skills-tab2">
            <span className="Skills-code-green Skills-space">current:</span>
            <span className="Skills-code-grey">[</span>
            <div className="Skills-list-wrapper">
              <div>&apos;Express&apos;</div>
              <div>&apos;MongoDB&apos;</div>
              <div>&apos;Node.js&apos;</div>
            </div>
            <span className="Skills-code-grey Skills-space">],</span>
          </div>
          <div className="Skills-tab2">
            <span className="Skills-code-green Skills-space">past:</span>
            <span className="Skills-code-grey">[</span>
            <div className="Skills-list-wrapper">
              <div>&apos;MySQL&apos;</div>
              <div>&apos;PHP&apos;</div>
            </div>
            <span className="Skills-code-grey Skills-space">],</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-grey">&#125;,</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-green Skills-space">frontEnd:</span>
            <span className="Skills-code-grey">&#123;</span>
          </div>
          <div className="Skills-tab2">
            <span className="Skills-code-green Skills-space">current:</span>
            <span className="Skills-code-grey">[</span>
            <div className="Skills-list-wrapper">
              <div>&apos;CSS&apos;</div>
              <div>&apos;D3.js&apos;</div>
              <div>&apos;HTML5&apos;</div>
              <div>&apos;React&apos;</div>
              <div>&apos;SCSS&apos;</div>
              <div>&apos;Vanilla JS&apos;</div>
            </div>
            <span className="Skills-code-grey Skills-space">],</span>
          </div>
          <div className="Skills-tab2">
            <span className="Skills-code-green Skills-space">past:</span>
            <span className="Skills-code-grey">[</span>
            <div className="Skills-list-wrapper">
              <div>&apos;AngularJS&apos;</div>
              <div>&apos;jQuery&apos;</div>
            </div>
            <span className="Skills-code-grey Skills-space">],</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-grey">&#125;,</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-green Skills-space">languages:</span>
            <span className="Skills-code-grey">&#123;</span>
          </div>
          <div className="Skills-tab2">
            <span className="Skills-code-green Skills-space">current:</span>
            <span className="Skills-code-grey">[</span>
            <div className="Skills-list-wrapper">
              <div>&apos;Go&apos;</div>
              <div>&apos;Perl&apos;</div>
              <div>&apos;R&apos;</div>
            </div>
            <span className="Skills-code-grey Skills-space">],</span>
          </div>
          <div className="Skills-tab2">
            <span className="Skills-code-green Skills-space">past:</span>
            <span className="Skills-code-grey">[</span>
            <div className="Skills-list-wrapper">
              <div>&apos;C&apos;</div>
              <div>&apos;Java&apos;</div>
              <div>&apos;MATLAB&apos;</div>
              <div>&apos;Python&apos;</div>
            </div>
            <span className="Skills-code-grey Skills-space">],</span>
          </div>
          <div className="Skills-tab">
            <span className="Skills-code-grey">&#125;,</span>
          </div>
          <div>
            <span className="Skills-code-grey">&#125;;</span>
          </div>
          <div>
            <span className="Skills-code-purple Skills-space">export default</span>
            <span className="Skills-code-red">CodingSkills</span>
            <span className="Skills-code-grey">;</span>
          </div>
        </div>
      </div>
    </ReactTos>
  </div>
);
export default Skills;
