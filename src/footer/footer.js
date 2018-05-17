import React from 'react';
import ReactTos from 'react-tos';

import Email from './assets/email.svg';
import Github from './assets/github.svg';
import Scholar from './assets/scholar.svg';

import './footer.css';

const Footer = () => (
  <div className="Footer-container">
    <ReactTos
      className="Footer-flex-container"
      config={{ startingScale: 0.95 }}
    >
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
          Google Scholar
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
    </ReactTos>
  </div>
);
export default Footer;
