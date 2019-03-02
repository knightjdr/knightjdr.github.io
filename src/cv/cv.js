import React from 'react';

import Awards from './__awards/cv__awards';
import Degrees from './__degrees/cv__degrees';
import Experience from './__experience/cv__experience';
import Navbar from '../navbar/navbar-container';
import Publications from './__publications/cv__publications';
import Talks from './__talks/cv__talks';

import './cv.css';

const links = [
  {
    route: '/cv',
    text: 'CV',
  },
];

const CV = () => (
  <main className="cv">
    <Navbar
      background
      fixed={false}
      links={links}
    />
    <div className="cv__inner">
      <header>
        <h1>James D. R. Knight, PhD</h1>
        <address>
          <div>Lunenfeld-Tanenbaum Research Institute</div>
          <div>600 University Avenue, Room 970A</div>
          <div>Toronto, Ontario, Canada</div>
          <a
            className="cv__email"
            href="mailto:knightjdr@gmail.com?subject=About jamesknight.dev"
          >
            contact
          </a>
        </address>
      </header>
      <ul className="cv__links">
        <li><a href="#degrees">Degrees</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#talks">Talks</a></li>
      </ul>
      <Degrees />
      <Experience />
      <Awards />
      <Publications />
      <Talks />
    </div>
  </main>
);
export default CV;
