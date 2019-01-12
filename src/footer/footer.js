import React from 'react';
import ReactTos from 'react-tos';
import { NavLink } from 'react-router-dom';

import CV from './assets/cv.svg';
import Email from './assets/email.svg';
import Github from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg';
import Scholar from './assets/scholar.svg';
import ScrollTop from '../helpers/scroll-top';

import './footer.css';

const Footer = () => (
  <footer
    className="footer"
    role="contentinfo"
  >
    <ReactTos
      className="footer__inner"
      config={{ startingScale: 0.95 }}
    >
      <div>
        <NavLink
          className="footer__link"
          onClick={ScrollTop}
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
      <div>
        <a
          className="footer__link"
          href="mailto:knightjdr@gmail.com?subject=About jamesknight.ca"
        >
          <img
            alt="E-mail"
            className="footer__image"
            src={Email}
          />
        </a>
        <div>
          E-mail
        </div>
      </div>
      <div>
        <a
          className="footer__link"
          href="https://github.com/knightjdr"
        >
          <img
            alt="GitHub"
            className="footer__image"
            src={Github}
          />
        </a>
        <div>
          GitHub
        </div>
      </div>
      <div>
        <a
          className="footer__link"
          href="https://scholar.google.ca/citations?user=M6Y_Y5cAAAAJ"
        >
          <img
            alt="Google Scholar"
            className="footer__image"
            src={Scholar}
          />
        </a>
        <div>
          Scholar
        </div>
      </div>
      <div>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/james-knight-174996156"
        >
          <img
            alt="LinkedIn"
            className="footer__image"
            src={LinkedIn}
          />
        </a>
        <div>
          LinkedIn
        </div>
      </div>
    </ReactTos>
    <small className="footer__copyright">
      © James Knight, 2019.
    </small>
  </footer>
);
export default Footer;
