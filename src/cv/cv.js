import React from 'react';

import Associations from './associations';
import Awards from './awards';
import Degrees from './degrees';
import Experience from './experience';
import Navbar from '../navbar/navbar-container';
import Publications from './publications';
import Talks from './talks';

import './cv.css';

const CV = () => (
  <div className="CV-container">
    <Navbar
      background
      fixed={false}
      links={[]}
    />
    <div className="CV-content">
      <div>
        James D. R. Knight, PhD<br />
        Lunenfeld-Tanenbaum Research Institute<br />
        600 University Avenue, Room 970A<br />
        Toronto, Ontario, Canada<br />
        <a href="mailto:knightjdr@gmail.com?subject=About jamesknight.ca">contact</a>
      </div>
      <Degrees />
      <Experience />
      <Awards />
      <Publications />
      <Talks />
      <Associations />
    </div>
  </div>
);
export default CV;
