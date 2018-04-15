import React from 'react';

import FadeInSroll from '../fade-in-scroll/fade-in-scroll';

import './footer.css';

const Footer = () => (
  <div className="Footer-container">
    <FadeInSroll className="Footer-flex-container">
      <div className="Footer-title">
        Footer
      </div>
      <div className="Footer-details">
        Although formally trained as a molecular biologist, I have been programming
        since 2000. In 2015 I became a full-time progammer and now work as a
        bioinformatician at the Lunenfeld-Tanenbaum Research Institute in Toronto
        creating web apps that help biologists to analyze, manage and visualize their
        data.
      </div>
    </FadeInSroll>
  </div>
);
export default Footer;
