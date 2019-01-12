import React from 'react';

import Associations from './__associations/cv__associations';
import Awards from './__awards/cv__awards';
import Degrees from './__degrees/cv__degrees';
import Experience from './__experience/cv__experience';
import Navbar from '../navbar/navbar-container';
import Publications from './__publications/cv__publications';
import Talks from './__talks/cv__talks';

import './cv.css';

const CV = () => (
  <div className="cv">
    <Navbar
      background
      fixed={false}
      links={[]}
    />
    <div className="cv__inner">
      <div>
        James D. R. Knight, PhD<br />
        Lunenfeld-Tanenbaum Research Institute<br />
        600 University Avenue, Room 970A<br />
        Toronto, Ontario, Canada<br />
        <a
          className="cv__email"
          href="mailto:knightjdr@gmail.com?subject=About jamesknight.ca"
        >
          contact
        </a>
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
