import React from 'react';
import ReactTos from 'react-tos';

import './projects.css';

const Projects = () => (
  <div className="projects">
    <ReactTos
      className="projects__inner"
      config={{ startingScale: 0.95 }}
    >
      <div className="projects__title">
        Projects
      </div>
    </ReactTos>
    <div className="projects__details">
      Although formally trained as a molecular biologist, I have been programming
      since 2000. In 2015 I became a full-time progammer and now work as a
      bioinformatician at the Lunenfeld-Tanenbaum Research Institute in Toronto
      creating web apps that help biologists to analyze, manage and visualize their
      data.
    </div>
  </div>
);
export default Projects;
