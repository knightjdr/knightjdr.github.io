import React from 'react';
import ReactTos from 'react-tos';
import { NavLink } from 'react-router-dom';

import CV from './assets/cv.svg';
import Email from './assets/email.svg';
import Github from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg';
import Scholar from './assets/scholar.svg';

import './footer.css';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => (
  <footer
    className="Footer-container"
    role="contentinfo"
  >
    <ReactTos
      className="Footer-flex-container"
      config={{ startingScale: 0.95 }}
    >
      <div className="Footer-link">
        <NavLink
          onClick={scrollTop}
          to="/cv"
        >
          <img
            alt="CV"
            src={CV}
          />
        </NavLink>
        <div>
          CV
        </div>
      </div>
      <div className="Footer-link">
        <a href="mailto:knightjdr@gmail.com?subject=About jamesknight.ca">
          <img
            alt="E-mail"
            src={Email}
          />
        </a>
        <div>
          E-mail
        </div>
      </div>
      <div className="Footer-link">
        <a
          href="https://github.com/knightjdr"
          rel="nofollow noreferrer"
        >
          <img
            alt="GitHub"
            src={Github}
          />
        </a>
        <div>
          GitHub
        </div>
      </div>
      <div className="Footer-link">
        <a
          href="https://scholar.google.ca/citations?user=M6Y_Y5cAAAAJ"
          rel="nofollow noreferrer"
        >
          <img
            alt="Google Scholar"
            src={Scholar}
          />
        </a>
        <div>
          Scholar
        </div>
      </div>
      <div className="Footer-link">
        <a
          href="https://www.linkedin.com/in/james-knight-174996156"
          rel="nofollow noreferrer"
        >
          <img
            alt="LinkedIn"
            src={LinkedIn}
          />
        </a>
        <div>
          LinkedIn
        </div>
      </div>
    </ReactTos>
  </footer>
);
export default Footer;
