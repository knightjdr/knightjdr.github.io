import React from 'react';
import ReactTos from 'react-tos';

import './projects.css';

const Projects = () => (
  <div className="Projects-container">
    <ReactTos
      className="Projects-flex-container"
      config={{ startingScale: 0.95 }}
    >
      <div className="Projects-title">
        Projects
      </div>
      <div className="Projects-details">
        Although formally trained as a molecular biologist, I have been programming
        since 2000. In 2015 I became a full-time progammer and now work as a
        bioinformatician at the Lunenfeld-Tanenbaum Research Institute in Toronto
        creating web apps that help biologists to analyze, manage and visualize their
        data.
      </div>
    </ReactTos>
  </div>
);
export default Projects;
