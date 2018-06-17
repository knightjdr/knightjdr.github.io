import React from 'react';
import ReactTos from 'react-tos';

import Timeline from './timeline/timeline-container';

import './about.css';

const About = () => (
  <div className="about">
    <ReactTos
      className="about__inner"
      config={{ startingScale: 0.95 }}
    >
      <div className="about__title">
        A brief history
      </div>
      <div className="about__details">
        Although formally trained as a molecular biologist, I have been programming
        since 2000. In 2015 I became a full-time progammer and now work as a
        bioinformatician at the Lunenfeld-Tanenbaum Research Institute in Toronto
        creating web apps that help biologists to analyze, manage and visualize their
        data.
      </div>
      <Timeline />
    </ReactTos>
  </div>
);
export default About;
