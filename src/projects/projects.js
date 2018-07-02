import React from 'react';
import ReactTos from 'react-tos';

import Cellmap from './assets/cellmap-circle.svg';
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
  <div className="projects">
    <div className="projects__inner">
      <ReactTos config={{ startingScale: 0.95 }}>
        <div className="projects__title">
          Projects
        </div>
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
              ProHits-viz is a suite of interactive webtools for analyzing and visualizing
              protein-protein interaction data. This is the project that started
              my web development career. I am currently working on a new implementation
              of the site using React with Node.js and Go on the backend. The current
              version of the site can be seen
              <a
                className="projects__link"
                href="https://prohits-viz.lunenfeld.ca"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              (created 2016), while the first version can be seen
              <a
                className="projects__link"
                href="http://prohitstools.mshri.on.ca/"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              (created 2015).
            </ReactTos>
          </div>
        </div>
        <div className="projects__grid-row">
          <div className="projects__grid-description">
            <ReactTos
              className="projects__grid-description-inner"
              config={transitionConfigLeft}
            >
              The human cell map is the Gingras lab project to map the cell
              using proximity biotinylation. I&apos;m responsible for analyzing the
              data, creating the map and building the site, which can be viewed
              <a
                className="projects__link project__link-period"
                href="https://cell-map.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              It was built using AngularJS, Node.js and MongoDB.
            </ReactTos>
          </div>
          <ReactTos
            className="projects__grid-image"
            config={transitionConfigRight}
          >
            <img
              alt="Cell map"
              className="projects__image"
              src={Cellmap}
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
              <a
                className="projects__link"
                href="https://github.com/knightjdr"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              for my other public projects.
            </ReactTos>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Projects;
