import React from 'react';
import ReactTos from 'react-tos';

import { BackdropLeft, BackdropRight } from './skills__backdrop';

import './skills.css';

const Skills = () => (
  <section className="skills">
    <BackdropLeft />
    <ReactTos
      className="skills__inner"
      config={{ startingScale: 0.95 }}
    >
      <h3>Skills</h3>
      <div className="skills__terminal">
        <header>
          <h4>coding.js</h4>
          <div className="skills__terminal-buttons">
            <div className="skills__terminal-close">
              ×
            </div>
            <div className="skills__terminal-minimize">
              −
            </div>
            <div className="skills__terminal-maximize">
              ⬌
            </div>
          </div>
        </header>
        <div className="skills__terminal-code">
          <div>
            <span className="skills__terminal-code_purple skills__terminal-code_space">const</span>
            <span className="skills__terminal-code_red skills__terminal-code_space">CodingSkills</span>
            <span className="skills__terminal-code_grey">= &#123;</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_green skills__terminal-code_space">backEnd:</span>
            <span className="skills__terminal-code_grey">&#123;</span>
          </div>
          <div className="skills__terminal-code_tab2">
            <span className="skills__terminal-code_green skills__terminal-code_space">current:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;Express&apos;</div>
              <div>&apos;MongoDB&apos;</div>
              <div>&apos;Node.js&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div className="skills__terminal-code_tab2">
            <span className="skills__terminal-code_green skills__terminal-code_space">past:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;MySQL&apos;</div>
              <div>&apos;PHP&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_grey">&#125;,</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_green skills__terminal-code_space">frontEnd:</span>
            <span className="skills__terminal-code_grey">&#123;</span>
          </div>
          <div className="skills__terminal-code_tab2">
            <span className="skills__terminal-code_green skills__terminal-code_space">current:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;CSS&apos;</div>
              <div>&apos;D3.js&apos;</div>
              <div>&apos;HTML5&apos;</div>
              <div>&apos;React&apos;</div>
              <div>&apos;SCSS&apos;</div>
              <div>&apos;Vanilla JS&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div className="skills__terminal-code_tab2">
            <span className="skills__terminal-code_green skills__terminal-code_space">past:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;AngularJS&apos;</div>
              <div>&apos;jQuery&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_grey">&#125;,</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_green skills__terminal-code_space">languages:</span>
            <span className="skills__terminal-code_grey">&#123;</span>
          </div>
          <div className="skills__terminal-code_tab2">
            <span className="skills__terminal-code_green skills__terminal-code_space">current:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;Go&apos;</div>
              <div>&apos;JavaScript&apos;</div>
              <div>&apos;Perl&apos;</div>
              <div>&apos;R&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div className="skills__terminal-code_tab2">
            <span className="skills__terminal-code_green skills__terminal-code_space">past:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;C&apos;</div>
              <div>&apos;Java&apos;</div>
              <div>&apos;MATLAB&apos;</div>
              <div>&apos;Python&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_grey">&#125;,</span>
          </div>
          <div className="skills__terminal-code_tab">
            <span className="skills__terminal-code_green skills__terminal-code_space">learning:</span>
            <span className="skills__terminal-code_grey">[</span>
            <div className="skills__terminal-code-list">
              <div>&apos;GCP&apos;</div>
              <div>&apos;WebAssembly&apos;</div>
            </div>
            <span className="skills__terminal-code_grey skills__terminal-code_space">],</span>
          </div>
          <div>
            <span className="skills__terminal-code_grey">&#125;;</span>
          </div>
          <div className="skill__terminal-code-export">
            <span className="skills__terminal-code_purple skills__terminal-code_space">export default</span>
            <span className="skills__terminal-code_red">CodingSkills</span>
            <span className="skills__terminal-code_grey">;</span>
          </div>
        </div>
      </div>
    </ReactTos>
    <BackdropRight />
  </section>
);

export default Skills;
