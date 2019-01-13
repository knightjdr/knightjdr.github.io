import React from 'react';
import ReactTos from 'react-tos';

import GeneInfo from './assets/gene-info.svg';
import Github from './assets/github.svg';
import Prohitsviz from './assets/viz-circle.svg';

import './projects.css';

const transitionConfigLeft = {
  duration: '1s',
  translate: '-10%',
  timingFunction: 'ease',
};
const transitionConfigRight = {
  duration: '1s',
  translate: '10%',
  timingFunction: 'ease',
};

const Projects = () => (
  <section className="projects">
    <div className="projects__inner">
      <ReactTos config={{ startingScale: 0.95 }}>
        <h3>Projects</h3>
      </ReactTos>
      <div className="projects__grid">
        <div className="projects__grid-row">
          <ReactTos
            className="projects__grid-image"
            config={transitionConfigLeft}
          >
            <img
              alt="ProHits-viz"
              className="projects__image"
              src={Prohitsviz}
            />
          </ReactTos>
          <div className="projects__grid-description">
            <ReactTos
              className="projects__grid-description-inner"
              config={transitionConfigRight}
            >
              <p>
                ProHits-viz is a suite of interactive webtools for analyzing and visualizing
                protein-protein interaction data. This is the project that started
                my web development career. I am currently working on a new implementation
                of the site using React with Node.js and Golang on the backend. The current
                version of the site can be seen at
                {' '}
                <a href="https://prohits-viz.org">
                  prohits-viz.org
                </a>
                {' '}
                (in progress 2019), while the first version can be seen at
                {' '}
                <a href="https://prohits-viz.lunenfeld.ca">
                  prohits-viz.lunenfeld.ca
                </a>
                {' '}
                (created 2017).
              </p>
            </ReactTos>
          </div>
        </div>
        <div className="projects__grid-row">
          <div className="projects__grid-description">
            <ReactTos
              className="projects__grid-description-inner"
              config={transitionConfigLeft}
            >
              <p>
                <a href="https://chrome.google.com/webstore/detail/gene-info/jggendahejbhkghnachhlomkkheomchp?hl=en-US">
                  Gene Info
                </a>
                {' '}
                is a Chrome Extension that allows molecular biologists
                to retrieve gene information on any webpage simply by
                double clicking a gene name. It was built with vanilla
                JavaScript.
              </p>
            </ReactTos>
          </div>
          <ReactTos
            className="projects__grid-image"
            config={transitionConfigRight}
          >
            <img
              alt="Gene Info"
              className="projects__image"
              src={GeneInfo}
            />
          </ReactTos>
        </div>
        <div className="projects__grid-row">
          <ReactTos
            className="projects__grid-image"
            config={transitionConfigLeft}
          >
            <img
              alt="GitHub"
              className="projects__image"
              src={Github}
            />
          </ReactTos>
          <div className="projects__grid-description">
            <ReactTos
              className="projects__grid-description-inner"
              config={transitionConfigRight}
            >
              Checkout
              {' '}
              <a href="https://github.com/knightjdr">
                GitHub
              </a>
              {' '}
              for my other public projects.
            </ReactTos>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Projects;
